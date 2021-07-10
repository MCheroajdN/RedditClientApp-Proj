import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EndPoints from '../../endpoints';
import { selectSearch } from '../search/searchSlice';

export const loadRedditPics = createAsyncThunk(
	'redditPics/getRedditPics',
	async () => {
		const response = await fetch(EndPoints.redditPics);
		const data = await response.json();
		return data.data.children;
	}
);

const sliceOptions = {
	name: 'redditPics',
	initialState: {
		pictures: [],
		isLoading: false,
		hasError: false,
	},
	reducers: {},
	extraReducers: {
		[loadRedditPics.pending]: (state, action) => {
			state.isLoading = true;
			state.hasError = false;
		},
		[loadRedditPics.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.pictures = action.payload;
		},
		[loadRedditPics.rejected]: (state, action) => {
			state.isLoading = false;
			state.hasError = true;
		},
	},
};

const redditPicsSlice = createSlice(sliceOptions);

export const selectRedditPics = (state) => state.redditPics.pictures;
export const selectFilteredPics = (state) => {
	const allPics = selectRedditPics(state);
	const searchPics = selectSearch(state);

	if (searchPics !== '') {
		return allPics.filter((pic) =>
			pic.data.title.toLowerCase().includes(searchPics.toLowerCase())
		);
	}
	return allPics;
};

export default redditPicsSlice.reducer;

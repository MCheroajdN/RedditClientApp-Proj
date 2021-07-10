import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EndPoints from '../../endpoints';

export const loadSubreddits = createAsyncThunk(
	'subreddits/getSubreddit',
	async () => {
		const response = await fetch(EndPoints.subreddits);
		const jsonData = await response.json();

		return jsonData.data.children;
	}
);

const sliceOptions = {
	name: 'subreddits',
	initialState: {
		subreddits: [],
		isLoading: false,
		hasError: false,
	},
	reducers: {},
	extraReducers: {
		[loadSubreddits.pending]: (state, action) => {
			state.isLoading = true;
			state.hasError = false;
		},
		[loadSubreddits.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.subreddits = action.payload;
		},
		[loadSubreddits.rejected]: (state, action) => {
			state.isLoading = false;
			state.hasError = true;
		},
	},
};

const subredditsSlice = createSlice(sliceOptions);

export const selectSubreddits = (state) => state.subreddits.subreddits;

export default subredditsSlice.reducer;

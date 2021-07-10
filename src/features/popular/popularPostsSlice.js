import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import EndPoints from '../../endpoints';

export const loadPopularPosts = createAsyncThunk(
	'popularPosts/getPopularPost',
	async () => {
		const response = await fetch(EndPoints.popular);
		const data = await response.json();
		return data.data.children;
	}
);

const sliceOptions = {
	name: 'popularPosts',
	initialState: {
		popular: [],
		isLoading: false,
		hasError: false,
	},
	reducers: {},
	extraReducers: {
		[loadPopularPosts.pending]: (state, action) => {
			state.isLoading = true;
			state.hasError = false;
		},
		[loadPopularPosts.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.popular = action.payload;
		},
		[loadPopularPosts.rejected]: (state, action) => {
			state.isLoading = false;
			state.hasError = true;
		},
	},
};

const popularPostsSlice = createSlice(sliceOptions);

export const selectPopularPosts = (state) => state.popularPosts.popular;

export default popularPostsSlice.reducer;

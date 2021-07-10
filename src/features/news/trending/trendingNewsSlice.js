import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EndPoints from '../../../endpoints';

export const loadTrendingNews = createAsyncThunk(
	'trendingNews/getTrendingNews',
	async () => {
		const response = await fetch(EndPoints.news);
		const data = await response.json();
		return data.data.children;
	}
);

const sliceOptions = {
	name: 'trendingNews',
	initialState: {
		trending: [],
		isLoading: false,
		hasError: false,
	},
	reducers: {},
	extraReducers: {
		[loadTrendingNews.pending]: (state, action) => {
			state.isLoading = true;
			state.hasError = false;
		},
		[loadTrendingNews.fulfilled]: (state, action) => {
			state.trending = action.payload;
			state.isLoading = false;
			state.hasError = false;
		},
		[loadTrendingNews.rejected]: (state, action) => {
			state.isLoading = false;
			state.hasError = true;
		},
	},
};

export const trendingNewsSlice = createSlice(sliceOptions);

export const selectTrendingNews = (state) => state.trendingNews.trending;

export default trendingNewsSlice.reducer;

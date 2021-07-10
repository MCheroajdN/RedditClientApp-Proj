import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROOT } from '../../endpoints';
import { selectSearch } from '../search/searchSlice';

export const loadsubredditPosts = createAsyncThunk(
	'subredditPosts/getSubredditPosts',
	async (subredditName) => {
		const response = await fetch(`${API_ROOT}/${subredditName}.json`);

		const jsonData = await response.json();

		return jsonData.data.children;
	}
);

const sliceOptions = {
	name: 'subredditPosts',
	initialState: {
		subredditPosts: [],
		isLoading: false,
		hasError: false,
	},
	reducers: {},
	extraReducers: {
		[loadsubredditPosts.pending]: (state, action) => {
			state.isLoading = true;
			state.hasError = false;
		},
		[loadsubredditPosts.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.subredditPosts = action.payload;
		},
		[loadsubredditPosts.rejected]: (state, action) => {
			state.isLoading = false;
			state.hasError = true;
		},
	},
};

const subredditPostsSlice = createSlice(sliceOptions);

export const selectSubredditPosts = (state) =>
	state.subredditPosts.subredditPosts;

export const selectFilteredPosts = (state) => {
	const allPosts = selectSubredditPosts(state);
	const searchPost = selectSearch(state);
	if (searchPost !== '') {
		return allPosts.filter((post) =>
			post.data.title.toLowerCase().includes(searchPost.toLowerCase())
		);
	} else {
		return allPosts;
	}
};

export default subredditPostsSlice.reducer;

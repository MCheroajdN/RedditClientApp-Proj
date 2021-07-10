import { configureStore } from '@reduxjs/toolkit';
import trendingNewsReducer from '../features/news/trending/trendingNewsSlice';
import popularPostsReducer from '../features/popular/popularPostsSlice';
import redditPicsReducer from '../features/redditPosts/redditPicsSlice';
import searchReducer from '../features/search/searchSlice';
import subredditPostsReducer from '../features/subreddits/subredditPostsSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';

export default configureStore({
	reducer: {
		trendingNews: trendingNewsReducer,
		popularPosts: popularPostsReducer,
		redditPics: redditPicsReducer,
		subreddits: subredditsReducer,
		subredditPosts: subredditPostsReducer,
		search: searchReducer,
	},
});

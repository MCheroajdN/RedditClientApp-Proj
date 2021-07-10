import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadTrendingNews } from '../features/news/trending/trendingNewsSlice';
import TrendingNews from '../features/news/trending/TrendingNews';
import PopularPosts from '../features/popular/PopularPosts';
import { loadPopularPosts } from '../features/popular/popularPostsSlice';
import { loadRedditPics } from '../features/redditPosts/redditPicsSlice';
import RedditPosts from '../features/redditPosts/RedditPosts';
import { loadSubreddits } from '../features/subreddits/subredditsSlice';
import Subreddits from '../features/subreddits/Subreddits';

function App() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.redditPics);

	useEffect(() => {
		dispatch(loadTrendingNews());
		dispatch(loadPopularPosts());
		dispatch(loadRedditPics());
		dispatch(loadSubreddits());
	}, [dispatch]);

	return (
		<Router>
			<Navbar />
			<main>
				<TrendingNews />
				<PopularPosts />
				<RedditPosts />
				<aside>
					<Subreddits />
				</aside>
			</main>
			{!isLoading ? (
				<footer>
					Built by M.Chris &copy;{' '}
					{new Date().getUTCFullYear()}
				</footer>
			) : (
				''
			)}
		</Router>
	);
}

export default App;

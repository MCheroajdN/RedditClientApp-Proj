import React from 'react';
import { useSelector } from 'react-redux';
import Trending from '../../../components/news/trending/Trending';
import '../../../components/news/trending/Trending.css';

import { selectTrendingNews } from './trendingNewsSlice';

const TrendingNews = () => {
	const trendingData = useSelector(selectTrendingNews);
	const { isLoading } = useSelector((state) => state.trendingNews);

	return (
		<div className='container trending'>
			{isLoading ? '' : <p>Trending today</p>}

			<div className='trending-cards mb-5'>
				{trendingData.map((data) => (
					<Trending
						key={data.data.id}
						title={data.data.title}
						subreddit={data.data.subreddit_name_prefixed}
						url={data.data.url}
					/>
				))}
			</div>
		</div>
	);
};

export default TrendingNews;

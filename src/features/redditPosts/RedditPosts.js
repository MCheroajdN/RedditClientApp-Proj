import React from 'react';
import { useSelector } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { selectFilteredPosts } from '../subreddits/subredditPostsSlice';
import { selectFilteredPics } from './redditPicsSlice';

const RedditPosts = () => {
	const redditPics = useSelector(selectFilteredPics);

	const subredditPosts = useSelector(selectFilteredPosts);

	const { hasError } = useSelector((state) => state.redditPics);

	if (hasError) {
		return (
			<div className='container text-center'>
				<p>Something went wrong!</p>;
			</div>
		);
	}
	let posts;
	if (subredditPosts.length > 1) {
		posts = subredditPosts;
	} else {
		posts = redditPics;
	}
	return (
		<div className='container mt-3'>
			{posts.map((pics) => (
				<Posts
					key={pics.data.id}
					title={pics.data.title}
					author={pics.data.author}
					subreddit={pics.data.subreddit_name_prefixed}
					upVote={pics.data.ups}
					permalink={pics.data.permalink}
					commentNum={pics.data.num_comments}
					utcTime={pics.data.created_utc}
					url={pics.data.url}
				/>
			))}
		</div>
	);
};

export default RedditPosts;

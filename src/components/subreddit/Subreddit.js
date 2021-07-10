import React from 'react';
import { useDispatch } from 'react-redux';
import { loadsubredditPosts } from '../../features/subreddits/subredditPostsSlice';
import { hideElement } from '../../utils/reusableCode';
import './Subreddit.css';
const Subreddit = (props) => {
	const { subreddit, icon, name } = props;
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(loadsubredditPosts(subreddit));
		hideElement('.popular-posts');
	};

	return (
		<div className='subreddit'>
			<div onClick={handleClick}>
				{icon ? <img src={icon} alt={name} /> : ''}
				<span>{subreddit}</span>
			</div>
		</div>
	);
};

export default Subreddit;

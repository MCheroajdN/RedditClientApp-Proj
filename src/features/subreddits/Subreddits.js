import React from 'react';
import { useSelector } from 'react-redux';
import { dataLimit } from '../../utils/reusableCode';
import Subreddit from '../../components/subreddit/Subreddit';
import { selectSubreddits } from './subredditsSlice';

const Subreddits = () => {
	const subredditsData = useSelector(selectSubreddits);
	const { isLoading, hasError } = useSelector((state) => state.subreddits);
	const subreddits = dataLimit(subredditsData, 26);

	if (isLoading) {
		return '';
	} else if (hasError) {
		return <p className='text-center'>Something went wrong</p>;
	}

	return (
		<div className='container'>
			{subreddits.map((reddit) => (
				<Subreddit
					key={reddit.data.id}
					subreddit={reddit.data.display_name_prefixed}
					name={reddit.data.display_name}
					icon={reddit.data.icon_img}
				/>
			))}
		</div>
	);
};

export default Subreddits;

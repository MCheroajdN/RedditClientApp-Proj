import React from 'react';
import Icons from '../../icons';
import { getShortenNumber, getTime } from '../../utils/reusableCode';
import './PopularPost.css';

const PopularPost = (props) => {
	const { title, author, subreddit, upVote, permalink, commentNum, utcTime } =
		props;

	return (
		<div className='popular'>
			<div>
				<div className='votes'>
					<small className='up-vote'>{Icons.arrowUp}</small>
					<small className='d-block'>{getShortenNumber(upVote)}</small>
					<small className='down-vote'>{Icons.arrowDown}</small>
				</div>
				<a href={`https://www.reddit.com${permalink}`} className='post'>
					<small>
						<span className='reddit'>{subreddit}</span>{' '}
						<span className='text-dark'>
							Posted by u/{author} {getTime(utcTime)}
						</span>
					</small>
					<p>{title}</p>
					<small className='comment-section text-muted'>
						{Icons.comment} {getShortenNumber(commentNum)} comments{' '}
						<span>{Icons.share} share</span> <span>{Icons.save} save</span>
					</small>
				</a>
			</div>
			<button
				className='bg-primary text-light'
				data-toggle='modal'
				data-target='#loginFormModal'>
				+ Join
			</button>
		</div>
	);
};

export default PopularPost;

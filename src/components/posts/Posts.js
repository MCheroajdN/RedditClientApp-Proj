import React from 'react';
import Icons from '../../icons';
import { getShortenNumber, getTime } from '../../utils/reusableCode';
import './Posts.css';

const Posts = (props) => {
	const {
		title,
		author,
		subreddit,
		upVote,
		permalink,
		commentNum,
		utcTime,
		url,
	} = props;
	return (
		<div className='row'>
			<div className='col-md-8  col-lg-9'>
				<div className='reddit-pics'>
					<div>
						<div className='votes'>
							<small className='up-vote'>{Icons.arrowUp}</small>
							<small className='d-block'>{getShortenNumber(upVote)}</small>
							<small className='down-vote'>{Icons.arrowDown}</small>
						</div>
						<a href={`https://www.reddit.com${permalink}`} className='post'>
							<p>{title}</p>
							{url.match(/\.(jpg|png|gif)/g) !== null ? (
								<img src={url} alt={title} />
							) : (
								''
							)}

							<small className='comment-section text-muted'>
								<span className='reddit'>{subreddit}</span>{' '}
								<span className='text-dark px-2'>
									Posted by u/{author} {getTime(utcTime)}
								</span>
								{Icons.comment} {getShortenNumber(commentNum)} comments{' '}
								<span className='px-2'>{Icons.share} share</span>{' '}
								<span>{Icons.save} save</span>
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
			</div>
		</div>
	);
};

export default Posts;

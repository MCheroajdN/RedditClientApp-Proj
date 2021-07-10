import React from 'react';
import './Trending.css';

const Trending = (props) => {
	const { title, subreddit, url } = props;
	const random = Math.floor(Math.random() * 100);
	return (
		<div className='trending-card'>
			<img
				src={`https://source.unsplash.com/1600x900/?news/${random}`}
				alt='Trending News'
			/>
			<div className='overlay'>
				<p>
					{title.slice(0, 90)}...
					<small className='d-block'>
						{subreddit}{' '}
						<a
							className='text-light'
							href={url}
							target='_blank'
							rel='noopener noreferrer'>
							Learn More
						</a>
					</small>
				</p>
			</div>
		</div>
	);
};

export default Trending;

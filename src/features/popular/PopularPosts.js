import React from 'react';
import { useSelector } from 'react-redux';
import PopularPost from '../../components/popular/PopularPost';
import { dataLimit } from '../../utils/reusableCode';
import { selectPopularPosts } from './popularPostsSlice';

const PopularPosts = () => {
	const popularPosts = useSelector(selectPopularPosts);
	const { isLoading, hasError } = useSelector((state) => state.popularPosts);
	const posts = dataLimit(popularPosts, 4);

	console.log(popularPosts);

	if (isLoading) {
		return <div className='container text-center mt-5 pt-5'>LOADING...</div>;
	} else if (hasError) {
		return (
			<div className='container text-center mt-5 pt-5'>
				Something went wrong!
			</div>
		);
	}

	return (
		<div className='container'>
			<section className='row '>
				<div className='col-md-8 col-lg-9 popular-posts'>
					<p className='mt-4'>Popular posts</p>
					{posts.map((post) => (
						<PopularPost
							key={post.data.id}
							title={post.data.title}
							author={post.data.author}
							subreddit={post.data.subreddit_name_prefixed}
							upVote={post.data.score}
							permalink={post.data.permalink}
							commentNum={post.data.num_comments}
							utcTime={post.data.created_utc}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default PopularPosts;

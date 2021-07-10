import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../app/routes';
import Icons from '../../icons';
import './Profile.css';

const Profile = () => {
	const [isMenuList, setIsMenuList] = useState(false);
	const profileDropdown = () => setIsMenuList(!isMenuList);

	const { redditCoins, redditPremium, redditHelp } = Routes;
	return (
		<ul className='profile-menu' onClick={profileDropdown}>
			<li>
				<span aria-label='profile'>
					{Icons.user} {Icons.caretDown}
				</span>
				{isMenuList ? (
					<ul className='menu-list'>
						<small className='p-1'>VIEW OPTIONS</small>
						<li>
							<Link to='/'> {Icons.moon} Night mode </Link>
						</li>
						<small className='p-1'>MORE STUFF</small>
						<li>
							<a href={redditCoins()}>{Icons.copyright} Reddit Coins</a>
						</li>
						<li>
							<a href={redditPremium()}>{Icons.drawPolygon} Reddit Premium</a>
						</li>
						<li>
							<a href={redditHelp()}> {Icons.questionCircle} Help Center</a>
						</li>
						<li>
							<Link
								to='/'
								data-toggle='modal'
								data-target='#loginFormModal'
								role='button'>
								{Icons.arrowRight} Login/Sign up
							</Link>
						</li>
					</ul>
				) : (
					''
				)}
			</li>
		</ul>
	);
};

export default Profile;

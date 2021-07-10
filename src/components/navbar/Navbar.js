import React from 'react';
import './Navbar.css';
import SearchBar from '../searchBar/SearchBar';
import Logo from '../logo/Logo';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import Profile from '../profile/Profile';

const Navbar = () => {
	return (
		<header>
			<nav>
				<div>
					<Logo />
				</div>
				<SearchBar />
				<div className='flex-nav'>
					<Login />
					<SignUp />
					<Profile />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

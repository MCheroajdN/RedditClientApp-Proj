import React from 'react';
import { NavLink } from 'react-router-dom';
import { showElement } from '../../utils/reusableCode';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
	const handleClick = () => {
		showElement('.popular-posts');
	};
	return (
		<NavLink className='logo' to='/' onClick={handleClick}>
			<img src={logo} alt='Logo' />
			<span>
				Reddit<small>Client</small>
				
			</span>
		</NavLink>
	);
};

export default Logo;

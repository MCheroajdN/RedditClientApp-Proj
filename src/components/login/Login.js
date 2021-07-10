import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';

const Login = () => {
	return (
		<div>
			<button
				type='button'
				id='login-btn'
				className='btn border-primary bg-light text-primary'
				data-target='#loginFormModal'
				data-toggle='modal'
				aria-label='login button'>
				Login
			</button>

			<LoginForm />
		</div>
	);
};

export default Login;

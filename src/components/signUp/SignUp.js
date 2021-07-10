import React from 'react';
import SignUpForm from './SignUpForm';
import './SignUp.css';

const SignUp = () => {
	return (
		<div>
			<button
				type='button'
				id='sign-up-btn'
				className='btn bg-primary text-light'
				data-target='#signUpFormModal'
				data-toggle='modal'
				aria-label='sign up button'>
				Sign up
			</button>

			<SignUpForm />
		</div>
	);
};

export default SignUp;

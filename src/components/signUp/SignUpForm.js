import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../app/routes';
import './SignUp.css';

const SignUpForm = () => {
	const redirect = Routes.loginSignUp();
	return (
		<div
			id='signUpFormModal'
			className='modal fade'
			tabIndex='-1'
			role='dialog'>
			<div className='modal-dialog' role='document'>
				<div className='modal-content text-left'>
					<div className='modal-header'>
						<div className='modal-title  pt-4'>
							Sign up
							<small className='d-block'>
								By continuing, you agree to our{' '}
								<span className='text-primary'>User Agreement </span> and{' '}
								<span className='text-primary'>Privacy Policy</span>.
							</small>
						</div>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'>
							{' '}
							<span arial-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body pt-5'>
						<input
							type='checkbox'
							name='reddit-emails'
							value='I agree to get emails about cool stuff on Reddit'
							className='text-left '
						/>{' '}
						<label htmlFor='reddit-emails'>
							I agree to get emails about cool stuff on Reddit
						</label>
						<div className='border border-primary  p-3'>
							<a href={redirect}>
								<i className='fab fa-google' /> Continue With Google
							</a>
						</div>
						<div className='border border-primary  p-3 mt-2'>
							<a href={redirect}>
								<i className='fab fa-apple' /> Continue With Apple
							</a>
						</div>
						<p className='text-muted ml-5 pt-3'>OR </p>
						<form className='form-group pt-3 ' action={redirect}>
							<input
								type='email'
								name='email'
								id='email'
								className='bg-light text-muted p-3 d-block form-control'
								placeholder='EMAIL'
							/>
							<input
								type='submit'
								className='bg-primary mt-2 text-light d-block rounded form-control'
								value='Continue'
							/>
						</form>
						<small className='mt-3 d-block'>
							Already a redditor?
							<Link
								to='/'
								data-toggle='modal'
								data-target='#loginFormModal'
								className='text-primary'
								data-dismiss='modal'
								role='button'
								style={{ cursor: 'pointer' }}>
								{' '}
								LOG IN
							</Link>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;

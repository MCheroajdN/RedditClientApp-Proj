import React from 'react';
import Routes from '../../app/routes';
import './Login.css';

const LoginForm = () => {
	const redirect = Routes.loginSignUp();
	return (
		<div id='loginFormModal' className='modal fade' tabIndex='-1' role='dialog'>
			<div className='row'>
				<div className='col-md-8 offset-2'>
					<div className='modal-dialog' role='document'>
						<div className='modal-content text-left'>
							<div className='modal-header'>
								<div className='modal-title  pt-4'>
									Login
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
								<div>
									<form className='pt-3 ' action={redirect}>
										<input
											type='text'
											name='username'
											id='username'
											className=' text-muted p-3 form-control'
											placeholder='USERNAME'
										/>
										<input
											type='password'
											name='password'
											id='password'
											className=' text-muted p-3 mt-2 form-control'
											placeholder='PASSWORD'
										/>

										<input
											type='submit'
											className='bg-primary mt-2 text-light rounded form-control'
											value='login'
										/>
									</form>
									<small className='mt-3'>
										Forgot your{' '}
										<a href={redirect} className='text-primary'>
											username
										</a>{' '}
										or{' '}
										<a href={redirect} className='text-primary'>
											password
										</a>{' '}
										?
									</small>

									<small className='mt-3 d-block'>
										New to Reddit?
										<span
											className='text-primary'
											data-target='#signUpFormModal'
											data-toggle='modal'
											data-dismiss='modal'
											style={{ cursor: 'pointer' }}>
											{' '}
											SIGN UP
										</span>
									</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;

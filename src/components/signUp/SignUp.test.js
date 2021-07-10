import { shallow } from 'enzyme';
import SignUp from './SignUp';

describe('Login component', () => {
	it('should display Sign up', () => {
		const wrapper = shallow(<SignUp />);
		const signUp = wrapper.find('#sign-up-btn').text();

		expect(signUp).toEqual('Sign up');
	});
});

import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from './Login';

describe('Login component', () => {
	it('should have Login', () => {
		const wrapper = shallow(<Login />);
		const login = wrapper.find("button[data-target='#loginFormModal']").text();
		expect(login).toEqual('Login');
	});

	it('matches snapshot', () => {
		const tree = renderer
			.create(
				<Router>
					<Login />
				</Router>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});

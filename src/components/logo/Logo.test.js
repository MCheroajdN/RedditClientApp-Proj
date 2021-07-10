import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Logo from './Logo';

describe('Logo component', () => {
	it('should render RedditClient', () => {
		const wrapper = shallow(<Logo />);
		const logoName = 'RedditClient';
		const logoText = wrapper.find('.logo span').text();
		expect(logoText).toEqual(logoName);
	});
	it('should have logo.png image', () => {
		const expectedImage = 'logo.png';
		const wrapper = shallow(<Logo />);
		const img = wrapper.find('.logo img');

		expect(img.prop('src')).toBe(expectedImage);
	});
	it('matches the snapshot', () => {
		const tree = renderer.create(
			<Router>
				<Logo />
			</Router>
		);
		expect(tree.toJSON()).toMatchSnapshot();
	});
});

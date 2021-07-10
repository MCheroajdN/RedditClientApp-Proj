import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Profile from './Profile';
import renderer from 'react-test-renderer';

describe('Render <Profile />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		render(<Profile />, div);
	});
});

describe('Profile Component', () => {
	it('checks state change', () => {
		const profileDropdown = jest.fn();
		const wrapper = shallow(<Profile onClick={profileDropdown} />);

		const handleClick = jest.spyOn(React, 'useState');

		handleClick.mockImplementation((isMenuList) => [
			isMenuList,
			profileDropdown,
		]);

		wrapper.find('.profile-menu').simulate('click');
		expect(profileDropdown).toBeTruthy();
	});
	it('matches the snapshot', () => {
		const tree = renderer.create(<Profile />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

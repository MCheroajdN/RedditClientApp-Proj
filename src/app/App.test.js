import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from '../components/navbar/Navbar';

// test('renders learn react link', () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

describe('Navbar Component', () => {
	it('contains Login Sign up and Profile', () => {
		const wrapper = shallow(<Navbar />);

		const tag = wrapper.find('header').text();
		expect(tag).toEqual('Login Sign up Profile');
	});
});

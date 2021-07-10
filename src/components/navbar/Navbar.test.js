import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar Component', () => {
	it('matches snapshot', () => {
		const tree = renderer
			.create(
				<Router>
					<Navbar />
				</Router>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

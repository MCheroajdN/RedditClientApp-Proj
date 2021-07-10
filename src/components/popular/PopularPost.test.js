import { shallow } from 'enzyme';
import PopularPost from './PopularPost';

describe('PopularPost Component', () => {
	it('checks for availability of title', () => {
		const wrapper = shallow(<PopularPost title={title} />);
		const title =
			'What is socially acceptable in the U.S. That would be horrifying in the U.K.?';
		const postTitle = wrapper.find('.popular .post p').text();

		expect(postTitle).toBe(title);
	});
});

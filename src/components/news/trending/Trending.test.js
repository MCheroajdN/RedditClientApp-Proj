import { shallow } from 'enzyme';
import Trending from './Trending';

describe('Trending Component', () => {
	it('checks for content availability in a news card', () => {
		const title = "Putin critic Navalny could 'die within days,' say doctors";

		const subreddit = 'r/news';
		const wrapper = shallow(<Trending title={title} subreddit={subreddit} />);
		const expectedContent =
			title.slice(0, 90) + '...' + subreddit + ' ' + 'Learn More';
		const content = wrapper.find('.trending-card .overlay p').text();
		expect(content).toBe(expectedContent);
	});

	it('checks for link availability in a news card', () => {
		const title = "Putin critic Navalny could 'die within days,' say doctors";
		const url = 'https://www.bbc.co.uk/news/world-europe-56786266';
		const wrapper = shallow(<Trending title={title} url={url} />);
		const href = wrapper.find('.trending-card .overlay p small a');
		expect(href.prop('href')).toBe(url);
	});
});

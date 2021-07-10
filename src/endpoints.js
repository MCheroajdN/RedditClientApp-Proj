export const API_ROOT = 'https://www.reddit.com';
const EndPoints = {
	news: `${API_ROOT}/r/news.json?limit=4`,
	popular: `${API_ROOT}/r/popular.json`,
	trending: `${API_ROOT}/r/trending.json`,
	redditPics: `${API_ROOT}/r/pics.json`,
	subreddits: `${API_ROOT}/subreddits.json`,
};

export default EndPoints;

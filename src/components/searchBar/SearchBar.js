import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import { selectSearch, setSearch } from '../../features/search/searchSlice';
import { hideElement } from '../../utils/reusableCode';

const SearchBar = () => {
	const dispatch = useDispatch();
	const searchTerm = useSelector(selectSearch);
	const handleSearch = (e) => {
		dispatch(setSearch(e.target.value));
		hideElement('.popular-posts');
	};
	return (
		<input
			type='text'
			className='search-input search px-2'
			name='search'
			placeholder='&#xf002; Search'
			style={{ fontFamily: 'fontawesome' }}
			role='search'
			value={searchTerm}
			onChange={handleSearch}
		/>
	);
};

export default SearchBar;

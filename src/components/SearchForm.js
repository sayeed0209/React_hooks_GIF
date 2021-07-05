import React, { useState } from "react";
function SearchForm(props) {
	const [searchText, setSearchText] = useState("");

	const onSearchChange = e => setSearchText(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();
		props.onSearch(searchText);
	};

	return (
		<form className='search-form' onSubmit={handleSubmit}>
			<label className='is-hidden' htmlFor='search'>
				Search
			</label>
			<input
				type='search'
				onChange={onSearchChange} // this value will update state
				name='search'
				placeholder='Search...'
			/>
			<button type='submit'>Search</button>
		</form>
	);
}
export default SearchForm;

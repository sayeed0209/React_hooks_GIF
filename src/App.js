import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";
import "./App.css";
// obAPoDQILtaB9uXHZrWUZRq4XupFSWg3

function App() {
	const [data, setData] = useState([]); // declare state
	const [query, setQuery] = useState("cats");
	const [isLoading, setIsLoading] = useState(true);
	const onSearch = value => {
		setQuery(value);
	};
	useEffect(() => {
		axios(
			`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=obAPoDQILtaB9uXHZrWUZRq4XupFSWg3`
		)
			.then(response => setData(response.data.data))
			.catch(error => console.log("Error fetching and parsing data", error))
			.finally(() => setIsLoading(false));
	}, [query]);
	return (
		<>
			<div className='main-header'>
				<div className='inner'>
					<h1 className='main-title'>GifSearch</h1>
					<SearchForm onSearch={onSearch} />
				</div>
			</div>
			<div className='main-content'>
				{isLoading ? <p>Loading...</p> : <GifList data={data} />}
			</div>
		</>
	);
}

export default App;

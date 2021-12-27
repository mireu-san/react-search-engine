import { useState, useEffect } from 'react';
import Header from "./components/Header";

function App() {
	const [animeList, setAnimeList] = useState([]); // empty array
	const [topAnime, setTopAnime] = useState([]); // empty array
	const [search, setSearch] = useState(''); // empty string

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
			</div>
		</div>
	);
}

export default App;

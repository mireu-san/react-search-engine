import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
	const [animeList, setAnimeList] = useState([]); // empty array
	const [topAnime, setTopAnime] = useState([]); // empty array
	const [search, setSearch] = useState(''); // empty string

	// api
	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		setTopAnime(temp.top.slice(0, 5));
	}

	useEffect(() => {
		GetTopAnime();

		console.log("top Anime");
	}, []);

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar 
					topAnime={topAnime} />
				<MainContent />
			</div>
		</div>
	);
}

export default App;

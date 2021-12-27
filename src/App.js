import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

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
				<MainContent />
			</div>
		</div>
	);
}

export default App;

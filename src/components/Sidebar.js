import React from 'react'

function Sidebar({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3>Popular Anime</h3>
                {topAnime.map(anime => (
                    <a 
                        href={anime.url} 
                        target="_balnk" 
                        key={anime.mal_id}
                        rel="noreferrer">
                        { anime.title }
                    </a>
                ))}

            </nav>
        </aside>
    )
}

export default Sidebar

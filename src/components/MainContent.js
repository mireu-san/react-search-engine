import React from 'react'

function MainContent() {
    return (
        <main>
            <div className='main-head'>
                <form className='search-box'>
                    <input
                        type='search'
                        placeholder='start input any keyword'
                        required 
                    />
                </form>
            </div>
        </main>
    )
}

export default MainContent

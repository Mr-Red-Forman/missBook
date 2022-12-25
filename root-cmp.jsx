const { useState } = React

import { AboutUs } from './pages/about-us.jsx'
import { HomePage } from './pages/home-page.jsx'
import { BookIndex } from './pages/book-index.jsx'


export function App() {

    const [page, setPage] = useState('bookIndex')

    return <section className="app main-layout">
        <header className="app-header">
            <nav className="app-nav">
                <a href="#" onClick={()=> setPage('home')}>Home</a>
                <a href="#" onClick={()=> setPage('bookIndex')}>Books Index</a>
                <a href="#" onClick={()=> setPage('about')}>About</a>
            </nav>
        </header>
        <main>
            {page=== 'home' &&<HomePage/>}
            {page=== 'about' && <AboutUs/>}
            {page=== 'bookIndex' && <BookIndex/>}
        </main>
    </section>
}
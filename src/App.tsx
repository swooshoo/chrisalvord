import { useState } from 'react'
import Nav from './components/Nav'
import Reel from './pages/Reel'
import Headshots from './pages/Headshots'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

type Page = 'reel' | 'headshots' | 'resume' | 'contact'

export default function App() {
  const [page, setPage] = useState<Page>('reel')

  return (
    <div className="min-h-screen flex flex-col">
      <Nav current={page} onChange={setPage} />
      <main className="flex-1">
        {page === 'reel' && <Reel />}
        {page === 'headshots' && <Headshots />}
        {page === 'resume' && <Resume />}
        {page === 'contact' && <Contact />}
      </main>
      <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-200">
        © {new Date().getFullYear()} Christopher Alvord. All rights reserved.
      </footer>
    </div>
  )
}

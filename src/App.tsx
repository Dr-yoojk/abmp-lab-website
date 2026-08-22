import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Research from './pages/Research'
import Equipment from './pages/Equipment'
import Team from './pages/Team'
import Publications from './pages/Publications'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/team" element={<Team />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

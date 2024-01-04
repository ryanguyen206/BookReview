import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Genre from './components/Genre'
import BookFeed from './components/BookFeed'

function App() {
  return (
    <div className='container mx-auto px-10 lg:px-16'>
    <Navbar/>
    <Hero/>
    <Genre/>
    <BookFeed/>
    </div>
  )
}

export default App

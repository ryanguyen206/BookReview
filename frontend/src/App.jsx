import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from './utils/privateRoute'

function App() {
  return (
    <div className='container min-h-screen mx-auto px-10 lg:px-16'>
    <Router>
      <Navbar/>
      <Route component={HomePage} path='/' exact />
      <Route component={LoginPage} path='/login'/>
   
      </Router>
    </div>
  )
}

export default App

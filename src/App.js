import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Pages/Home/Navbar'
import Home from './Pages/Home/HomeScreen'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <div>
          <Navbar/>
        </div>
      </Router>
      <Home/>
    </div>
  )
}

export default App


import React from 'react'
import {BrowserRouter as Router,Routes,Switch} from 'react-router-dom'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import About from './Component/About/About'

const App = () => {
  return (
    <div>
      <Router>
      <Header/>
      <Home/>
      <About/>
      </Router>
      
    </div>
  )
}

export default App


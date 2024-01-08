import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home/HomeScreen'
const App = () => {
  return (
    <div className='App'>
      <Home/>
    </div>
  )
}

export default App


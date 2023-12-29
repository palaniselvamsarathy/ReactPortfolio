import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
// import Header from './Component/Header/Header'
// import Home from './Component/Home/Home'
// import About from './Component/About/About'

const App = () => {
  return (
    <div>
      <Router>
      {/* <Header/> */}
      {/* <Home/>
      <About/> */}
      <Navbar/>
      </Router>
      
    </div>
  )
}

export default App


import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
// import About from '../backup/About/About'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="/about" element={<About/>}/>      */}
        </Routes> 
        <Home/>
        {/* <About/> */}
      </Router>
      
    </div>
  )
}

export default App


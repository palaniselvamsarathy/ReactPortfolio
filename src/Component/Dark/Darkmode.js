import React from 'react'
import { useState, useEffect } from 'react'

const Darkmode = () => {
    const [darkMode, setdarkMode] = useState(false)
    const toggledarkMode =()=>{
        setdarkMode(!darkMode)
    }

    useEffect(()=>{
        const body = document.body;
        if(darkMode){
            body.classList.add('dark-mode')
        }
        else{
            body.classList.remove('dark-mode')
        }
    },[darkMode])
  return (
    <>
        <button className='btn btn-light' onClick={toggledarkMode}>
            {darkMode ? 'Light Mode': 'Dark Mode'}
        </button>  
    </>
  )
}

export default Darkmode

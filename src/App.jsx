import React from 'react'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import {Morque} from './components/Morque'


const App = () => {
  return (
    <div className='bg-[#b1abf4] min-h-screen'>
      <Navbar/>
      <Home/> 
      <Morque/>
    </div>
  )
}

export default App
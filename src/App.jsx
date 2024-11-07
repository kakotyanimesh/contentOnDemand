import React from 'react'
import Navbar from './components/Navbar'
import { Home } from './components/Home'


const App = () => {
  return (
    <div className='bg-[#b1abf4] min-h-screen'>
      <Navbar/>
      <Home/> 
    </div>
  )
}

export default App
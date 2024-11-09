import React from 'react'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import {Morque} from './components/Morque'
import {TakeAction} from './components/TakeAction'
import { OrderSlip } from './components/OrderSlip'
import { Example } from './components/Praises'


const App = () => {
  return (
    <div className='bg-[#b1abf4] min-h-screen'>
      <Navbar/>
      <Home/> 
      <Morque/>
      <TakeAction/>
      <OrderSlip/>
      <Example/>
      
    </div>
  )
}

export default App
import React, { useCallback, useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { ButtonCompo } from './Button'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/16/solid'


const Navbar = () => {
  const [isNavBar, setIsNavBar] = useState(window.innerWidth < 769)
  const [toggleMenu, setToggleMenu] = useState(false)

  const menu = useCallback(() => {
    setIsNavBar(window.innerWidth < 769)
  }, [])

  useEffect(() => {

    window.addEventListener('resize', menu)

    if(toggleMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  
    return () => {
      window.removeEventListener('resize', menu)
      document.body.style.overflow = 'auto'
      
    }
  }, [menu, toggleMenu])
  
  return (
    <div className='bg-[#b1abf4] sm:px-[100px]  font-Hoover font-bold sm:pt-[40px] pt-[10px] flex justify-between items-center'>
          {
            !toggleMenu ? 
            <>
              <Logo/>
              {
                isNavBar ? <button onClick={(e) => setToggleMenu(!toggleMenu)}><Bars4Icon className='w-10'/></button> 
                :
                <>
                  <NavLinks/>
                  <ButtonCompo bgColor="#a3de9b" textContent={'Buy A Bundle'}/> 
                </>
              }
                </>
            :
            <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
          }
          
    </div>
  )
}

export default Navbar

const Logo = () => {
    return (
        <img src={logo} alt="logo" className='w-[100px] h-[70px]'  />
    )
}

const navItems = [
  {name : 'Our Solutions'},
  {name : 'How It works'},
  {name : 'Pricing'},
  {name : 'Blogs'},
  {name : 'FAQs'},
]
const NavLinks = () => {
  return (
    <ul className='flex justify-between gap-[60px]'>
      {navItems.map((item, index) => (
        <li key={index}>{item.name.toUpperCase()}</li>
      ))}
    </ul>
  )
}

const MobileMenu = ({setToggleMenu, toggleMenu}) => {
  return (
    <div className='min-h-screen space-y-4'>
      <div className='flex'>
        <button onClick={() => setToggleMenu(!toggleMenu)}><XMarkIcon className='w-10'/></button>
        <Logo/>
      </div>
      <ul className='text-center flex flex-col items-center justify-center bg-red-300 space-y-5'>
        {navItems.map((items, index) => (
          <li key={index}>{items.name.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  )
}
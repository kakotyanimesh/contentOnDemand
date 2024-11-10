import { ButtonCompo } from './Button'
import React from 'react'

export const Pricing = () => {
  return (
    <div className='bg-[#e34135] font-CabinetGrotesk flex flex-col text-center gap-20 justify-center items-center py-[90px]'>
         <h1 className='sm:text-[72px] text-3xl text-white sm:px-[289px] leading-snug '>Get Started! Select your Content Bundle🛒</h1>
         <div className='grid sm:grid-cols-2 gap-10 sm:px-[293px] px-5'>
         <PriceCard imageSrc='https://framerusercontent.com/images/7LwfI94F5XPRHflqvqgPkm2Iss.png' priceH1='The Mini Bundle' pricingP='Dip your toes in- Get an instant content top-up with 3 trilor-made posts' priceTag='120 USD' buttonText='GRAB A MINI BUNDLE'/>
         <PriceCard imageSrc='https://framerusercontent.com/images/7LwfI94F5XPRHflqvqgPkm2Iss.png' priceH1='The Signature Bundle' pricingP='Content is one less thing to worry about with our 12-post Signature Bundle' priceTag='400 USD' buttonText='GRAB A SIGNATURE BUNDLE'/>
         </div>
         
         <h1 className='font-jakarta text-white text-lg sm:text-[24px]'>*For Indian brands, check out INR pricing 🔗HERE</h1>
    </div>
  )
}
// "https://framerusercontent.com/images/7LwfI94F5XPRHflqvqgPkm2Iss.png

const PriceCard = ({imageSrc, priceH1, pricingP, priceTag, buttonText}) => {
    return <div className='bg-white rounded-xl flex flex-col items-center justify-center relative pb-[80px]'>
        <img src={imageSrc} alt="" className='w-26  sm:h-24 h-16 absolute -top-10' />
        <div className='sm:px-[55px] px-6 sm:pt-[80px] pt-10 space-y-[21px] '>
            <h1 className='text-[30px] font-thin'>{priceH1}</h1>
            <p className='sm:text-[16px] text-sm font-Hoover'>{pricingP}</p>
        </div>
        <h1 className='sm:text-[42px] text-[30px]'>{priceTag}</h1>
        <ul className='mb-[25px]'>
            {
                featuresText.map((text, index) => (
                    <li key={index} className='flex items-center text-center sm:gap-6'>
                        <img src={text.image} alt="" className='sm:h-7 h-4 sm:w-7 w-4' />
                        <p className='font-Hoover'>{text.t}</p>
                    </li>
                ))
            }
        </ul>

         <ButtonCompo bgColor='#a3de9b' textContent={buttonText}/>

    </div>
}


const featuresText = [
    {image : 'https://framerusercontent.com/images/Fk4O4ZoHNHMnIjcy6FS3hsYxkPs.png', t : '3-day turnaround time'},
    {image : 'https://framerusercontent.com/images/3OrthWRmXUzqTF7scrMbkYoRvCs.png', t : '1 round revision'},
    {image : 'https://framerusercontent.com/images/lPiKr3oMx99qK9cnqkjdclYb6I.png', t : 'Add on option: Editable Canva/ Figma files '},
]
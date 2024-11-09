import gif from '../assets/images/giff.WEBP'
import spinThingy from '../assets/spinThingy.png'
import { ButtonCompo } from './Button'

export const Home = () => {
    return (
        <div className="sm:mx-[100px] mx-4 space-y-1  " >
            <div className="font-CabinetGrotesk sm:text-[160px] text-[50px] sm:-space-y-28 -space-y-5">
                <div className="flex sm:-space-x-8  ">
                    <h1 className="">CONTENT</h1>
                    <div className='rotate-12 sm:mt-14 mt-5'>
                        <img src={gif} alt="" className='sm:h-32 sm:w-44 h-14 w-16 ' />
                    </div>
                </div>
                <div className='sm:-space-y-[100px] -space-y-10 relative'>
                    <h1 className="">ON DEMAND</h1>
                    <div className='bg-[#a3de9b] rounded-full sm:mx-40 mx-10  w-max absolute'>
                        <img src={spinThingy} className='motion-safe:animate-spin-slow sm:size-32 size-14' alt="" />
                    </div>
                </div>
            </div>
           
            <div className="sm:pr-[450px] pr-10">
                <p className="sm:text-[56px]  text-[20px] font-Hoover font-medium sm:leading-[44px] leading-5">
                We take your content stress away, so you can focus on the bigger picture.    
                </p>
            </div>

            <div className='pt-10'>
                <ButtonCompo bgColor="#e34135" textContent={'CHECK OUT BUNDLES'}/>
            </div>
        </div>
    )
}




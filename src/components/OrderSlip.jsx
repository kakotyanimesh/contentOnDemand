import slip from '../assets/images/orderBundle.svg'
import { ButtonCompo } from './Button'
import {motion} from 'framer-motion'

export const OrderSlip = () => {
    return (
        <div className="bg-[#b1abf4] flex sm:flex-row flex-col py-[90px] sm:px-[197px] px-10 text-center gap-10 sm:gap-36">
            <img  src={slip} alt="" className='w-[350px] -rotate-12 ' />
            <div>
                <h1 className='font-CabinetGrotesk text-[30px] sm:text-[72px] mb-14 '>I'm intrigued. How does this work?</h1>
                <ButtonCompo bgColor='#e34135' textContent={'CHECK OUT BUNDLES'} />
            </div>
        </div>
    )
}
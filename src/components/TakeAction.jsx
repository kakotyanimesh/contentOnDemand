import { ButtonCompo } from "./Button"
import TakeActionOne from '../assets/images/TakeActionOne.png'
import TakeActionTwo from '../assets/images/TakeActionTwo.png'
import { motion } from 'framer-motion'

export const TakeAction = () => {
    return (
        <div className="bg-[#e34135] flex sm:flex-row flex-col sm:px-[100px] px-10 py-[90px]">
            <TextThing/>
            <ImageThing/>
        </div>
    )
}


const TextThing = () => {
    return (
        <div className="text-white sm:pr-32 ">
            <h1 className="font-CabinetGrotesk sm:text-[68px] text-[44px] leading-10 sm:leading-normal">
                5, 4, 3, 2, 1 <br />
                That's how quickly we turn around your IG feed!
            </h1>

            <p className="font-jakarta sm:text-[24px] mb-10">Take control of your content universe. You decide when, what, and how often to post. Whether you’re a business owner keeping up your company page or a social media manager buried under client feeds, we’ve got you. 😌</p>

            <ButtonCompo bgColor='#a3de9b' textContent={'CHECK OUT BUNDLES'}/>
        </div>
    )
}

const ImageThing = () => {
    return (
        <div className="sm:w-[80vw] -space-y-10">
            <motion.img src={TakeActionOne} alt="" className="" whileHover={{rotate : 5}} whileTap={{rotate: 5}} transition={{duration : 0.4}} />
            <motion.img src={TakeActionTwo} alt="" className="" whileHover={{rotate: -5}} whileTap={{rotate : 5}} transition={{duration : 0.4 }} />
        </div>
    )
}
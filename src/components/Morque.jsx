import { animate, motion } from 'framer-motion'
import giff from '../assets/giff.WEBP'
import { div } from 'framer-motion/client'

export const Morque = () => {
    return (
        <div className='overflow-x-hidden'>
            <ImageMorque/>
        </div>
    )
}

const ImageMorque = () => {
    return (
        <div className='flex'>
            <motion.div className='flex  flex-shrink-0' initial={{x : 0}} animate={{x : "-100%"}} transition={{duration : 15, repeat: Infinity, ease : 'linear'}} >
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
            </motion.div >
            <motion.div className='flex  flex-shrink-0' initial={{x : 0}} animate={{x : "-100%"}} transition={{duration : 15, repeat: Infinity, ease : 'linear'}} >
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
                <img src={giff} alt="" />
            </motion.div >
        </div>
    )
}


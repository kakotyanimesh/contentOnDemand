import { animate, easeIn, motion } from 'framer-motion'
// import giff from '../assets/images/giff.WEBP'
import { div, p, text } from 'framer-motion/client'
import one from '../assets/images/one.avif'
import two from '../assets/images/two.png'
import three from '../assets/images/three.png'
import Four from '../assets/images/Four.png'
import five from '../assets/images/five.png'
import six from '../assets/images/six.png'
import seven from '../assets/images/seven.png'
import eight from '../assets/images/eight.png'
import nine from '../assets/images/nine.png'
import star from '../assets/images/star.png'


const images = [
    one,
    two,
    three,
    Four,
    five,
    six,
    seven,
    eight,
    nine
]

const texts = [
    'Post-as-you-please',
    'Quick Turnaround',
    'No hefty contracts',
    'No generic BS',
    'Post-as-you-please',
    'Quick Turnaround',
    'No hefty contracts',
    'No generic BS',
    'Post-as-you-please',
    'Quick Turnaround',
    'No hefty contracts',
    'No generic BS',
    'Post-as-you-please',
    'Quick Turnaround',
    'No hefty contracts',
    'No generic BS'
]

export const Morque = () => {
    return (
        <div className='overflow-x-hidden mt-[80px]'>
            <ImageMorque/>
            <TextMorque/>
        </div>
    )
}

const ImageMorque = () => {
    return (
            <motion.div className='flex  flex-shrink-0' initial={{x : 0}} animate={{x : "-100%"}} transition={{duration : 20, repeat: Infinity, ease : 'linear'}} >
                <ul className='flex sm:gap-20 gap-6'>
                    {
                        images.map((img, index) => (
                            
                                <img src={img} alt="" key={index} className='sm:size-80 size-48' />
                            
                        )) 
                    }
                    {
                        images.map((img, index) => (
                            
                                <img src={img} alt="" key={index} className='sm:size-80 size-48' />
                            
                        )) 
                    }
                </ul>   
                
            </motion.div >
        
    )
}


const TextMorque = () => {
    return (
        <motion.div className='my-[100px]'initial={{x : "-100%"}} animate={{x : 1}} transition={{duration : 18, repeat : Infinity, ease: 'linear'}} >
            <ul className='flex whitespace-nowrap sm:gap-10 gap-4' >
                {
                texts.map((text, index) => (
                    <>
                        <img  src={star} alt="" srcset="" className='sm:size-10 size-7' />
                        <h1  className='text-white sm:text-3xl text-xl'>{text}</h1>

                    </>
                ))
                }
            </ul>
        </motion.div>
    )
}


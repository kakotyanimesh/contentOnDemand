import { motion } from "framer-motion"

export const Praise = () => {
  return <div className="bg-[#a3de9b] py-[30px]">
    <div className="flex text-center justify-center -space-x-7 items-center">
      <h1 className="font-CabinetGrotesk text-[72px] leading-relaxed">Praises? We've Collected A Few</h1>
      <img src='https://framerusercontent.com/images/YfbxUD4vSZ0sxUWtqAHfkxtkzI.png' className="w-20" />
    </div>
    <div>
      <ReviewCompo/>
    </div>
  </div>
}


const ReviewCompo = () => {
  return (
    <motion.ul>
      <li>
        <h1>Aishwarya and her team have been nothing short of fantastic to work with. They contribute original ideas and are highly organized, responsive, and on time. In addition, they're open, learning, and adjusting as the market provides feedback on their work.</h1>
      </li>
    </motion.ul>
  )
}
import { motion, useScroll, useTransform } from 'framer-motion'
import one from '../assets/images/hs.png'
import { useRef } from 'react'







/*
    steps => 1. Card array to store all the images each image will be imported first 
    step 2 => Will make a component which takes images from the card array where we are going to render images in background dont use Image tag or
    step 3 => with the help of map going to render the images inside image render component here all the animation logic will be written 
    step 4 => will render the upper element in the main slider component , 
    all things are written in functions/components for better code reading etc 

*/

export const Example = () => {
  return (
    <div className="">
        <h1 className='font-CabinetGrotesk text-[30px] sm:text-[72px] mb-14 text-center'>its not done yet !! </h1>
     <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute rounded-xl inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: one,
    title: "Title 1",
    id: 1,
  },
  {
    url: one,
    title: "Title 2",
    id: 2,
  },
  {
    url: one,
    title: "Title 3",
    id: 3,
  },
  {
    url: one,
    title: "Title 4",
    id: 4,
  },
  {
    url: one,
    title: "Title 5",
    id: 5,
  },
  {
    url: one,
    title: "Title 6",
    id: 6,
  },
  {
    url: one,
    title: "Title 7",
    id: 7,
  },
];

// export const Praise = () => {
//     return (
//         <div className="bg-[#a3de9b] sm:py-[90px] py-10 text-center font-CabinetGrotesk">
//             <h1 className="sm:text-[72px] text-xl">Praises? We've Collected A Few</h1>
//             <div className='overflow-x-hidden sticky'>
//                 <HorizontalScrollCarousel/>
//             </div>
//         </div>
//     )
// }


// const HorizontalScrollCarousel = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: targetRef,
//     });
  
//     const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
//     return (
//       <section ref={targetRef} className="relative h-[200vh] bg-red-300">
//         <div className="sticky  flex h-screen items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex gap-4">
//             {cards.map((card) => {
//               return <Card card={card} key={card.id} />;
//             })}
//           </motion.div>
//         </div>
//       </section>
//     );
//   };
  
//   const Card = ({ card }) => {
//     return (
//       <div
//         key={card.id}
//         className="group relative h-[450px] w-[450px] overflow-hidden"
//       >
//         <div
//           style={{
//             backgroundImage: `url(${card.url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//         ></div>
        
//       </div>
//     );
//   };
  

  
//   const cards = [
//     {
//       url: one,
//       title: "Title 1",
//       id: 1,
//     },
//     {
//       url: one,
//       title: "Title 2",
//       id: 2,
//     },
//     {
//       url: one,
//       title: "Title 3",
//       id: 3,
//     },
//     {
//       url: one,
//       title: "Title 4",
//       id: 4,
//     },
//     {
//       url: one,
//       title: "Title 5",
//       id: 5,
//     },
//     {
//       url: one,
//       title: "Title 6",
//       id: 6,
//     },
//     {
//       url: one,
//       title: "Title 7",
//       id: 7,
//     },
//   ];
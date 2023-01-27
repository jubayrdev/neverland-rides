import { motion } from 'framer-motion';
import React from 'react'

export interface CarouselItemProps{
    isActive?:boolean;
    imageSrc:string;
    imageAlt:string;
    title:string;
    description:string;
}
const CarouselItem:React.FC<CarouselItemProps> = ({isActive,imageAlt,imageSrc,title,description}) => {

  if(!isActive){return <></>}
  return (
    <motion.div className={`relative  w-full`} initial={{x:300}} animate={{x:0}} exit={{x:-300}} >
        <img src={imageSrc} className="block w-full rounded-md" alt={imageAlt} />
        <div className="carousel-caption hidden md:block absolute text-center">
          <h5 className="text-xl">{title}</h5>
          <p>{description}</p>
        </div>
      </motion.div>
  )
}

export default CarouselItem
import React from 'react'

export interface CarouselItemProps{
    isActive?:boolean;
    imageSrc:string;
    imageAlt:string;
    title:string;
    description:string;
}
const CarouselItem:React.FC<CarouselItemProps> = ({isActive,imageAlt,imageSrc,title,description}) => {
  return (
    <div className={`carousel-item  relative float-left w-full ${isActive?"active":""}`}>
        <img src={imageSrc} className="block w-full rounded-md" alt={imageAlt} />
        <div className="carousel-caption hidden md:block absolute text-center">
          <h5 className="text-xl">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default CarouselItem
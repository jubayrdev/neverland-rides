import React, { useEffect, useState } from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import useInterval from '../../hooks/useInterval'
import CarouselItem, { CarouselItemProps } from './CarouselItem'

AnimatePresence
interface CarouselProps {
  items: CarouselItemProps[]
}
const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [totalItems, _] = useState<number>(items.length)
  const [intervalId, setIntervalId] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0)
  
  
  const nextSlideHandler = () => {

    setActiveIndex((prev) => {
      const newIndex = prev + 1
      if (newIndex >= totalItems) {
        return 0
      }
      return newIndex
    })
  }
  
useInterval(() => {},1000)

  const previousSlideHandler = () => {
    const newIndex = activeIndex - 1
    if (newIndex < 0) {
      return setActiveIndex(totalItems-1)
    }
    return setActiveIndex(newIndex)
  }
  return (


    <div className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {[...Array(totalItems).keys()].map((idx) => (
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className={idx === activeIndex ? 'active' : ''}
            aria-current="true"
            aria-label={`Slide ${idx}`}
            key={idx}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
      <div className="overflow-hidden">
        <AnimatePresence>

          {items.map((item, idx) => (<CarouselItem
            key={item.imageSrc}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            description={item.description}
            isActive={idx === activeIndex}
          />))}
          
        </AnimatePresence>

      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        onClick={previousSlideHandler}
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        onClick={()=>nextSlideHandler()}
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel

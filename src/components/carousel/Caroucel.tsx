import React, { ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ContentProps {
  content: ReactNode;
}

export default function Carousel({ content }: ContentProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={prevSlide}>
        <ChevronLeft />
      </button>
      <div ref={carouselRef} className="carousel-container">
     
        <div className="carousel-content">{content}</div>
      </div>
      <button onClick={nextSlide}>
        <ChevronRight />
      </button>
    </div>
  );
}

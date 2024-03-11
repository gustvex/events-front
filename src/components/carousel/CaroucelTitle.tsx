import React, { ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ContentProps {
  content: ReactNode;
  title: string;
}

export default function CarouselTitle({ content, title }: ContentProps) {
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
      <button onClick={prevSlide} className="mt-6">
        <ChevronLeft />
      </button>
      <div ref={carouselRef} className=" space-y-4 carousel-container">
        <h2 className="text-black ">{title}</h2>

        <div className="carousel-content">{content}</div>
      </div>
      <button onClick={nextSlide} className="mt-6">
        <ChevronRight />
      </button>
    </div>
  );
}

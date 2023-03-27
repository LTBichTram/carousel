import React from "react";
import { fakeData } from "../data/fakeData";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className="relative">
      {fakeData.map((data, index) => (
        <CarouselItem key={index} title={data.title} image={data.image} />
      ))}
    </div>
  );
};

export default Carousel;

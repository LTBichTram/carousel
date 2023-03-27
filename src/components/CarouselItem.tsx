import { TDataCarousel } from "../types/common.type";

const CarouselItem = ({ title, image }: TDataCarousel) => {
  return (
    <div className="absolute">
      <h2 className="text-red">{title}</h2>
      <img src={image} className="w-full object-cover h-[40rem]" />
    </div>
  );
};

export default CarouselItem;

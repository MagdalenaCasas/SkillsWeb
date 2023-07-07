import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const ImageSlider = ({ slides }) => {

  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        return (
          <>
           <Image key={slide.id} src={slide.image}/>
          </>
        )
      })}
    </Carousel>
  );
};

export default ImageSlider;
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const ImageSliderMobile = ({ slides }) => {

  return (
      <Carousel infiniteLoop>
        {slides.map((slide) => {
          return (
            <>
             <Image key={slide.id} src={slide.imageMobile}/>
            </>
          )
        })}
      </Carousel>
    );
  
};

export default ImageSliderMobile;
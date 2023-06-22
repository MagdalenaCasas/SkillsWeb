import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box,Text } from '@chakra-ui/react'
import CardCarrousel from "./CardCarrousel";


const ImageSlider = ({ slides }) => {

  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        return (
          <>
           <Image key={slide.id} src={slide.image} height="50vh" width="100%" />
          </>
        )
      })}
    </Carousel>
  );
};

export default ImageSlider;
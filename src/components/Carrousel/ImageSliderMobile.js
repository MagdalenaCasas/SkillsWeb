import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box,Text } from '@chakra-ui/react'


const ImageSliderMobile = ({ slides }) => {

  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        return (
          <>
           <Box
           w={"100%"}
           h={"100%"}
           background={"#bb2423"}
           position={"absolute"}
           marginLeft={"5%"}
           marginTop={"5%"}
           color={"white"}
           paddingTop={"20%"}

           >
            <Box
            paddingLeft={"10%"}
            w={"93%"}
            
            >
            <Text
            fontWeight={"bold"}
            fontSize={"40px"}
            align={"start"}
            w={"90%"}
            >{slide.titulo}</Text>


            <Text
            fontWeight={"bold"}
            fontSize={"30px"}
            align={"start"}
            w={"90%"}
            >{slide.titulo2}</Text>

            </Box>

           <Box
            paddingLeft={"10%"}
            w={"93%"}
           >

           <Text
           fontSize={"25px"}
           align={"start"}
           margin={0}
           w={"90%"}
           >{slide.texto}</Text>


          <Text
           align={"start"}
           margin={0}
           fontSize={"25px"}
           w={"90%"}
           >{slide.texto2}</Text>
            
          <Text
           align={"start"}
           margin={0}
           marginTop={"-3%"}
           fontSize={"25px"}
           w={"90%"}
           >{slide.texto3}</Text>
           </Box>


            
           </Box>
           <Box  height="50vh" width="100%" />
          </>
        )
      })}
    </Carousel>
  );
};

export default ImageSliderMobile;
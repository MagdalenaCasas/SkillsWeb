import {  useEffect, useState} from "react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box,Text } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'


const CardCarrousel = ({ slides }) => {
  const [height, setHeigth] = useState("")
  const [width, setWidth] = useState("")
  const [margin, setMargin]= useState("")
  const [isLargerThan850] = useMediaQuery('(min-width: 850px)')

  useEffect(() => {
     if(isLargerThan850){
        setHeigth("60%")
        setWidth("28%")
        setMargin("5%")
     }else{
        setHeigth("70%")
        setWidth("45%")
        setMargin("10%")
     }
  }, [isLargerThan850]);
  return (
           <Box
           w={width}
           h={height}
           background={"#bb2423"}
           position={"absolute"}
           marginLeft={"5%"}
           marginTop={margin}
           color={"white"}

           >
            <Box
            paddingLeft={"10%"}
            w={"93%"}
            
            >
            <Text
            fontWeight={"bold"}
            fontSize={"40px"}
            align={"start"}
            >{slides.titulo}</Text>


            <Text
            fontWeight={"bold"}
            fontSize={"30px"}
            align={"start"}
            >{slides.titulo2}</Text>

            </Box>

           <Box
            paddingLeft={"10%"}
            w={"93%"}
           >

           <Text
           fontSize={"25px"}
           align={"start"}
           margin={0}
           >{slides.texto}</Text>


          <Text
           align={"start"}
           margin={0}
           fontSize={"25px"}
           >{slides.texto2}</Text>
            
          <Text
           align={"start"}
           margin={0}
           marginTop={"-3%"}
           fontSize={"25px"}

           >{slides.texto3}</Text>
           </Box>
           </Box>

  );
};

export default CardCarrousel;
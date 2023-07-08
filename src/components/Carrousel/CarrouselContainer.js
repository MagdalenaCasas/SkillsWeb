import React from "react";
import { Box, } from '@chakra-ui/react'
import { useContext, useEffect} from "react"
import { AcademiaContext } from '../../context/context';
import ImageSlider from "./Imageslider";
import { useMediaQuery } from '@chakra-ui/react'
import ImageSliderMobile from "./ImageSliderMobile";
import axios from "axios"




const CarrouselContainer = () => {
    /** ESTA FUCION TIENE  */
  const {slideData}= useContext(AcademiaContext);
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  if(isLargerThan600){
    return(
        <>
      <Box  w={"99,5vw"} p={4} color="white" marginTop={"13%"}>
         <ImageSlider slides={slideData} />
      </Box>
        </>
    )
  }else{
    return(
      <>
    <Box  w={"100vw"} p={4} color="white" marginTop={"12%"}>
       <ImageSliderMobile slides={slideData}/>
    </Box>
      </>
  )
  }
    

};
export default CarrouselContainer;
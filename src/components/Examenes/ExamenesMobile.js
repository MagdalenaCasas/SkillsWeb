import React from "react";
import { Box, Flex } from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import FormExamenesMobile from "../Form/FormExamenesMobile";
import CardMobile from "./CardMobile";




const ExamenesMobile = () => {
   /** ESTA FUCION TIENE EL GRID CON LOS CUADRADOS VERDES Y BLANCOS */
   /** VERSION DESKTOP DE LA PAGINA DE ACADEMIA */
   const {infoExamenes}= useContext(AcademiaContext);
   const direction ="column"
    return(
      <>
        <Flex
        justifyContent={"center"}
        marginTop={"15%"}
        >
          <Box
          w={"90%"}
          >
           <CardMobile element={infoExamenes}direction={direction}></CardMobile>
          </Box>
        </Flex>
      <FormExamenesMobile></FormExamenesMobile>
      </>
    
        )
    

};
  export default ExamenesMobile;
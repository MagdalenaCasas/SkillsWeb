import React from "react";
import { Box, Flex } from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import FormExamenesMobile from "../Form/FormExamenesMobile";
import Card from "./Card"




const ExamenesMobile = () => {
   /** ESTA FUCION TIENE EL GRID CON LOS CUADRADOS VERDES Y BLANCOS */
   /** VERSION DESKTOP DE LA PAGINA DE ACADEMIA */
   const {infoExamenes}= useContext(AcademiaContext);
    return(
      <>
        <Flex
        justifyContent={"center"}
        >
          <Box
          w={"60%"}
          >
           <Card element={infoExamenes}></Card>
          </Box>
        </Flex>
      <FormExamenesMobile></FormExamenesMobile>
      </>
    
        )
    

};
  export default ExamenesMobile;
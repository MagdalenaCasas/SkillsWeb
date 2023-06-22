import React from "react";
import { Box,Flex,Text,Image } from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import CardCurso from "./cardCurso";
const CardGris = ({element}) => {
   /** BOX */

    const {verde,Cursos}= useContext(AcademiaContext);

    return(

        <>
        <Flex
         justifyContent={"center"}
         >
          <Box
            w={"90%"}
            h={"40vh"}
            backgroundColor={"#e1e1e1"}
            padding={"5px"}
          >
            
          </Box>
        </Flex>

        </>
    
        )

};
  export default CardGris;
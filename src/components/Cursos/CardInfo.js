import React from "react";
import { Text,Box,Flex,Image } from '@chakra-ui/react'
import { useContext} from "react"
import CardCursoMobile from "./CardCursoMobile";
import imagen from "../../Imagenes/Intermediate.png";
import { AcademiaContext } from '../../context/context';
const CardInfo = ({element,card}) => {
   /**Tiene la card que se llena desde el context con la info de los cursos(solo texto) */

    const {verde,Cursos}= useContext(AcademiaContext);
     let curso = card
     console.log(curso)


    return(
      <Box
      marginBottom={"50px"}
      >
      <Flex
      flexDirection={"column"}
      alignItems={"center"}
      marginBottom={"20px"}
      >
      <Text
      fontSize={"36px"}
      fontWeight={"bold"}
      w={"90%"}
      >{element.title}</Text>

      <Box
      lineHeight={"2"}
      w={"90%"}
      >
          {element.text}
      </Box>

      </Flex>
      <>
        <Flex
         justifyContent={"center"}
         >
          <Box
            w={"90%"}
            h={"35vh"}
            padding={"5px"}
            background={"#e1e1e1"}
          >
          <Flex
           justifyContent={"space-between"}
           flexDirection={"column"}
           h={"90%"}
           padding={"10px"}
          >
          {curso.map(e=>{
          return(
            <>
            <CardCursoMobile element={e}></CardCursoMobile>
            </>
          )
         })}
          </Flex>
            
            
          </Box>
        </Flex>

        </>
      
      </Box>
    
        )

};
  export default CardInfo;
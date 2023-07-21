import React from 'react';
import { useContext} from "react"
import { Text, Flex,Box} from '@chakra-ui/react';
import { AcademiaContext } from '../../context/context';


function ValoresCardMobile (){
 /** ESTA FUNCION TIENE EL CUADRADO VERDE DE LOS DATOS DE CONTACTANOS */
  const {rojoTipografia}= useContext(AcademiaContext);

  return(
   <Flex
   flexDirection={"column"}
   >
   <Text
   align={"center"}
   fontWeight={"bold"}
   fontSize={"24px"}
   color={"white"}
   margin={0}
   h={"10%"}
   marginBottom={"5px"}
   marginTop={"5%"}
   backgroundColor={rojoTipografia}
   paddingTop={"10px"}
   paddingBottom={"10px"}
   > Cultura Skills</Text>

   <Text
    marginBottom={"20px"}
    marginTop={"20px"}
    w={"90%"}
    color={"white"}
    lineHeight={"25px"}
    fontSize={"14px"}
    alignSelf={"center"}
    textAlign={"center"}
   >
     Nuestro objetivo principal es ser reconocidos por nuestra trayectoria, nivel académico y por sobre todo, por el trato cálido y personalizado con cada alumno. 
    </Text>
   <Box
   marginBottom={"20px"}
   marginTop={"20px"}
   w={"90%"}
   color={"white"}
   lineHeight={"25px"}
   fontSize={"14px"}
   alignSelf={"center"}
   textAlign={"center"}
   >
    <Text
    margin={0}
    fontSize={"16px"}
    fontWeight={"bold"}
    marginBottom={"5%"}
    lineHeight={"60px"}
    >
    Skills es una institución que contiene.<br></br>
    Skills es una institución solidaria.<br></br>
    Skills es formador de personas.<br></br>
    Skills capacita a sus colaboradores <br></br>
    Skills es familia.
    </Text>


   </Box>

   </Flex>
  )
}

export default ValoresCardMobile
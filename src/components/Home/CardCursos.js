import React from 'react';
import {  useEffect, useState} from "react";
import { Flex, Text,Button, Link} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'



function CardCursosHome ({element}){
   /** ESTA FUNCION ES UN COMPONENTE CARD QUE LLENA LOS DATOS DEL CUADRADO VERDE DE HOME */

  return(
     <Flex
     w={"90%"}
     height={"95%"}
     flexDirection={"column"}
     justifyContent={"center"}
     alignItems={"center"}
     margin={"10px"}
     >   
        <Text margin={"8%"} 
        color={"#bb2423"} 
        fontWeight={"bold"}
        width={"80%"} 
        align={"center"}
        fontSize={["30px"]}>
        {element.title}
        </Text>
        <Text 
        color={"white"} 
        margin={0} 
        w={"80%"} 
        align={"center"}
        lineHeight={"25px"}
        fontSize={"16px"}>{element.value}</Text>
      <Link
      cursor={"pointer"}
      w={"50%"}
      h={"10%"}
      textDecoration={"none"}
      href={"./cursos"}> 
       <Button
         background={"#bb2423"}
         color={"white"}
         border={"none"}
         marginTop={"10%"}
         w={"100%"}
         h={"100%"}
        >ver más</Button>
      </Link>
     </Flex>
  )
}

export default CardCursosHome
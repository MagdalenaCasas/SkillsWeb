import React from 'react';
import { Flex, Text, Image} from '@chakra-ui/react';





function ItemBox ({element}){
   /** ESTA FUNCION ES UN COMPONENTE CARD QUE LLENA LOS DATOS DEL CUADRADO VERDE DE CONTACTOS */

  return(
     <Flex
     flexDirection={"column"}
     justifyContent={"center"}
     alignItems={"center"}
     margin={"10px"}
     >
        <Flex
        >
            <Image src={element.img} w={"20px"}marginRight={"5px"}></Image>
        </Flex>
        <Text color={"white"} marginTop={"5px"} w={"70%"} align={"center"} fontSize={"12px"}>{element.value}<br></br>{element.text2}</Text>
     </Flex>
  )
}

export default ItemBox
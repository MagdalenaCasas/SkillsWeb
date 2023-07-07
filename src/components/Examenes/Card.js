import React from "react";
import { Text,Box,Flex,Image } from '@chakra-ui/react'
import examsRojo from "../../Imagenes/ExamsRojo.png"
import examsVerde from "../../Imagenes/ExamsVerde.png"


const Card = ({element}) => {

     return(
      <>
      <Flex
      flexDirection={"column"}
      alignItems={"center"}
      marginBottom={"20px"}
      >
      <Text
      fontSize={"36px"}
      fontWeight={"bold"}
      textAlign={"center"}
      w={"90%"}
      >{element.title}</Text>

      <Box
      lineHeight={"35px"}
      w={"80%"}
      fontSize={"20px"}
      >
        {element.text}
      </Box>
      <Box
      lineHeight={"35px"}
      w={"80%"}
      mb={"3%"}
      fontSize={"20px"}
      >
        {element.text2}
      </Box>
      <Box
        w={"90%"}
        h={"40vh"}
        padding={"5px"}
        >
          <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"90%"}
          marginLeft={"5%"}
          >
          <Box
           background={"#e1e1e1"}
           borderRadius={"25px"}
          >
            <Image src={examsRojo} w={"20vw"}></Image>
            <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"30px"}
            margin={0}
            marginBottom={"20px"}
            >Flayers</Text>
          </Box>
          <Box
          background={"#e1e1e1"}
          borderRadius={"25px"}
          >
            <Image src={examsVerde} w={"20vw"}></Image>
            <Text 
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"30px"}
            margin={0}
            marginBottom={"20px"}
            >PET</Text>
          </Box>
          <Box
           background={"#e1e1e1"}
           borderRadius={"25px"}
          >
            <Image src={examsRojo} w={"20vw"}></Image>
            <Text 
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"30px"}
            margin={0}
            marginBottom={"20px"}
            >FCE</Text>
          </Box>
          </Flex>
        </Box>

      </Flex>
      </>
     
    )
 
 };
   export default Card;
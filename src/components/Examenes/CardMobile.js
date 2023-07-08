import React from "react";
import { Text,Box,Flex,Image } from '@chakra-ui/react'
import examsRojo from "../../Imagenes/ExamsRojo.png"
import examsVerde from "../../Imagenes/ExamsVerde.png"


const CardMobile = ({element, direction}) => {
  

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
      lineHeight={"25px"}
      w={"100%"}
      fontSize={"14px"}
      >
        {element.text}
      </Box>
      <Box
      lineHeight={"25px"}
      mb={"3%"}
      w={"100%"}
      fontSize={"14px"}
      >
        {element.text2}
      </Box>
      <Box
        w={"93%"}
        padding={"20px"}
        marginTop={"20px"}
        >
          <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"90%"}
          marginLeft={"5%"}
          flexDirection={direction}
          >
          <Box

           borderRadius={"25px"}
          >
            <Image src={examsRojo} w={"20vw"}></Image>
            <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"20px"}
            margin={0}
            marginBottom={"20px"}
            >FLYERS</Text>
          </Box>
          <Box
          borderRadius={"25px"}
          textAlign={"center"}
          >
            <Image src={examsVerde} w={"20vw"}></Image>
            <Text 
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"20px"}
            margin={0}
            marginBottom={"20px"}
            >PRELIMINARY</Text>
          </Box>
          <Box
           borderRadius={"25px"}
          >
            <Image src={examsRojo} w={"20vw"}></Image>
            <Text 
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"20px"}
            margin={0}
            marginBottom={"20px"}
            >FCE</Text>
          </Box>
          <Box
           borderRadius={"25px"}
          >
            <Image src={examsVerde} w={"20vw"}></Image>
            <Text 
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"20px"}
            margin={0}
            marginBottom={"20px"}
            >IELTS</Text>
          </Box>
          </Flex>
        </Box>

      </Flex>
      </>
     
    )
 
 };
   export default CardMobile;
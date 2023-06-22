import React from "react";
import { Text,Box,Flex,Image } from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';


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
      lineHeight={"2"}
      w={"40%"}
      mb={"3%"}
      >
        {element.text}
      </Box>
      <Box
        w={"90%"}
        h={"30vh"}
        padding={"5px"}
        background={"#e1e1e1"}
        >
        </Box>

      </Flex>
      </>
     
    )
 
 };
   export default Card;
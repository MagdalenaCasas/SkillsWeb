import React from 'react';
import { Text, Image, Flex, Button,Link} from '@chakra-ui/react';
import logotipo from "../../Imagenes/logo.png"
import { FaFacebookF} from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"





function Logo (){
  return(
    <>
   <Flex
   justifyContent={"space-between"}
   alignContent={"center"}
    background={"white"}
   >
      <Flex></Flex>
       <Image src={logotipo} width={"200px"} height={"100px"} ></Image>
     
       <Flex
       marginRight={"2%"}
       alignItems={"center"}
       >
        <Link 
        justifySelf={"flex-end"}
        href='https://www.facebook.com/Skillsinstitute'
        >
        < Button leftIcon={<FaFacebookF />} border={"none"} background={"none"} justifySelf={"flex-end"} cursor={"pointer"} /> 
        </Link>
        <Link href='https://www.instagram.com/skillsenglishinstitute/'>
        < Button leftIcon={<BsInstagram  />} border={"none"} background={"none"} justifySelf={"flex-end"} cursor={"pointer"} /> 
        </Link>
        <Link href='https://wa.me/message/6UZBQXQCSJLVD1'>
        < Button leftIcon={< BsWhatsapp />} border={"none"} background={"none"} justifySelf={"flex-end"} cursor={"pointer"} /> 
        </Link>
       </Flex>
    
   </Flex>
 
    </>
  )
}

export default Logo
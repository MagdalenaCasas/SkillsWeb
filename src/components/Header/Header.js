import React from 'react';
import Logo from './Logo';
import Nav from './Nav'
import { Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import {  useEffect,useState} from "react"


function Header(){
 const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
 const [margin, Setm] = useState("")
 useEffect(() => {
    if(isLargerThan600){
        Setm("0")
    }else{
        Setm("-5%")
    }
 }, [isLargerThan600]);
 return(
    <Box
    position={"fixed"}
    zIndex={"5"}
    w={"100%"}
    top={"0"}
    background={"white"}
    marginTop={margin}
    >
     <Logo></Logo>
     <Nav></Nav>
    </Box>

)

}

export default Header;
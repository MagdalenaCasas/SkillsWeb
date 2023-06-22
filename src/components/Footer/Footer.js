import React from 'react';
import { useMediaQuery } from '@chakra-ui/react'
import Foot from './Foot';
import FooterRes from './FootRes';
function Footer (){
 const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
 if (isLargerThan800){
    return(<Foot></Foot>)
 }else{
    return(<FooterRes></FooterRes>)
 }
}

export default Footer;
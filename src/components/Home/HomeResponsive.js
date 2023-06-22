import React from "react";
import { useMediaQuery } from '@chakra-ui/react'
import HomeDesktop from "./HomeDesktop"
import HomeMobile from "./HomeMobile"



function HomeResponsive(){
    /** ESTA FUNCION SE EXPORTA AL APP.JS  TIENE MEDIA QUERY*/
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    if(isLargerThan600){
        return(<HomeDesktop></HomeDesktop>)
    }else{
        return(<HomeMobile></HomeMobile>)
    }
}

export default  HomeResponsive
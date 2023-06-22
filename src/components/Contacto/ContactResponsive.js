import React from "react";
import { useMediaQuery } from '@chakra-ui/react'
import ContactCardRes from "./ContatcMobile"
import ContactCardContainer from "./ContactDesktop"



function ContactResponsive(){
    /** ESTA FUNCION SE EXPORTA AL APP.JS  TIENE MEDIA QUERY*/
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    if(isLargerThan600){
        return(<ContactCardContainer></ContactCardContainer>)
    }else{
        return(<ContactCardRes></ContactCardRes>)
    }
}

export default  ContactResponsive
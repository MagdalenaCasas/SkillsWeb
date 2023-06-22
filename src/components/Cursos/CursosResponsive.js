import React from "react";
import { useMediaQuery } from '@chakra-ui/react'
import CursosDesktop from "./CursosDesktop";
import CursosMobile from "./CursosMobile";



function CursosResponsive(){
    /** ESTA FUNCION SE EXPORTA AL APP.JS  TIENE MEDIA QUERY*/
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    if(isLargerThan600){
        return(<CursosDesktop></CursosDesktop>)
    }else{
        return(<CursosMobile></CursosMobile>)
    }
}

export default  CursosResponsive
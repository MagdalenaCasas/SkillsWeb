import React from "react";
import { useMediaQuery } from '@chakra-ui/react'
import ExamenesDesktop from "./ExamenesDesktop";
import ExamenesMobile from "./ExamenesMobile";



function ExamenesResponsive(){
    /** ESTA FUNCION SE EXPORTA AL APP.JS  TIENE MEDIA QUERY*/
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    if(isLargerThan800){
        return(<ExamenesDesktop></ExamenesDesktop>)
    }else{
        return(<ExamenesMobile></ExamenesMobile>)
    }
}

export default  ExamenesResponsive
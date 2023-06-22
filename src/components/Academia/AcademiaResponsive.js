import React from "react";
import { useMediaQuery } from '@chakra-ui/react'
import AcademiaDesktop from "./AcademiaDesktop";
import AcademiaMobile from "./AcademiaMobile";



function AcademiaResponsive(){
    /** ESTA FUNCION SE EXPORTA AL APP.JS  TIENE MEDIA QUERY*/
    const [isLargerThan600] = useMediaQuery('(min-width: 700px)')

    if(isLargerThan600){
        return(<AcademiaDesktop></AcademiaDesktop>)
    }else{
        return(<AcademiaMobile></AcademiaMobile>)
    }
}

export default  AcademiaResponsive
import React from "react";
import { Box, Text,Flex, Image } from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
const CardCursoMobile = ({element}) => {
    /** ESTA ES LA CARD QUE SE ARMA DENTRO DE LA BOX GRIS */
    const {verde,}= useContext(AcademiaContext);
    return(

        <>
          <Image src={element.imageMobile} margin={"10px"}></Image>
        </>
    
        )

};
export default CardCursoMobile;
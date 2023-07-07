import React from "react";
import { Box, Text,Flex, Image } from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
const CardCursos = ({element}) => {
    /** ESTA ES LA CARD QUE SE ARMA DENTRO DE LA BOX GRIS */
    const {verde,}= useContext(AcademiaContext);
    return(

        <>
          <Image src={element.image} margin={"10px"}></Image>
        </>
    
        )

};
export default CardCursos;
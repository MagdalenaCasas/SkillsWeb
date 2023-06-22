import React from "react";
import { Box, Text,Flex, Image } from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
const CardCursoMobile = ({element}) => {
    /** ESTA ES LA CARD QUE SE ARMA DENTRO DE LA BOX GRIS */
    const {verde,}= useContext(AcademiaContext);
    return(

        <>
            <Flex
            borderRadius={"25px"}
            h={"6vh"}
            w={"100%"}
            justifyContent={"space-between"}
            >
             <Text
             textAlign={"center"}
             m={0}
             w={"100%"}
             background={"pink"}
             >{element.titulo}</Text>
            </Flex>
        </>
    
        )

};
export default CardCursoMobile;
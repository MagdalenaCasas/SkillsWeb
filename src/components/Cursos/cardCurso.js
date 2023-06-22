import React from "react";
import { Box, Text,Flex, Image } from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
const CardCurso = ({element}) => {
    /** ESTA ES LA CARD QUE SE ARMA DENTRO DE LA BOX GRIS */
    const {verde,}= useContext(AcademiaContext);
    return(

        <>
            <Flex
            background={"yellow"}
            borderRadius={"25px"}
            h={"30vh"}
            w={"15%"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            >
             <Text
             textAlign={"center"}
             background={"pink"}
             m={0}
             mt={"10%"}
             >{element.titulo}</Text>
            </Flex>
        </>
    
        )

};
export default CardCurso;
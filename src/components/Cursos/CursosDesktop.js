import React from "react";
import { Grid, GridItem, Text,Image,Box ,Flex} from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import CursosAdultos from "./CursosAdultos";
const CursosDesktop = () => {
   /** tengo que hacer esta responsive */
    const {verde, infoCursosAdultos, infoCursosNiños}= useContext(AcademiaContext);
    return(

        <>
        <Text
        margin={0}
        align={"center"}
        fontSize={"36px"}
        fontWeight={"bold"}
        className="cursos"
        >Cursos Disponibles</Text>

        <CursosAdultos></CursosAdultos>
        </>
    
        )

};
  export default CursosDesktop;
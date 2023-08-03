import React from "react";
import { Text} from '@chakra-ui/react'
import CursosAdultos from "./CursosAdultos";
const CursosDesktop = () => {
   /** tengo que hacer esta responsive */

    return(

        <>
        <Text
        margin={0}
        align={"center"}
        fontSize={"36px"}
        fontWeight={"bold"}
        className="cursos"
        marginTop={"5%"}
        >Cursos disponibles</Text>

        <CursosAdultos></CursosAdultos>
        </>
    
        )

};
  export default CursosDesktop;
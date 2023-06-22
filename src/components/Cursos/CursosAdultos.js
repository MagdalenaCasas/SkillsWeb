import React from "react";
import { Box ,Flex} from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import CardInfo from "./CardInfo";
import CardGris from "./CardGris";
const CursosAdultos = () => {

  /** esta es la de la box con la info de la card */
    const {Cursos}= useContext(AcademiaContext);

    return(

        <>

         {Cursos.map(e=>{
          return(
            <>
            <CardInfo element={e} card={e.cards}></CardInfo>
            </>
          )
         })}

        </>
    
        )

};
  export default CursosAdultos;
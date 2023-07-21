import React from "react";
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import CardInfo from "./CardInfo";
const CursosAdultos = () => {

  /** esta es la de la box con la info de la card */
    const {Cursos}= useContext(AcademiaContext);

    return(

        <>

         {Cursos.map(e=>{
          return(
            <>
            <CardInfo element={e} card={e.cards} key={e.id}></CardInfo>
            </>
          )
         })}

        </>
    
        )

};
  export default CursosAdultos;
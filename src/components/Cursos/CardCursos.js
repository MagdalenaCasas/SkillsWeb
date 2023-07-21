import React from "react";
import { Image } from '@chakra-ui/react'

const CardCursos = ({element}) => {
    /** ESTA ES LA CARD QUE SE ARMA DENTRO DE LA BOX GRIS */

    return(

        <>
          <Image src={element.image} margin={"10px"}></Image>
        </>
    
        )

};
export default CardCursos;
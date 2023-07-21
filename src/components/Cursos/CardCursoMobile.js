import React from "react";
import {  Image } from '@chakra-ui/react'

const CardCursoMobile = ({element}) => {
    /** ESTA ES LA CARD QUE SE ARMA DENTRO DE LA BOX GRIS */

    return(

        <>
          <Image src={element.imageMobile} margin={"10px"}></Image>
        </>
    
        )

};
export default CardCursoMobile;
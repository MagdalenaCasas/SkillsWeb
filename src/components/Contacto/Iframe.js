import React from 'react';
import Iframe from 'react-iframe'
import { Flex } from '@chakra-ui/react'

function IframeFunction (){
 /** ESTA FUNCION ES UN COMPONENTE CON EL GOOGLE MAPS DE CONTACTOS */
    return(

        <Flex
        width='100%'
        height='100%'
        justifyContent={"center"}
        alignItems={"center"}
        >
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.8340200856296!2d-64.18079732995167!3d-31.45080461839664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2e3a57659dd%3A0x83de184d4a247697!2sBv%20Elias%20Yofre%201079%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1678309153282!5m2!1ses-419!2sar"
            id="maps"
            width='80%'
            height='80%'
            className="maps"
            display="block"
            position="relative"
            referrerpolicy="no-referrer-when-downgrade"
            loading="lazy"
            />

        </Flex>
    )
}

export default IframeFunction
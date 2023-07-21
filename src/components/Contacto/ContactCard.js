import React from 'react';
import { useContext} from "react"
import { Text} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import { AcademiaContext } from '../../context/context';
import ItemBox from './Itembox';





function ContactCard (){
 /** ESTA FUNCION TIENE EL CUADRADO VERDE DE LOS DATOS DE CONTACTANOS */
  const {contact, rojoTipografia}= useContext(AcademiaContext);

  return(
   <>
   <Text
   align={"center"}
   fontWeight={"bold"}
   fontSize={"24px"}
   color={"white"}
   margin={0}
   h={"10%"}
   marginTop={"5%"}
   backgroundColor={rojoTipografia}
   paddingTop={"10px"}
   >Datos de contacto</Text>

     <Grid templateColumns='repeat( 1fr)' gap={0}>
      {contact.map(item =>{
        return( 
        <GridItem w='100%' h='8vh'>
          <ItemBox element={item} key={item.id}></ItemBox>
        </GridItem>)
      })}
    </Grid>

    <Text
   align={"center"}
   fontWeight={"bold"}
   fontSize={"10px"}
   color={"white"}
   margin={0}
   marginBottom={"3%"}
   marginTop={"5%"}
   >SEGUINOS EN NUESTRAS REDES</Text>
   <Text
   align={"center"}
   fontSize={"10px"}
   color={"white"}
   fontWeight={"bold"}
   margin={0}
   >@SkillsEnglishInstitute</Text>
   </>
  )
}

export default ContactCard
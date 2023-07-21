import React from "react";
import { Grid, GridItem, Text} from '@chakra-ui/react'
import IframeFunction from "./Iframe"
import Boton from "../SIn Uso/Button";
import whatsApp from "../../Imagenes/whatsapp.png"
import ContactCard from "./ContactCard";
import FormularioPrueba from "../Form/Form";
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';

const ContactCardRes = () => {
    /** ESTA FUCION TIENE EL GRID RESPONSIVE CON LOS CUADRADOS VERDES Y BLANCOS DE CONTACTO (son los 4, el maps, info, form e imagen) */
  
      /**VERSION MOBILE DE LA PAGINA DE CONTACTO*/
      const {verde}= useContext(AcademiaContext);
      return(
      <>
      <Text
      align={"center"}
      fontSize={"30px"}
      margin={0}
      marginTop={"4%"}
      marginBottom={"3%"}
      paddingTop={"45%"}
      >Para consultas, contactanos</Text>
       <Boton className={"botonWp"} image={whatsApp} link={'https://wa.me/message/6UZBQXQCSJLVD1'} ></Boton>
      <Grid
  
      templateColumns='0% 100% 0%'
      marginBottom={"3%"}
      >
       <GridItem></GridItem>
  
       <GridItem>
       <Grid templateColumns='1fr' gap={6}>
         <GridItem h={"50vh"}  backgroundColor={verde}>
          <ContactCard></ContactCard>
         </GridItem>
         <GridItem h={"50vh"}  align={"center"} >
            <IframeFunction></IframeFunction>
         </GridItem>
         <GridItem h={"50vh"}  backgroundColor={"white"} > <FormularioPrueba></FormularioPrueba> </GridItem>
       </Grid>
        </GridItem>
  
  
       <GridItem ></GridItem>
    </Grid>
      </>
  
      )
  
  };
    export default ContactCardRes;
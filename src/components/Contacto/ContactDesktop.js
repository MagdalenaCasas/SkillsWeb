import React from "react";
import { Grid, GridItem, Text,Image,Box } from '@chakra-ui/react'
import IframeFunction from "./Iframe"
import Boton from "../SIn Uso/Button";
import whatsApp from "../../Imagenes/whatsapp.png"
import imgContacto from "../../Imagenes/imgContacto.png"
import ContactCard from "./ContactCard";
import FormularioPrueba from "../Form/Form";
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';



const ContactCardContainer = () => {
   /** ESTA FUCION TIENE EL GRID CON LOS CUADRADOS VERDES Y BLANCOS DE CONTACTO (son los 4, el maps, info, form e imagen) */
   /** VERSION DESKTOP DE LA PAGINA DE CONTACTOS */
    /** ESTE ES EL QUE ACTUALMENTE SE EXPORTA A LA FUNCION CONTACT RESPONSIVE*/
    const {verde}= useContext(AcademiaContext);
    return(
    <Box
    marginBottom={"5%"}
    >
    <Text
    align={"center"}
    fontSize={"46px"}
    margin={0}
    marginBottom={"1%"}
    paddingTop={"20%"}
    >Para consultas, contactanos</Text>
     <Boton className={"botonWp"} image={whatsApp} link={'https://wa.me/message/6UZBQXQCSJLVD1'} ></Boton>
    <Grid
    templateColumns='10% 80% 10%'
    >
     <GridItem></GridItem>

     <GridItem>
     <Grid templateColumns='repeat(2, 1fr)' gap={6}>
       <GridItem h={"65vh"}  backgroundColor={verde}>
        <ContactCard></ContactCard>
       </GridItem>
       <GridItem h={"65vh"}>
        <Image src={imgContacto} h={"100%"} w={"100%"}></Image>
        </GridItem>
       <GridItem h={"65vh"}  align={"center"} >
          <IframeFunction></IframeFunction>
       </GridItem>
       <GridItem h={"65vh"}  backgroundColor={"white"}  > <FormularioPrueba></FormularioPrueba> </GridItem>
     </Grid>
      </GridItem>
     <GridItem ></GridItem>
  </Grid>
    </Box>

    )

};
  export default ContactCardContainer;
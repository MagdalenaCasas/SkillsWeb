import React from "react";
import { Grid, GridItem, Text,Image,Box,Flex } from '@chakra-ui/react'
import imgAcademia from "../../Imagenes/academiaImage.jpg"
import banner from "../../Imagenes/imageAcademiaBanner.webp"
import frase from "../../Imagenes/fraseAcademia.png"
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import ValoresCard from "./ValoresCard"
const AcademiaDesktop = () => {
   /** ESTA FUCION TIENE EL GRID CON LOS CUADRADOS VERDES Y BLANCOS */
   /** VERSION DESKTOP DE LA PAGINA DE CONTACTOS */
    /** ESTE ES EL QUE ACTUALMENTE SE EXPORTA A LA FUNCION CONTACT RESPONSIVE*/
    const {verde}= useContext(AcademiaContext);
    return(

        <>
        <Text
        margin={0}
        align={"center"}
        fontSize={"36px"}
        fontWeight={"bold"}
        >Nuestra Academia</Text>

        <Box
        align={"center"}
        >
        <Text
        w={"50%"}
        fontSize={"20px"}
        textAlign={"center"}
        lineHeight={"25px"}
        >
        Skills ofrece cursos de inglés a niños desde la edad pre-escolar, adolescentes y adultos, con el compromiso de brindar a sus alumnos un acompañamiento personalizado. 

        </Text>
        </Box>
        <Box
        align={"center"}
        marginBottom={"3%"}
        >

        <Image src={banner} w={"90%"}></Image>
        </Box>
        <Flex
        justifyContent={"center"}
        marginBottom={"3%"}
        >
          <Box
          w={"90%"}
          lineHeight={"23px"}
          >
          <Text
          textAlign={"justify"}
          >
         Skills ofrece cursos de inglés a niños desde la edad pre-escolar, adolescentes y adultos, con el compromiso de brindar a sus alumnos un acompañamiento personalizado.

          </Text>
          <Text
          textAlign={"justify"}
          >
          Skills abrió sus puertas en marzo de 1997,y desde ese entonces  el instituto  se fue adaptando a las necesidades de sus alumnos.
          Nuestra misión en Skills es ofrecer cursos de inglés a niños de edad pre escolar, niños,  adolescentes y adultos, brindando a nuestros alumnos un acompañamiento personalizado para que ellos puedan alcanzar los objetivos propuestos.
          
          </Text>


          </Box>

        </Flex>

        <Box>
        <Grid
        templateColumns='5% 90% 5%'
        marginBottom={"3%"}
        >
         <GridItem
          ></GridItem>
    
         <GridItem>

         <Grid templateColumns='repeat(2, 1fr)' >
           <GridItem  backgroundColor={verde}>
            <ValoresCard></ValoresCard>
           </GridItem>
           <GridItem >
            <Image src={imgAcademia} h={"100%"} w={"100%"}></Image>
            </GridItem>
         </Grid>
         
          </GridItem>
    
    
         <GridItem ></GridItem>
      </Grid>
        </Box>
        <Flex
        justify={"center"}
        >
          <Box
          >

          <Image 
          w={"100vw"}
          h={"25vh"}
          src={frase}></Image>
          </Box>

        </Flex>
        </>
    
        )

};
  export default AcademiaDesktop;
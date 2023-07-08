import React from "react";
import { Grid, GridItem, Text,Image,Box,Flex } from '@chakra-ui/react'
import imgAcademia from "../../Imagenes/academiaImage.jpg"
import banner from "../../Imagenes/imageAcademiaBanner.png"
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
        >¿Quiénes somos?</Text>

        <Box
        align={"center"}
        >
        <Text
        w={"50%"}
        fontSize={"20px"}
        textAlign={"center"}
        lineHeight={"35px"}
        >
         En Skills ofrecemos cursos de inglés a niños desde edad preescolar hasta adultos, con el compromiso de brindar a nuestros alumnos un acompañamiento personalizado. 
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
          fontSize={"20px"}
          lineHeight={"35px"}
          >
          Abrimos nuestras puertas por primera vez en marzo de 1997, y desde ese entonces hemos acompañado a mas de 5000 alumnos en su proceso de aprendizaje, adaptandonos a las necesidades y los tiempos actuales.
          <br></br>
          Estamos en búsqueda constante de ofrecer una mejor calidad educativa. Nuestra misión en Skills es ofrecerte las herramientas y el acompañamiento en el proceso de aprendizaje para que puedas cumplir los objetivos que te propongas.

          
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
           <GridItem  backgroundColor={verde}  h={"90%"}>
            <ValoresCard ></ValoresCard>
           </GridItem>
           <GridItem >
            <Image src={imgAcademia} h={"90%"} w={"90%"}></Image>
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
import React from "react";
import { Grid, GridItem, Text,Flex, Image,Link,Button,Box } from '@chakra-ui/react'
import home1 from "../../Imagenes/home_1.png"
import home2 from "../../Imagenes/home_2.png"
import home3 from "../../Imagenes/home_3.png"
import CardCursosMobile from "./CardCursosMobile";
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import CarrouselContainer from "../Carrousel/CarrouselContainer";



const HomeMobile = () => {
  /** ESTA FUCION TIENE EL GRID CON LOS CUADRADOS VERDES Y BLANCOS DE HOME */
  /** VERSION MOBILE DEL HOME */
  const {cursosAdolescentes, cursosAdultos, verde, cursosKiddies}= useContext(AcademiaContext);


    return(
    <>
    <Flex
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    marginTop={"3%"}
    >
      <CarrouselContainer></CarrouselContainer>

    <Text
    fontSize={"20px"}
    margin={0}
    marginBottom={"2%"}
    lineHeight={"23px"}
    textAlign={"center"}
    >Nunca es tarde para empezar,<br></br> comenzá tu curso de inglés </Text>

    <Text
    margin={0}
    marginTop={"3%"}
    marginBottom={"10%"}
    w={"90%"}
    lineHeight={"23px"}
    textAlign={"center"}
    >Aprendé inglés, el idioma del mundo.</Text>

    </Flex>
    <Grid 
    templateColumns='0% 100% 0%'
    padding={"5%"}
    >
     <GridItem></GridItem>

     <GridItem >
     <Grid templateColumns='1fr' gap={6}>


     <GridItem h={"40vh"} backgroundColor={verde} >
       <CardCursosMobile element={cursosKiddies}></CardCursosMobile>
       </GridItem>
       <GridItem h={"40vh"} backgroundColor={verde} >
        <CardCursosMobile element={cursosAdolescentes}></CardCursosMobile>
        </GridItem>
       <GridItem h={"40vh"} backgroundColor={verde} >
       <CardCursosMobile element={cursosAdultos}></CardCursosMobile>
       </GridItem>
     </Grid>
      </GridItem>


     <GridItem></GridItem>
  </Grid>
    </>

    )

};
  export default HomeMobile;
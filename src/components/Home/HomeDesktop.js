import React from "react";
import { Grid, GridItem, Text,Flex, Image,Link,Button } from '@chakra-ui/react'
import home1 from "../../Imagenes/home_1.webp"
import home2 from "../../Imagenes/home_2.webp"
import CardCursosHome from "./CardCursos";
import { useContext, useEffect,useState} from "react"
import { AcademiaContext } from '../../context/context';
import CarrouselContainer from "../Carrousel/CarrouselContainer";
import { useMediaQuery } from '@chakra-ui/react'
import { Cloudinary } from "@cloudinary/url-gen";





const HomeContainer = () => {
  /** ESTA FUCION TIENE EL GRID CON LOS CUADRADOS VERDES Y BLANCOS DE HOME */
  const {cursosAdolescentes, cursosAdultos, verde, carrouselData}= useContext(AcademiaContext);
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [height, setHeigth] = useState("")
  // This SDK requires imports from @cloudinary/url-gen. Learn more in the SDK docs.

// Create a Cloudinary instance, setting some Cloud and URL configuration parameters.
const url = "https://res.cloudinary.com/cloudinary://895165427322522:JLTxdNoO3tIiL88UWmcAcF5tgIE@djn959kbs/Skills/fetch"


// This creates a URL of the form: https://www.example.com/demo/image/upload/sample


  useEffect(() => {
    if(isLargerThan650){
       setHeigth("60vh")

    }

 }, [isLargerThan650]);

   
    return(
    <>
      <Flex
     w={"100%"}
     padding={"0"}
     justifyContent={"center"}
     marginBottom={"10px"}
     flexDirection={"column"}
     >
     <CarrouselContainer></CarrouselContainer>

     </Flex>
    <Flex
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    marginTop={"3%"}
    >

    <Text
    fontSize={"46px"}
    margin={0}
    marginBottom={"2%"}
    >Nunca es tarde para empezar,<br></br> comenzá tu curso de inglés </Text>

    <Text
    margin={0}
    fontSize={"20px"}
    >Aprendé inglés, el idioma más hablado en el mundo.</Text>
    </Flex>
    <Grid 
    templateColumns='5% 90% 5%'
    padding={"5%"}
    >
     <GridItem ></GridItem>

     <GridItem  >
     <Grid templateColumns='repeat(2, 1fr)' gap={6}>
       <GridItem h={height}  backgroundColor={"gray"}>
        <Image src={home1} w={"100%"} h={"100%"}></Image>
       </GridItem>
       <GridItem h={height}backgroundColor={verde}>
        <CardCursosHome element={cursosAdolescentes}></CardCursosHome>
        </GridItem>
       <GridItem h={height}  align={"center"} backgroundColor={verde} >
       <CardCursosHome element={cursosAdultos}></CardCursosHome>
       </GridItem>
       <GridItem h={height}  backgroundColor={"gray"} >
       <Image src={home2} w={"100%"} h={"100%"}></Image>
        </GridItem>
     </Grid>
      </GridItem>


     <GridItem   ></GridItem>
  </Grid>
    </>

    )

};
  export default HomeContainer;
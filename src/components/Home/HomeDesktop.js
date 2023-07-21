import React from "react";
import { Grid, GridItem, Text,Flex, Image} from '@chakra-ui/react'
import home1 from "../../Imagenes/home_1.png"
import home2 from "../../Imagenes/home_2.png"
import home3 from "../../Imagenes/home_3.png"
import whatsApp from "../../Imagenes/whatsapp.png"
import CardCursosHome from "./CardCursos";
import { useContext, useEffect,useState} from "react"
import { AcademiaContext } from '../../context/context';
import CarrouselContainer from "../Carrousel/CarrouselContainer";
import { useMediaQuery } from '@chakra-ui/react'
import Boton from "../SIn Uso/Button";





const HomeContainer = () => {
  /** ESTA FUCION TIENE EL GRID CON LOS CUADRADOS VERDES Y BLANCOS DE HOME */
  const {cursosAdolescentes, cursosAdultos, verde, cursosKiddies}= useContext(AcademiaContext);
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [height, setHeigth] = useState("")
  
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
       
     <Boton className={"botonWp"} image={whatsApp} link={'https://wa.me/message/6UZBQXQCSJLVD1'} ></Boton>



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
    textAlign={"center"}
    >Nunca es tarde para empezar,<br></br> comenzá tu curso de inglés </Text>

    <Text
    margin={0}
    fontSize={"20px"}
    >Aprendé inglés, el idioma del mundo.</Text>
    </Flex>


    <Grid 
    templateColumns='5% 90% 5%'
    padding={"5%"}
    >
     <GridItem ></GridItem>

     <GridItem  >
     <Grid templateColumns='repeat(2, 1fr)' gap={6}>

      <GridItem h={height}  align={"center"} backgroundColor={verde} >
       <CardCursosHome element={cursosKiddies}></CardCursosHome>
       </GridItem>
       <GridItem h={height}  backgroundColor={"gray"} >
       <Image src={home1} w={"100%"} h={"100%"}></Image>
        </GridItem>
       <GridItem h={height}  backgroundColor={"gray"}>
        <Image src={home2} w={"100%"} h={"100%"}></Image>
       </GridItem>
       <GridItem h={height}backgroundColor={verde}>
        <CardCursosHome element={cursosAdolescentes}></CardCursosHome>
        </GridItem>
       <GridItem h={height}  align={"center"} backgroundColor={verde} >
       <CardCursosHome element={cursosAdultos}></CardCursosHome>
       </GridItem>
       <GridItem h={height}  backgroundColor={"gray"} >
       <Image src={home3} w={"100%"} h={"100%"}></Image>
        </GridItem>
     </Grid>
      </GridItem>


     <GridItem   ></GridItem>
  </Grid>
    </>

    )

};
  export default HomeContainer;
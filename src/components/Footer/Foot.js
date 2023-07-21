import React from 'react';
import { useContext} from "react"
import { Flex, Link, Image } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import logotipo from "../../Imagenes/LogoFooter.png"
import { AcademiaContext } from '../../context/context';
function Foot (){
  const {titleFooter, datos, verde}= useContext(AcademiaContext);

    return(
        <Flex
        justifyContent={"space-around"}
        backgroundColor={verde}
        padding={"20px"}
        color={"white"}
        >
            <Flex
            alignItems={"center"}
            w={["20%"]}
            >
            <Image src={logotipo} 
            w={"80%"}
            h={"45%"}
            ></Image>
            </Flex>
       
            <Grid 
              templateColumns='repeat(3, 1fr)' 
              rowGap={"20px"} 
              columnGap={"100px"} 
              >
                {titleFooter.map(titulo=>{return(<GridItem gridRow={titulo.gridRow} key={titulo.id} color={titulo.color} fontWeight={titulo.fontWeigth} fontSize={["2px","10px","12px"]} >{titulo.text}</GridItem>)})}
                {datos.map(dato=>{return( <GridItem gridRow={dato.gridRow} key={dato.id} fontSize={["8px","12px","16px"]}><Link textDecoration={dato.textDecoration} color={dato.color} href={dato.href} target={dato.target}>{dato.text}</Link></GridItem>)})}
            </Grid>
           

            
        </Flex>
    )
}

export default Foot;
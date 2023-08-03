import React from 'react';
import { useContext} from "react"
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { AcademiaContext } from '../../context/context';
import { NavLink } from 'react-router-dom'; // Importar NavLink desde react-router-dom
function FooterRes (){
  const {titleFooter, datos, verde}= useContext(AcademiaContext);

    return(
        <Flex
        justifyContent={"space-around"}
        backgroundColor={verde}
        padding={"20px"}
        color={"white"}
        >
       
            <Grid 
              templateColumns='repeat(3, 1fr)' 
              rowGap={"20px"} 
              columnGap={"20px"} 
              w={"100%"}
              >
                {titleFooter.map(titulo=>{return(<GridItem gridRow={titulo.gridRow} key={titulo.id} color={titulo.color} fontSize={["6px","8px","10px"]} fontWeight={titulo.fontWeigth} >{titulo.text}</GridItem>)})}
                {datos.map(dato=>{return( <GridItem gridRow={dato.gridRow} key={dato.id}fontSize={["8px","10px"]}><NavLink exacto to={dato.href} target={dato.target} className={"linkFooter"}>{dato.text}</NavLink></GridItem>)})}
            </Grid>
           

            
        </Flex>
    )
}

export default FooterRes;
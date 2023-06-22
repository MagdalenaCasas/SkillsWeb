import React from 'react';
import { useContext} from "react"
import { Flex, Link,  Grid, GridItem } from '@chakra-ui/react';
import { AcademiaContext } from '../../context/context';
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
                {titleFooter.map(titulo=>{return(<GridItem gridRow={titulo.gridRow} color={titulo.color} fontSize={["6px","8px","10px"]} fontWeight={titulo.fontWeigth} >{titulo.text}</GridItem>)})}
                {datos.map(dato=>{return( <GridItem gridRow={dato.gridRow} fontSize={["8px","10px"]}><Link textDecoration={dato.textDecoration} color={dato.color} href={dato.href}>{dato.text}</Link></GridItem>)})}
            </Grid>
           

            
        </Flex>
    )
}

export default FooterRes;
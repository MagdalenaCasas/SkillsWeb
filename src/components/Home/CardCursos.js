import React from 'react';
import { Flex, Text} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom'; // Importar NavLink desde react-router-dom



function CardCursosHome ({element}){
   /** ESTA FUNCION ES UN COMPONENTE CARD QUE LLENA LOS DATOS DEL CUADRADO VERDE DE HOME */

  return(
     <Flex
     w={"90%"}
     height={"95%"}
     flexDirection={"column"}
     justifyContent={"center"}
     alignItems={"center"}
     margin={"10px"}
     >   
        <Text margin={"8%"} 
        color={"white"} 
        fontWeight={"bold"}
        width={"80%"} 
        align={"center"}
        fontSize={["30px"]}>
        {element.title}
        </Text>
        <Text 
        color={"white"} 
        margin={0} 
        w={"80%"} 
        align={"center"}
        lineHeight={"25px"}
        fontSize={"16px"}>{element.value}</Text>



          <NavLink
            exact
            to={'/cursos'} // Asegurarse de utilizar el atributo "to" en lugar de "href"
            className={'botonHome'}
            >
            {'ver mas'}
          </NavLink>
     </Flex>
  )
}

export default CardCursosHome
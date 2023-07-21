import React, {useState, useEffect} from "react";
import { Text,Box,Flex} from '@chakra-ui/react'
import CardCursoMobile from "./CardCursoMobile";
import CardCursos from "./CardCursos";
import { useMediaQuery } from '@chakra-ui/react'
const CardInfo = ({element,card}) => {
   /**Tiene la card que se llena desde el context con la info de los cursos(solo texto) */
   const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
   const [fontsize, setFontsize] =useState("")
   const [title, settitle] =useState("")
   const [lineHeight, setLineheigth] =useState("")

     let curso = card
     useEffect(() => {
       if(isLargerThan600){
         setFontsize("20px")
         settitle("30px")
         setLineheigth("35px")
       }else{
          setFontsize("14px")
          settitle("20px")
          setLineheigth("25px")
        }
     
    },[isLargerThan600]);


    return(
      <Box
      marginBottom={"50px"}
      >
      <Flex
      flexDirection={"column"}
      alignItems={"center"}
      marginBottom={"20px"}
      >
      <Text
      fontSize={title}
      fontWeight={"bold"}
      w={"90%"}
      marginLeft={"10%"}
      >{element.title}</Text>

      <Box
      lineHeight={lineHeight}
      w={"80%"}
      fontSize={fontsize}
      >
      {element.text}
      </Box>

      </Flex>
      <>
        <Flex
         justifyContent={"center"}
         >
          <Box
            w={"90%"}
          >
          <Flex
           justifyContent={"space-between"}
           flexDirection={"column"}
           h={"90%"}
           padding={"10px"}
          >
          {curso.map(e=>{

            if(isLargerThan600){
             return(
               <>
                
               <CardCursos element={e} key={e.id}></CardCursos>
               </>
             )
            }else{
            return( <CardCursoMobile element={e} key={e.id}></CardCursoMobile>)
             }
         })}
          </Flex>
            
            
          </Box>
        </Flex>

        </>
      
      </Box>
    
        )

};
  export default CardInfo;
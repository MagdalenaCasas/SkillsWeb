import React from "react";
import { Box ,Flex} from '@chakra-ui/react'
import { useContext, useState} from "react"
import { AcademiaContext } from '../../context/context';
import Card from "./Card"

import FormExamenes from "../Form/FormExamenes";
const ExamenesDesktop = () => {
  
  const {infoExamenes}= useContext(AcademiaContext);

    return(

        <>
        <Flex
        justifyContent={"center"}
        >
          <Box
          >
            <Card element={infoExamenes}></Card>

          </Box>
        </Flex>

        <FormExamenes></FormExamenes>

        </>
    
        )

};
  export default ExamenesDesktop;
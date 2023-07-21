import React from "react";
import { Box ,Flex} from '@chakra-ui/react'
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import Card from "./Card"

import FormExamenes from "../Form/FormExamenes";
const ExamenesDesktop = () => {
  const direction ="row"
  const {infoExamenes}= useContext(AcademiaContext);

    return(

        <>
        <Flex
        justifyContent={"center"}
        >
          <Box
          >
            <Card element={infoExamenes} direction={direction}></Card>

          </Box>
        </Flex>

        <FormExamenes></FormExamenes>

        </>
    
        )

};
  export default ExamenesDesktop;
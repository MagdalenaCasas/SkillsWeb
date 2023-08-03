import React from "react";
import { Box } from '@chakra-ui/react'
import ExamenesResponsive from "../components/Examenes/ExamenesResponsive";


const Examenes = () => {

  
    return (
      <>
      <Box
      w={"100%"}
      paddingTop={"20%"}
      className="fade tipo"
      >
      <ExamenesResponsive></ExamenesResponsive>
      </Box>
      </>
    );
  };
  export default Examenes;
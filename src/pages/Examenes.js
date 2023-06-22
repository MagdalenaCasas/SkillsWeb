import React from "react";
import { Box } from '@chakra-ui/react'
import ExamenesDesktop from "../components/Examenes/ExamenesDesktop";
import ExamenesResponsive from "../components/Examenes/ExamenesResponsive";

const Examenes = () => {

  
    return (
      <Box
      w={"100%"}
      paddingTop={"20%"}
      >
      <ExamenesResponsive></ExamenesResponsive>
      </Box>
    );
  };
  export default Examenes;
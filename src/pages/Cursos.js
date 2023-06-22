import React, { useState, useEffect } from "react";

import { Box } from '@chakra-ui/react'
import CursosDesktop from "../components/Cursos/CursosDesktop";

const Cursos = () => {

  
    return (
     <>
     <Box
     w={"100%"}
     paddingTop={"20%"}
     >
      <CursosDesktop></CursosDesktop>
     </Box>
     </>
    );
  };
  export default Cursos;
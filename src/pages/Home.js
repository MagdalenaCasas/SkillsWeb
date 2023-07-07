import React, { useState, useEffect } from "react";
import HomeResponsive from "../components/Home/HomeResponsive";
import { Fade, ScaleFade, Slide, SlideFade, Box } from '@chakra-ui/react'

const HomePage = () => {

  
    return (
     <Box className="fade tipo">
       <HomeResponsive></HomeResponsive>
     </Box>
    );
  };
  export default HomePage;
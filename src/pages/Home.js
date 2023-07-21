import React, { useContext} from "react";
import HomeResponsive from "../components/Home/HomeResponsive";
import Metatags from '../components/Metatags'
import { Box } from '@chakra-ui/react'
import { AcademiaContext } from "../context/context";


const HomePage = () => {
  const {metatags}= useContext(AcademiaContext);
  
    return (
      <>
      <Metatags title={metatags.titleHome} description={metatags.description}></Metatags>
     <Box className="fade tipo">
       <HomeResponsive></HomeResponsive>
     </Box>
      </>
    );
  };
  export default HomePage;
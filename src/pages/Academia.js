import React, { useContext} from "react";
import { Box } from '@chakra-ui/react'
import AcademiaResponsive from "../components/Academia/AcademiaResponsive";
import Metatags from '../components/Metatags'
import { AcademiaContext } from "../context/context";
const Academia = () => {
  const {metatags}= useContext(AcademiaContext);
  
  
    return (
      <>
      <Metatags title={metatags.titleNosotros} description={metatags.description}></Metatags>
     <Box
     w={"100%"}
     paddingTop={"20%"}
     className="fade tipo"
     >
      <AcademiaResponsive></AcademiaResponsive>
     </Box>
      </>
    );
  };
  export default Academia;
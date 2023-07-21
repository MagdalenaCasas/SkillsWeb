import React, { useContext} from "react";
import { Box } from '@chakra-ui/react'
import ExamenesResponsive from "../components/Examenes/ExamenesResponsive";
import Metatags from '../components/Metatags'
import { AcademiaContext } from "../context/context";

const Examenes = () => {
  const {metatags}= useContext(AcademiaContext);
  
    return (
      <>
      <Metatags title={metatags.titleExamenes} description={metatags.description}></Metatags>
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
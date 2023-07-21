import React, { useContext} from "react";
import { Box } from '@chakra-ui/react'
import CursosDesktop from "../components/Cursos/CursosDesktop";
import Metatags from '../components/Metatags'
import { AcademiaContext } from "../context/context";


const Cursos = () => {
 const {metatags}= useContext(AcademiaContext);
  
  
    return (
     <>
     <Metatags title={metatags.titleCursos} description={metatags.description}></Metatags>
     <Box
     w={"100%"}
     paddingTop={"20%"}
     className="cursos fade tipo"
     >
      <CursosDesktop></CursosDesktop>
     </Box>
     </>
    );
  };
  export default Cursos;
import React, {useContext} from "react";
import ContactResponsive from "../components/Contacto/ContactResponsive";
import { Box } from '@chakra-ui/react'
import Metatags from '../components/Metatags'
import { AcademiaContext } from "../context/context";




const Contacto = () => {
  const {metatags}= useContext(AcademiaContext);
    return (
      <>
       <Metatags title={metatags.titleContacto} description={metatags.description}></Metatags>
     <Box
     className="fade tipo"
     >
        <ContactResponsive></ContactResponsive>
     </Box>
      </>
    );
  };
  export default Contacto;
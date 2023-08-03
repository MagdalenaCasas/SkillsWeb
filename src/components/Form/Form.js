import React, {useState, useRef,} from "react";
import { Formik, Form, Field }from "formik";
import {Flex, Input,Button,Text,Textarea} from '@chakra-ui/react';
import { Grid, GridItem,} from '@chakra-ui/react'
import * as yup from "yup";
import KErrorMessage from "./KErrorMessage";
import { confirmation } from '../../alerts/index';
import { errorMsg} from '../../alerts/index';
import emailjs from "@emailjs/browser";

const validationSchema = yup.object({
  name: yup
  .string()
  .required("Por favor ingresa el nombre"),

  lastName : yup
  .string()
  .required("Por favor ingresa el apellido"),

  phone: yup
  .string()
  .required("Por favor ingresa el teléfono"),

  email: yup
  .string()
  .required("Por favor ingresa el email")
  .email("por favor ingresa un email valido"),

  message: yup
    .string()
    .required("Por favor ingresa el mensaje")


  
}); 


const FormularioPrueba = () =>{ 
    const [loading, setLoading] =useState(false)
    const form = useRef()
    const sendEmail = () => {
    
        emailjs.sendForm('service_mc3qptc', 'template_nw4p8or', form.current, 'ca79kyCGdd9UmSNLG')
          .then((result) => {
              console.log(result.text);
              confirmation('tu consulta ha sido enviadda con exito éxito.');
              setLoading(false);
          }, (error) => {
              console.log(error.text);
              errorMsg( 'No pudimos enviar tu consulta, por favor intenta nuevamente o comunicate con nosotros a nuesto numero de WhatsApp');
              setLoading(false);
          }).then(()=>{
              setTimeout(() => {
                window.location.reload()
              }, 1000);
          });
      };


  const values = () =>{

    return {
        name: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    }
    
  }


    return(    
        <Flex
        flexDirection={"column"}
        >
        <Formik
          validationSchema={validationSchema}
          initialValues={
            values()
          }

          onSubmit={() => {
              setLoading(true)
              sendEmail();
          }}
        >
          {() => (
            <Flex as={Form}
            ref={form}
            marginTop={"3%"}
            className="form"
            flexDirection={"column"}
            alignItems={"center"}
            width={"100%"}
            h={"100%"}
            fontSize={"13px"}
            >
                <Text
                fontSize={"16px"}
                fontWeight={"bold"}
                color={"#bb2423"}
                > También podés dejarnos tu mensaje</Text>

       <Grid templateColumns='repeat(2, 1fr)' gap={6} columnGap={50} w={"80%"}>
       <GridItem  align={"center"}>
        <Flex
        flexDirection={"column"}
        >

          <Text margin={0} w={"100%"} textAlign={"left"}> Nombre</Text>
          <Field as={Input}
          h={"20px"}
          w={"100%"}
          type = "text"
          name= "name"
          />
          <KErrorMessage name="name"/>
        </Flex>
       </GridItem>
       <GridItem align={"center"}>
        <Flex
        flexDirection={"column"}
        >

         <Text margin={0} alignSelf={"flex-start"} w={"100%"} textAlign={"left"}> Apellido</Text> 
          <Field as={Input}
          h={"20px"}
          w={"100%"}
          type = "text"
          name= "lastName"
          />
          <KErrorMessage name="lastName"/>
        </Flex>
        </GridItem>

       <GridItem  align={"center"}>
        <Flex
        flexDirection={"column"}
        >

           <Text margin={0} alignSelf={"flex-start"}w={"100%"} textAlign={"left"}> Teléfono</Text>
            <Field as={Input}
            h={"20px"}
            w={"100%"}
            type = "text"
            name= "phone"
            />
            <KErrorMessage name="phone"/>
        </Flex>
       </GridItem>
       <GridItem  align={"center"}>
            <Flex
            flexDirection={"column"}
            >
            <Text margin={0} alignSelf={"flex-start"} w={"100%"}textAlign={"left"}> Email</Text>
            <Field as={Input}
            h={"20px"}
            w={"100%"}
            type = "email"
            name= "email"
            />
            <KErrorMessage name="email"/>

            </Flex>
       </GridItem>
                 </Grid>
   


               <Text margin={0} w={"80%"}> Mensaje</Text>
               <Field as={Textarea}
                w={"80%"}
                h={"10vh"}
                type = "text"
                name= "message"
                />
                <KErrorMessage name="message"/>

              <Button 
              background={"#bb2423"}
              w={"80%"}
              h={"4vh"}
              color={"white"}
              border={"none"}
              isLoading={loading}
              type="submit">Enviar</Button>
            </Flex>
          )}
        </Formik>
      </Flex>
    )
}

export default FormularioPrueba
import React, {useState, useRef,} from "react";
import { Formik, Form, Field }from "formik";
import {Flex, Input,Button,Text,Textarea,Box} from '@chakra-ui/react';
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


  email: yup
  .string()
  .required("Por favor ingresa el email")
  .email("por favor ingresa un email valido"),

  message: yup
    .string()
    .required("Por favor ingresa el mensaje")


  
}); 


const FormExamenes = () =>{ 

    const [loading, setLoading] =useState(false)
    const form = useRef()


    const sendEmail = () => {
    
        emailjs.sendForm('service_mehkolc', 'template_qjfohbs', form.current, 'qn8kY7IlwwgeLhLvp')
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
        email: "",
        message: ""
    }
    
  }


    return(    
        <Flex
        flexDirection={"column"}
        marginBottom={"10%"}
        >
        <Formik
          validationSchema={validationSchema}
          initialValues={
            values()
          }

          onSubmit={(values) => {
              let valores ={
                  name:values.name,
                  lasName: values.lastName,
                  email: values.email,
                  message: values.message
              }
              console.log(valores)
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
                fontSize={["20px","20px","24px"]}
                fontWeight={"bold"}
                margin={0}
                marginBottom={"1%"}
                > ¿Querés saber más sobre los exámenes?</Text>
                <Box
                marginBottom={"5%"}
                >
                Dejanos tu consulta y te contactamos para asesorarte:
                </Box>
                <Flex>

                <Flex
                flexDirection={"column"}
                marginRight={10}
                >
                <label htmlFor="name"> Nombre</label>
                <Field as={Input}
                type = "text"
                name= "name"
                border={"none"}
                borderBottom={"1px solid"}
                h={"50%"}
                />
                <KErrorMessage name="name"/>
                </Flex>

                <Flex
                flexDirection={"column"}
                marginRight={10}
                >

                <label htmlFor="lastName"> Apellido</label>
                <Field as={Input}
                type = "text"
                name= "lastName"
                border={"none"}
                borderBottom={"1px solid"}
                h={"50%"}
                />
                <KErrorMessage name="lastName"/>
                </Flex>

                <Flex
                marginRight={10}
                flexDirection={"column"}
                >
                <label htmlFor="email"> Email</label>
               <Field as={Input}
                type = "email"
                name= "email"
                border={"none"}
                borderBottom={"1px solid"}
                h={"50%"}
                />
                <KErrorMessage name="email"/>
                </Flex>

               <Flex
                flexDirection={"column"}
                >

               <label> Mensaje</label>
               <Field as={Textarea}
                type = "text"
                name= "message"
                border={"none"}
                borderBottom={"1px solid"}
                />
                <KErrorMessage name="message"/>
                </Flex>

              <Flex
              alignItems={"center"}
              >

              <Button 
              w={"10vw"}
              h={"4vh"}
              background={"#bb2423"}
              color={"white"}
              border={"none"}
              isLoading={loading}
              type="submit">Enviar</Button>
              </Flex>


                </Flex>
            </Flex>
          )}
        </Formik>
      </Flex>
    )
}

export default FormExamenes
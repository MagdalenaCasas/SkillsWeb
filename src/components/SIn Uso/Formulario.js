import React, { useRef, useState,} from 'react';
import { ErrorMessage, Field, Form, FormikProvider, setNestedObjectValues, useFormik } from 'formik';
import { Flex, Input, Button, Stack, Text, Textarea } from '@chakra-ui/react';
import { confirmation } from '../../alerts/index';
import { errorMsg} from '../../alerts/index';
import emailjs from "@emailjs/browser";
import * as Yup from 'yup';
import LoaderSpinner from '../LoaderSpinner';




function ContactForm(){
 const [loading, setLoading] =useState(false)
  const form = useRef();


  const sendEmail = () => {

    emailjs.sendForm('service_mehkolc', 'template_qjfohbs', form.current, 'qn8kY7IlwwgeLhLvp')
      .then((result) => {
          console.log(result.text);
          confirmation('Tu consulta ha sido enviada con éxito.');
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

    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      phone:"",
      comentarios: "",
    };
  
  
    const validationSchema = Yup.object({
      firstName: Yup
      .string()
      .matches(/^[A-Za-z ]*$/, '')
      .required('Por favor escribe tu nombre'),
      
      lastName: Yup
      .string()
      .matches(/^[A-Za-z ]*$/, '')
      .required('Por favor escribe tu apellido'),

      phone: Yup
      .number()
      .required(" Por favor escribe tu número de teléfono"),

      email: Yup
      .string()
      .required("Por favor escribe tu email")
      .email(),
      comentario: Yup
      .string()
      .required("Por favor déjanos tu consulta")
    });
  
    const onSubmit = (e) => {
      e.preventDefault()
      setLoading(true);
      sendEmail();
    };
  
 
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });
  
    if (loading) return <LoaderSpinner></LoaderSpinner>
    return (
        <FormikProvider value={formik}>
          <Flex
            as={Form}
            ref={form}
            id= "form"
            className="form"
            flexDirection={'column'}
            gap={'20px'}
            width={'520px'}
            maxWidth={'90%'}
            mt={'3%'}
            mb={'10%'}
            boxShadow="dark-lg"
            rounded="ms"
            bg="white"
            p={'2rem'}
          >
            <Flex fontWeight={'bold'} fontSize={'24px'}>
              {`Contactanos`}
            </Flex>
    
            <Flex
             flexDirection={'column'}
            >
              <label htmlFor="firstName">Nombre</label>
              <Field as={Input}
              id="nombre" 
              type="text" 
              name="firstName"
               />
              <Text color="red">
                <ErrorMessage name="firstName" />
              </Text>
            </Flex>
    
            <Flex
            flexDirection={'column'}
            >
              <label htmlFor="lastName">Apellido</label>
              <Field as={Input} 
              id="apellido" 
              type="text" 
              name="lastName" />
              <Text color="red">
                <ErrorMessage name="lastName" />
              </Text>
            </Flex>

            <Flex
            flexDirection={'column'}
            >
              <label htmlFor="phone">Teléfono</label>
              <Field as={Input} 
              id="phone" 
              type="number" 
              name="phone" />
              <Text color="red">
                <ErrorMessage name="phone" />
              </Text>
            </Flex>

            <Flex
            flexDirection={'column'}
            >
              <label htmlFor="email">Email</label>
              <Field as={Input} 
              id="email" 
              type="text" 
              name="email" />
              <Text color="red">
                <ErrorMessage name="email" />
              </Text>
            </Flex>

            <Flex
            flexDirection={'column'}
            >
              <label htmlFor="comentario">Escribe tu consulta</label>
              <Field as={Textarea} 
              height={"80px"}
              id="comentario" 
              type="text" 
              name="comentario" />
              <Text color="red">
                <ErrorMessage name="comentario" />
              </Text>
            </Flex>
            <Button
            width={"20%"}
            height={"5vh"}
            marginLeft={"80%"}
            background={"blue"}
            color={"white"}
            borderRadius={"20px"}
            type="submit"
            onClick={(e)=>{onSubmit(e)}}
            >
              Enviar
            </Button>    
      </Flex>
        </FormikProvider>
      );


}

export default ContactForm;
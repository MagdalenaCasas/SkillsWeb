import React from 'react';
import HomePage from "./Home";
import AcademiaPage from "./Academia";
import CursosPage from "./Cursos";
import ExamenesPage from "./Examenes";
import ContactPage from "./Contacto"

export const Home = ()=>{
    return <HomePage />
}

export const Academy = ()=>{
    return <AcademiaPage />
}
export const Courses = ()=>{
    return <CursosPage />
}

export const Exam= ()=>{
    return <ExamenesPage />
}
export const Contact= ()=>{
    return <ContactPage />
}
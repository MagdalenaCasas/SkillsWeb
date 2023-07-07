import { createContext, useState} from "react";
import whatsappIcon from "../Imagenes/whatsapp.png";
import locationIcon from "../Imagenes/location.png";
import emailIcon from "../Imagenes/email.png";
import clockIcon from "../Imagenes/clock.png";
import ImagenCarrouselHome1 from "../Imagenes/carrousel1.png"
import ImagenCarrouselHome2 from "../Imagenes/carrousel2.png"
import ImagenCarrouselHome3 from "../Imagenes/carrousel3.png"
import ImageCarrouselMobile1 from "../Imagenes/carrouselWeb1.png"
import ImageCarrouselMobile2 from "../Imagenes/carrouselWeb2.png"
import ImageCarrouselMobile3 from "../Imagenes/carrouselWeb33.png"
import Kiddies from "../Imagenes/Kiddies2.png"
import Kids from "../Imagenes/Kids2.png"
import Olders from "../Imagenes/Olders2.png"
import Seniors from "../Imagenes/Seniors2.png"
import Intermidiate from "../Imagenes/Intermidiate2.png"
import KiddiesMb from "../Imagenes/KiddiesMb.png"
import KidsMb from "../Imagenes/KidsMb.png"
import OldersMb from "../Imagenes/OldersMb.png"
import SeniorsMb from "../Imagenes/SeniorsMb.png"
import IntermidiateMb from "../Imagenes/IntermediateMb.png"
import Preliminary from "../Imagenes/Preliminary.png"
import PreFce from "../Imagenes/PreFce.png"
import Fce from "../Imagenes/Fce.png"



export const AcademiaContext = createContext()

export const AcademiaContextProvider = ({children})=>{

const verde = "#00522e"
const rojoTipografia= "#bb2423"
const [carrousel, setCarrousel] = useState([]);


/** DATOS DEL FOOTER */
const titleFooter = [
        {
          id :1,
          gridRow: "1",
          fontWeigth: "bold",
          color: "#d27d7c",
          text: "NAVEGACIÓN RÁPIDA",
        },
        {
          id :2,
          gridRow: "1",
          fontWeigth: "bold",
          color: "#d27d7c",
          text: "CONÉCTATE",
          
      
        },
        {
          id :3,
          gridRow: "1",
          fontWeigth: "bold",
          color: "#d27d7c",
          text: "CONTÁCTANOS",
          
      
        },
]
const datos = [
  {
    id :1,
    gridRow: "2",
    textDecoration: "none",
    color: "white",
    text: "Academia",
    href: './academia'
  },
  {
    id :2,
    gridRow: "2",
    textDecoration: "none",
    color: "white",
    text: "Facebook",
    href: 'https://www.facebook.com/Skillsinstitute'

  },
  {
    id :3,
    gridRow: "2",
    textDecoration: "none",
    color: "white",
    text: "Av Elías Yofre 1079",
    href: '#'

  },
  {
    id :4,
    gridRow: "3",
    textDecoration: "none",
    color: "white",
    text: "Examenes",
    href: './examenes'
  },
  {
    id :5,
    gridRow: "3",
    textDecoration: "none",
    color: "white",
    text: "WhatsApp",
    href: 'https://wa.me/message/6UZBQXQCSJLVD1'

  },
  {
    id :6,
    gridRow: "3",
    textDecoration: "none",
    color: "white",
    text: "Paseo del Jockey",
    href: '#'

  },
  {
    id :7,
    gridRow: "4",
    textDecoration: "none",
    color: "white",
    text: "Noticias",
    href: '#'
  },
  {
    id :8,
    gridRow: "4",
    textDecoration: "none",
    color: "white",
    text: "Instagram",
    href: 'https://www.instagram.com/skillsenglishinstitute/'

  },
  {
    id :9,
    gridRow: "4",
    textDecoration: "none",
    color: "white",
    text: "Córdoba, Argentina",
    href: '#'

  },
  {
    id :10,
    gridRow: "5",
    textDecoration: "none",
    color: "white",
    text: "Contacto",
    href: './contacto'
  },
  {
    id :11,
    gridRow: "5",
    textDecoration: "none",
    color: "white",
    text: "",
    href: '#'

  },
  {
    id :12,
    gridRow: "5",
    textDecoration: "none",
    color: "white",
    text: "skills@skillsedu.com.ar",
    href: '#'

  }
]


/** DATOS DEL NAV */
const menuItem = [
    { 
      id:1,
      text: "Inicio",
      color: "white",
      textdecoration: "none",
      background: "none",
      border: "none",
      href: "./"
    },
    { 
      id:2,
      text: "Academia",
      color: "white",
      textdecoration: "none",
      background: "none",
      border: "none",
      href: "./academia"
    },
    { 
      id:3,
      text: "Cursos",
      color: "white",
      background: "none",
      textdecoration: "none",
      border: "none",
      href: "./cursos"
    },
    { 
      id:4,
      text: "Exámenes",
      color: "white",
      background: "none",
      textdecoration: "none",
      border: "none",
      href: "./examenes"
    },
    { 
      id:5,
      text: "Contacto",
      color: "white",
      background: "none",
      textdecoration: "none",
      border: "none",
      href: "./contacto"
    }
]

/** DATOS DE LA CARD VERDE DE LA PAGINA CONTACTO */
const contact = [
  {
    title: "MAIL",
    value: "skills@skillsedu.com.ar",
    color:"white",
    src: "email",
    img: emailIcon
  },
  {
    title: "WHATSAPP",
    value: "3512003096",
    color:"white",
    src: "whatsApp",
    img: whatsappIcon
  },
  {
    title: "HORARIOS",
    value: "Durante el periodo escolar, las oficinas están abiertas desde",
    color:"white",
    src: "horarios",
    img: clockIcon
  },
  {
    title: "DIRECCIÓN",
    value: "Av. Elías Yofre 1079 y Paseo del Joackey Córdoba, Argentina.",
    color:"white",
    src: "direccion",
    img: locationIcon
  }
]

/** DATOS DEL HOME */
const cursosAdultos = {
  title: "Cursos para adultos",
  value: `Están pensados para alumnos de 18 años en adelante. Si los alumnos vienen con conocimientos previos del idioma se los evalúa para poder ubicarlos en el curso correcto.`,
  href:"#"
 }

 const cursosAdolescentes =
 {
   title: "Cursos para niños y adolescentes",
   value: `Ofrecemos cursos de "Kiddies " para pre escolares y niños de 1er grado que aún no tienen la lecto escritura incorporada.
   A partir de segundo grado, los niños pueden asistir a los cursos regulares
   Los cursos se ofrecen de acuerdo a la edad y el conocimiento de los alumnos.`,
   href:"#"
 
 }
 const slideData = [
  {
    image: ImagenCarrouselHome1,
    imageMobile:ImageCarrouselMobile1,


  },
  {
    image:ImagenCarrouselHome2,
    imageMobile:ImageCarrouselMobile2,
  },
  {
      image:ImagenCarrouselHome3,
      imageMobile:ImageCarrouselMobile3,
  }
];

const  CarrouselData = async ()=>{
  const response = await fetch(`https://895165427322522:JLTxdNoO3tIiL88UWmcAcF5tgIE@api.cloudinary.com/v1_1/djn959kbs/resources/image`);
  const content = await response.json();
  const data = content

  setCarrousel(data)
 }


/** DATOS DE PAGINA CURSOS */


const Cursos=[
  {
    id: 1,
    title: "Cursos regulares",
    text: `Nuestros cursos se dictan dos veces por semana 1 hora y media cada clase. En esta hora y media se trabajan las 4 habilidades de la lengua: habla , comprensión oral, lectura y escritura.

    Estos cursos son para niños/adolescentes. Durante el cursado se les brinda a los alumnos actividades introductorias a los exámenes para rendir en años posteriores. A partir de los 12 años aproximadamente, pueden rendir FLYERS.
    `,
    cards:[
      { id: 1,
        titulo: "KIDDIES",
        image:Kiddies,
        imageMobile:KiddiesMb
      },
      { id: 2,
        titulo: "Kids 1, 2, 3 y 4",
        image:Kids,
        imageMobile:KidsMb
      },
      { id: 3,
        titulo: "Olders 1,2,3 y 4",
        image:Olders,
        imageMobile:OldersMb
      },
      { id: 4,
        titulo: "Seniors 1, 2 y 3",
        image:Seniors,
        imageMobile:SeniorsMb
      },
      { id: 5,
        titulo: "Intermediate",
        image:Intermidiate,
        imageMobile:IntermidiateMb
      },]
  },
  {
    id: 2,
    title: "Cursos Especiales",
    text: `Estos cursos son para alumnos de entre 14 a 17 años de edad aproximadamente. La carga horaria en aula es de 3 horas semanales divididas en una hora y media dos días a la semana. Durante el cursado, se prepara a los alumnos para rendir algún examen internacional, ya sea PET o FCE o algún otro similar.
    `,
    cards:[
      { id: 1,
        titulo: "PRELIMINARY (B1)",
        image:Preliminary,
        imageMobile:""
      },
      { id: 2,
        titulo: "Pre FCE ( B1+)",
        image:PreFce,
        imageMobile:""
      },
      { id: 3,
        titulo: "FCE ( B2 )",
        image:Fce,
        imageMobile:""
      },
    ]
  },
  {
    id: 3,
    title: "Cursos para adultos",
    text: ` En estos cursos no se prepara a los alumnos para ningún examen internacional y están pensados para alumnos de 18 años en adelante. La carga horaria en el aula es de 2 horas semanales en un mismo día.
    `,
    cards:[]
  }

]







  /**DATOS PAGINA EXAMENES */
  const infoExamenes ={
    id: 2,
    title: "Exámenes internacionales",
    text: `Preparamos y ofrecemos a nuestro alumnado que rindan en diferentes instancias los exámenes de la Universidad de Cambrigde.Todos los cursos que ofrecemos en Skills se dictan de manera presencial.`,
    text2:`El 95% de nuestros alumnos aprobaron los exámenes de Cambridge. Logramos en 3 hs lo que en otras instituciones necesitan en más horas de cursado.
    Optimizamos el tiempo de nuestros alumnos y nuestro compromiso es ininterrumpido.`
  }




 return <AcademiaContext.Provider value={{titleFooter,datos, menuItem, 
 contact, verde, rojoTipografia, cursosAdolescentes, cursosAdultos,slideData,Cursos, infoExamenes, CarrouselData,}}>
                                           
    {children}
    </AcademiaContext.Provider>
}

import { createContext} from "react";
import whatsappIcon from "../Imagenes/whatsapp.png";
import locationIcon from "../Imagenes/location.png";
import emailIcon from "../Imagenes/email.png";
import clockIcon from "../Imagenes/clock.png";
import ImagenCarrouselHome1 from "../Imagenes/carrousel1.png"
import ImagenCarrouselHome2 from "../Imagenes/carrousel2.png"
import ImagenCarrouselHome3 from "../Imagenes/carrousel33.png"
import ImageCarrouselMobile1 from "../Imagenes/carrouselWeb1.png"
import ImageCarrouselMobile2 from "../Imagenes/carrouselWeb2.png"
import ImageCarrouselMobile3 from "../Imagenes/carrouselWeb33.png"
import Kiddies from "../Imagenes/Kiddies2.png"
import Kids from "../Imagenes/Kids2.png"
import Olders from "../Imagenes/Olders2.png"
import Seniors from "../Imagenes/Seniors2.png"
import Intermidiate from "../Imagenes/Intermediate2.png"
import KiddiesMb from "../Imagenes/KiddiesMb.png"
import KidsMb from "../Imagenes/KidsMb.png"
import OldersMb from "../Imagenes/OldersMb.png"
import SeniorsMb from "../Imagenes/SeniorsMb.png"
import IntermidiateMb from "../Imagenes/IntermediateMb.png"
import Preliminary from "../Imagenes/Preliminary.png"
import PreliminaryMb from "../Imagenes/PreliminaryMb.png"
import FlyersMb from "../Imagenes/FlyersMb.png"
import Fce from "../Imagenes/Fce.png"
import Ielts from "../Imagenes/Ielts.png"
import Flyers from "../Imagenes/Flyers.png"
import FceMb from "../Imagenes/FceMb.png"
import IeltsMb from "../Imagenes/IeltsMb.png"




export const AcademiaContext = createContext()

export const AcademiaContextProvider = ({children})=>{

const verde = "#00522e"
const rojoTipografia= "#bb2423"



/** DATOS DEL FOOTER */
const titleFooter = [
        {
          id :1,
          gridRow: "1",
          fontWeigth: "bold",
          color: "white",
          text: "NAVEGACIÓN RÁPIDA",
        },
        {
          id :2,
          gridRow: "1",
          fontWeigth: "bold",
          color: "white",
          text: "CONECTATE",
          
      
        },
        {
          id :3,
          gridRow: "1",
          fontWeigth: "bold",
          color: "white",
          text: "ENCONTRANOS",
          
      
        },
]
const datos = [
  {
    id :1,
    gridRow: "2",
    textDecoration: "none",
    color: "white",
    text: "¿Quiénes somos?",
    href: './academia',
    target: ''
  },
  {
    id :2,
    gridRow: "2",
    textDecoration: "none",
    color: "white",
    text: "Facebook",
    href: 'https://www.facebook.com/Skillsinstitute',
    target: '_blank'

  },
  {
    id :3,
    gridRow: "2",
    textDecoration: "none",
    color: "white",
    text: "Av Elías Yofre 1079",
    href: '#',
    target: ''

  },
  {
    id :4,
    gridRow: "3",
    textDecoration: "none",
    color: "white",
    text: "Exámenes",
    href: './examenes',
    target: ''
  },
  {
    id :5,
    gridRow: "3",
    textDecoration: "none",
    color: "white",
    text: "WhatsApp",
    href: 'https://wa.me/message/6UZBQXQCSJLVD1',
    target: '_blank'

  },
  {
    id :6,
    gridRow: "3",
    textDecoration: "none",
    color: "white",
    text: "Paseo del Jockey",
    href: '#',
    target: ''

  },
  {
    id :7,
    gridRow: "4",
    textDecoration: "none",
    color: "white",
    text: "Cursos",
    href: './cursos',
    target: ''
  },
  {
    id :8,
    gridRow: "4",
    textDecoration: "none",
    color: "white",
    text: "Instagram",
    href: 'https://www.instagram.com/skillsenglishinstitute/',
    target: '_blank'

  },
  {
    id :9,
    gridRow: "4",
    textDecoration: "none",
    color: "white",
    text: "Córdoba, Argentina",
    href: '#',
    target: ''

  },
  {
    id :10,
    gridRow: "5",
    textDecoration: "none",
    color: "white",
    text: "Contacto",
    href: './contacto',
    target: ''
  },
  {
    id :11,
    gridRow: "5",
    textDecoration: "none",
    color: "white",
    text: "LinkedIn",
    href: 'https://www.linkedin.com/company/skillsenglishinstitute/',
    target: '_blank'

  },
  {
    id :12,
    gridRow: "5",
    textDecoration: "none",
    color: "white",
    text: "skills@skillsedu.com.ar",
    href: '#',
    target: ''

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
      href: "./",
      target: ''
    },
    { 
      id:2,
      text: "¿Quiénes somos?",
      color: "white",
      textdecoration: "none",
      background: "none",
      border: "none",
      href: "./academia",
      target: ''
    },
    { 
      id:3,
      text: "Cursos",
      color: "white",
      background: "none",
      textdecoration: "none",
      border: "none",
      href: "./cursos",
      target: ''
    },
    { 
      id:4,
      text: "Exámenes",
      color: "white",
      background: "none",
      textdecoration: "none",
      border: "none",
      href: "./examenes",
      target: ''
    },
    { 
      id:5,
      text: "Contacto",
      color: "white",
      background: "none",
      textdecoration: "none",
      border: "none",
      href: "./contacto",
      target: ''
    },
    { 
      id:6,
      text: "Sumate al staff",
      color: "white",
      background: "none",
      textdecoration: "none",
      border: "none",
      href: "https://forms.gle/8DdqiZSTjQaHsMHw7",
      target: '_blank'
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
    value: "3512003096 - (0351) 4647387",
    color:"white",
    src: "whatsApp",
    img: whatsappIcon
  },
  {
    title: "HORARIOS",
    value: "Desde febrero a diciembre, las oficinas están abiertas de 14:30hs a 19:00hs",
    color:"white",
    src: "horarios",
    img: clockIcon
  },
  {
    title: "DIRECCIÓN",
    value: "Av. Elías Yofre 1079 y Paseo del Jockey Córdoba, Argentina.",
    color:"white",
    src: "direccion",
    img: locationIcon
  }
]

/** DATOS DEL HOME */
const cursosAdultos = {
  title: "Cursos para adultos",
  value: `Nunca es tarde para empezar o retomar tus clases de inglés. Estos cursos están pensados para mayores de 18 años con o sin conocimiento previo.`,
  href:"#"
 }

 const cursosAdolescentes =
 {
   title: "Cursos para niños y adolescentes",
   value: `Ofrecemos cursos a niños a partir de 2do grado. Los niños y adolescentes pueden asistir a los cursos regulares que
   se ofrecen de acuerdo a la edad y el conocimiento de los alumnos.`,
   href:"#"
 
 }

  const cursosKiddies =
 {
   title: "Cursos para Preescolares/Kiddies",
   value: `Ofrecemos cursos de "Kiddies" para preescolares y niños de 1er grado que aún no tienen la lecto escritura incorporada.`,
   href:"#"
 
 }

 const slideData = [
  {
    id:1,
    image: ImagenCarrouselHome1,
    imageMobile:ImageCarrouselMobile1,


  },
  { id:2,
    image:ImagenCarrouselHome2,
    imageMobile:ImageCarrouselMobile2,
  },
  {   id:3,
      image:ImagenCarrouselHome3,
      imageMobile:ImageCarrouselMobile3,
  }
];


/** DATOS DE PAGINA CURSOS */


const Cursos=[
  {
    id: 1,
    title: "Cursos regulares",
    text: `Estos cursos son para niños y adolescentes, y se dictan dos veces por semana, una hora y media cada clase. Durante el tiempo de cursado, trabajamos las cuatro habilidades de la lengua (habla, comprensión auditiva, lectura y escritura) y utilizamos herramientas tecnológicas para el dictado de clases.

     A su vez, le brindamos a nuestros alumnos la posibilidad de rendir exámenes de la universidad de Cambridge.
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
    title: "Cursos especiales",
    text: `Estos cursos son para alumnos entre 14 y 18 años de edad aproximadamente. La carga horaria de estos cursos es de tres horas semanales divididas en una hora y media, dos días a la semana. Durante el cursado, preparamos a nuestros alumnos para rendir exámenes de la universidad de Cambridge.
    `,
    cards:[
      { id: 1,
        titulo: "FLYERS",
        image:Flyers,
        imageMobile:FlyersMb
      },
      { id: 2,
        titulo: "PRELIMINARY (B1)",
        image:Preliminary,
        imageMobile:PreliminaryMb
      },
      { id: 3,
        titulo: "FCE ( B2 )",
        image:Fce,
        imageMobile:FceMb
      },
      { id: 4,
        titulo: "Ielts",
        image:Ielts,
        imageMobile:IeltsMb 
      },
    ]
  },
  {
    id: 3,
    title: "Cursos para adultos",
    text: ` Nunca es tarde para empezar. Estos cursos están pensados para alumnos de 18 años en adelante que quieran aprender o mejorar sus habilidades de inglés. Se dictan una vez por semana y cada clase tiene una duración de dos horas.
    Contamos con diferentes cursos tales como: básico, pre-intermedio, intermedio y cursos internacionales.
    `,
    cards:[]
  }

]







  /**DATOS PAGINA EXAMENES */
  const infoExamenes ={
    id: 2,
    title: "Exámenes internacionales",
    text: `Preparamos y ofrecemos a nuestro alumnado la posibilidad de rendir en diferentes instancias los exámenes de la Universidad de Cambridge. Optimizamos el tiempo de nuestros alumnos y nuestro compromiso es ininterrumpido.`,
    text2:`Destacamos el empeño del alumnado y de los docentes, que han logrado en diferentes años, los mejores resultados. Un total del 95% de nuestros alumnos han aprobado los exámenes de Cambridge, alguno incluso obteniendo los resultados más altos y siendo destacados por la universidad.
    `
  }


  /**   METATAGS */

  const metatags = {
    titleHome: "Skills - Instituto de inglés en Córdoba Argentina",
    titleNosotros: 'Nosotros -Skills English Institute',
    titleCursos:'Cursos -Skills English Institute',
    titleAcademia:'Nosotros -Skills English Institute',
    titleExamenes:'Exámenes -Skills English Institute',
    titleContacto:'Contacto -Skills English Institute',
    description : "Skills es un instituto de inglés situado en zona sur Córdoba, Argentina.",
    viewport: 'user-scalable=no, width=device-width, initial-scale=1',
    robots:'noindex',
    googlebots:'',
  }




 return <AcademiaContext.Provider value={{titleFooter,datos, menuItem, 
 contact, verde, rojoTipografia, cursosAdolescentes, cursosAdultos,cursosKiddies,slideData,Cursos, infoExamenes,metatags}}>
                                           
    {children}
    </AcademiaContext.Provider>
}

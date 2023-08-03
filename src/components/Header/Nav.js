import React,{ useContext } from 'react';
import { AcademiaContext } from '../../context/context';
import { useMediaQuery, UnorderedList, Flex  } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom'; 
import MenuHamburguesa from './Menu';
import '@fontsource/roboto';

function Nav() {
  // single media query with no options
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const { menuItem } = useContext(AcademiaContext);

  if (isLargerThan600) {
    return (
      <>
        <UnorderedList
          listStyleType={'none'}
          display={'flex'}
          background={'black'}
          height={'7vh'}
          w={'100vw'}
          paddingInlineStart={'0'}
          marginBlock={'0'}
          marginLeft={'0'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Flex height={'7vh'} alignItems={'center'} marginLeft={'5%'} w={'90vw'}>
            {menuItem.map((item) => {
              return (
                <NavLink // Utilizar NavLink en lugar de <a>
                  exact // Asegurarse de utilizar el atributo "exact" para que la clase activa se aplique correctamente
                  to={item.href} // Asegurarse de utilizar el atributo "to" en lugar de "href"
                  key={item.id}
                  style={{ textDecoration: 'none', color: 'white', marginRight: '10%' }}
                  activeStyle={{ fontWeight: 'semibold', color: '#bb2423' }} // Estilo activo para resaltar el enlace de la página actual
                >
                  {item.text}
                </NavLink>
              );
            })}
          </Flex>
        </UnorderedList>
      </>
    );
  } else {
    return <MenuHamburguesa></MenuHamburguesa>;
  }
}

export default Nav;

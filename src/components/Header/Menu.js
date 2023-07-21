import React from 'react';
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import { Flex, Button, Link } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'


function MenuHamburguesa(){
  const {menuItem}= useContext(AcademiaContext);


    const hamburguesa = ()=>{
        return(
            <MenuButton as={Button} rightIcon={<HamburgerIcon  boxSize={40}/>} border={"none"}background={"none"} color={"white"} />
        )
    }
    const close = ()=>{
        return(
            <MenuButton as={Button}rightIcon={<CloseIcon boxSize={40} color={"white"}/>}  background={"none"} border={"none"}/>
        )
    }


    return(
      <Flex
      justifyContent={"flex-end"}
      background={"black"}
      >
        <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} background={"none"} border={"none"}>
        {isOpen ? close(): hamburguesa()}
      </MenuButton>
      <MenuList
      background={"#bb2423"}
      width={"100vw"}
      zIndex={"5"}
      >
       {menuItem.map(item=>{return(
        <Flex
        w={"100%"}
        h={"20%"}
        key={item.id}
        >

       <MenuItem 

       background={item.background}
       border={item.border}
       color={item.color}
       paddingTop={"30px"}
       fontSize={"16px"}
       textAlign={"center"}
       >
        <Flex w={"40%"}></Flex>
        <Link 
        href={item.href}
        color={item.color}
        textDecoration={item.textdecoration}
        marginBottom={"5%"}
        >{item.text}</Link>
        </MenuItem>
        </Flex>
        
        )})}
          
      </MenuList>
     </>
          )}
     </Menu>

      </Flex>
 

    )
}

export default MenuHamburguesa;
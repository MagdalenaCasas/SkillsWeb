import React from 'react';
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import { useMediaQuery } from '@chakra-ui/react'
import {
    ListItem,
    UnorderedList,
    Flex
} from '@chakra-ui/react'
import MenuHamburguesa from './Menu';
import "@fontsource/roboto"


function Nav(){
  // single media query with no options
 const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
 const {menuItem}= useContext(AcademiaContext);

    if(isLargerThan600){
      return(
        <>
        <UnorderedList
        listStyleType={"none"}
        display={"flex"}
        background={"black"}
        height={"7vh"}
        w={"100vw"}
        paddingInlineStart={"0"}
        marginBlock={"0"}
        marginLeft={"0"}
        alignItems={"center"}
        justifyContent={"center"}
        >
          <Flex
          height={"7vh"}
          alignItems={"center"}
          marginLeft={"5%"}
          w={"90vw"}
          >

               {menuItem.map(item=>{return(
                 
                 <ListItem 
                 as={"a"} 
                 href={item.href}
                 textDecoration={"none"}
                 color={"white"}
                 marginRight={"10%"}
                 _hover={{ fontWeight: 'semibold',color:"#bb2423" }}
                 >{item.text}</ListItem>
          )})} 
          </Flex>
               
         </UnorderedList> 
   
       </>
      )
    }else{
      return(
        <MenuHamburguesa></MenuHamburguesa>
      )
    }


}

export default Nav;
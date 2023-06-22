import React from 'react';
import { useContext} from "react"
import { AcademiaContext } from '../../context/context';
import { useMediaQuery } from '@chakra-ui/react'
import {
    ListItem,
    UnorderedList,
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
        justifyContent={"center"}
        background={"black"}
        height={"7vh"}
        width={"100%"}
        alignItems={"center"}
        paddingInlineStart={"0"}
        marginBlock={"0"}
        marginLeft={"0"}
        fontFamily={"roboto"}
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
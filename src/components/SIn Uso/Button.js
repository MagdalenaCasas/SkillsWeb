import React from 'react';
import { Link,Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

function Boton({name,image,link}){
    return(
        <Flex
        w={"95vw"}
        zIndex={"4"}
        position={"fixed"}
        top={"80%"}
        justifyContent={"flex-end"}
        >
        <Link 
        mt={'20px'}
        fontSize={['xs', 'xs', 'md', 'md']}
        boxShadow={'0px 4px 4px rgba(0.50, 0, 0, 0.50)'}
        textDecoration={"none"}
        borderRadius={"50%"}
        href={link} 
        target='_blank'
        isExternal
        >
          <Flex 
          boxSize='sm'
          alignItems={"center"}
          justifyContent={"center"}
          >
            <Image 
            h={"5vh"}
            marginRight={"2%"}
            src={image} alt={name} />
            {name}
          </Flex>
        </Link>

        </Flex>
    )
}

export default Boton;
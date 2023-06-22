import React from 'react';
import { Link, Button,Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

function Boton(name,image,link){
    return(
        <Flex
        justifyContent={"center"}
        >
        <Button
         mt={'20px'}
         fontSize={['xs', 'xs', 'md', 'md']}
         background={'white'}
         boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
         borderRadius={'15px'}
        >
        <Link 
        textDecoration={"none"}
        href={link} 
        isExternal
        >
          {name}
          <Box boxSize='sm'>
            <Image src={image} alt={name} />
          </Box>
        </Link>

        </Button>

        </Flex>
    )
}

export default Boton;
import React from 'react';
import { Link, Button,Flex } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

function BotonContactanos(){
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
        href='https://wa.me/5491123204216?text=Me%20interesa%20esto' 
        isExternal
        >
          Contactanos <PhoneIcon mx='2px' />
        </Link>

        </Button>

        </Flex>
    )
}

export default BotonContactanos;
import React from "react"
import { TailSpin } from "react-loader-spinner"
import { Text,Flex } from '@chakra-ui/react'

export default function LoaderSpinner() {
    return (
        <Flex
        justifyContent={"center"}
        marginTop={"30%"}
        >
            <TailSpin
                ariaLabel="loading"
                color="#DB5752"
                
            />
            <Text>
             Enviando Mensaje
            </Text>
        </Flex>
    )
}
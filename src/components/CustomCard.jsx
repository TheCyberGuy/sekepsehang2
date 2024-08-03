import React from 'react'

import {  Card, CardBody, Stack, Heading, Text,} from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CustomCard = (props) => {
  return (
    <Card maxW='sm'>
    <CardBody>
    <Stack mt='3' spacing='5'>
    <FontAwesomeIcon size='xl' icon={props.icon}/>
      <Heading textAlign={'center'} size='md'>{props.heading}</Heading>
      <Text textAlign={'center'} fontSize={'lg'}>
        {props.text}
      </Text>
    </Stack>
  </CardBody>
</Card>
  )
}

export default CustomCard
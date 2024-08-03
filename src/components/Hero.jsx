import { Flex, Text, Heading, Button, ButtonGroup, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CustomCard from './CustomCard'

import { faWrench, faWallet, faReceipt, faCar } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <>
    <DesktopView />
    <MobileView />
    <TabletView />
    </>
  )
}



const DesktopView = () => {
   return(
    <Flex  h={'100vh'} w={'100vw'} flexDir={'row'}  justifyContent={'start'} pl={12} alignItems={'center'} display={{base: 'none', lg: 'flex'}}>
        <Flex flexDir={'column'} justifyContent={'center'}  w={'100%'} h={'100%'} gap={2}>
            <Heading maxW={'35ch'}>Profi elektronikai javítás - Gyorsan és megbízhatóan</Heading>
            <ButtonGroup w={'100%'}>
            <Button variant={'solid'} colorScheme='blue'>Vegye fel a kapcsolatot velünk</Button>
            <Button variant={'ghost'} colorScheme='blue'>Javítási Áraink</Button>
            </ButtonGroup>
        </Flex>
        <Flex flexDir={'column'} w={'100%'} h={'100%'} alignItems={'center'} justifyContent={'center'}>
          <Heading mb={8} textAlign={'center'}>Miért jó, ha minket választ?</Heading>
          <SimpleGrid gap={4} columnGap={16} rowGap={8} columns={2}>
            <CustomCard icon={faWrench} heading={'Nem rombolunk'} text={'Javítást végző munkatársaink képzett villamosmérnökök.\n Nem mondjuk rá egy készülékre, hogy javíthatatlan, ha nem az.'}/>
            <CustomCard icon={faWallet} heading={'Ingyenes bevizsgálás'} text={'Előre megállapított áron, rövid vállalási határidővel dolgozunk. Nézze meg weblapunkon előre, hogy milyen javítási költség várható az adott készülékre. '}/>
            <CustomCard icon={faReceipt} heading={'Garanciális javítás'} text={'Az általunk beépített alkatrészekre 6 hónap garanciát vállalunk.'}/>
            <CustomCard icon={faCar} heading={'Könnyű megközelíthetőség'} text={'Örs Vezér tértől 5 perc, parkolási lehetőség a szerviz előtt, parkolási díj nélkül. A javítás bizonyos esetekben megvárható.'}/>
            {/* <CustomCard icon={faWrench} heading={'Nem rombolunk!'} text={'Javítást végző munkatársaink képzett villamosmérnökök. Nem mondjuk rá egy készülékre, hogy javíthatatlan, ha nem az.'}/> */}
          </SimpleGrid>
        </Flex>
    </Flex>
   )
}

const MobileView = () => {
    return(
        <Flex px={2} direction={'column'} textAlign={'center'} w={'100vw'} h={'100vh'} justifyContent={'center'} alignItems={'start'} display={{base: 'flex', md: 'none'}}>
          <Heading textAlign={'start'} fontSize={'xx-large'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
            <Text textAlign={'start'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, quam?</Text>
            <Button mt={4} width={'50%'}>Lorem, ipsum.</Button>
        </Flex>
       )
}

const TabletView = () => {
  return(
   <Flex  h={'100vh'} w={'100vw'} flexDir={'column'}  justifyContent={'start'} px={8} alignItems={'center'} display={{base: 'none', md: 'flex', lg: 'none'}}>
       <Flex flexDir={'column'} justifyContent={'center'}  w={'100%'} h={'100%'} gap={2}>
           <Heading textAlign='center' maxW={'35ch'}>Profi elektronikai javítás - Gyorsan és megbízhatóan</Heading>
       </Flex>
       <Flex flexDir={'column'} w={'100%'} h={'100%'} alignItems={'center'} justifyContent={'center'}>
         <Heading mb={8} textAlign={'center'}>Miért jó, ha minket választ?</Heading>
         <SimpleGrid gap={4} columnGap={16} rowGap={8} columns={2}>
           <CustomCard icon={faWrench} heading={'Nem rombolunk'} text={'Javítást végző munkatársaink képzett villamosmérnökök.\n Nem mondjuk rá egy készülékre, hogy javíthatatlan, ha nem az.'}/>
           <CustomCard icon={faWallet} heading={'Ingyenes bevizsgálás'} text={'Előre megállapított áron, rövid vállalási határidővel dolgozunk. Nézze meg weblapunkon előre, hogy milyen javítási költség várható az adott készülékre. '}/>
           <CustomCard icon={faReceipt} heading={'Garanciális javítás'} text={'Az általunk beépített alkatrészekre 6 hónap garanciát vállalunk.'}/>
           <CustomCard icon={faCar} heading={'Könnyű megközelíthetőség'} text={'Örs Vezér tértől 5 perc, parkolási lehetőség a szerviz előtt, parkolási díj nélkül. A javítás bizonyos esetekben megvárható.'}/>
           {/* <CustomCard icon={faWrench} heading={'Nem rombolunk!'} text={'Javítást végző munkatársaink képzett villamosmérnökök. Nem mondjuk rá egy készülékre, hogy javíthatatlan, ha nem az.'}/> */}
         </SimpleGrid>
       </Flex>
   </Flex>
  )
}


export default Hero
import {
  Flex,
  Text,
  Heading,
  Button,
  ButtonGroup,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import React from "react";
import CustomCard from "./CustomCard";

import {
  faWrench,
  faWallet,
  faReceipt,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

import BG from "../assets/hero_background.webp";

const Hero = () => {
  return (
    <>
      <DesktopView />
      <MobileView />
      <TabletView />
    </>
  );
};

const DesktopView = () => {
  return (
    <Flex
      id="home"
      h={"100vh"}
      w={"100vw"}
      flexDir={"row"}
      justifyContent={"start"}
      alignItems={"center"}
      pl={12}
      display={{ base: "none", lg: "flex" }}
    >
      <Flex
        borderRadius={"lg"}
        h={"60%"}
        backgroundImage={BG}
        w={"100%"}
        gap={2}
      >
        <Flex flexDir={"column"} gap={6} justifyContent={"center"} pl={12}>
          <Heading textColor={"white"} maxW={"35ch"}>
            Profi elektronikai javítás - Gyorsan és megbízhatóan
          </Heading>
          <ButtonGroup w={"100%"}>
            <Button variant={"solid"} colorScheme="blue">
              <Link to="">Vegye fel a kapcsolatot velünk</Link>
            </Button>
            <Button variant={"solid"}>
              <Link to="javitasok" smooth={true}>
                Javítási Áraink
              </Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading mb={8} textAlign={"center"}>
          Miért jó, ha minket választ?
        </Heading>
        <SimpleGrid gap={4} columnGap={16} rowGap={8} columns={2}>
          <CustomCard
            icon={faWrench}
            heading={"Nem rombolunk"}
            text={
              "Javítást végző munkatársaink képzett villamosmérnökök.\n Nem mondjuk rá egy készülékre, hogy javíthatatlan, ha nem az."
            }
          />
          <CustomCard
            icon={faWallet}
            heading={"Ingyenes bevizsgálás"}
            text={
              "Előre megállapított áron, rövid vállalási határidővel dolgozunk. Nézze meg weblapunkon előre, hogy milyen javítási költség várható az adott készülékre. "
            }
          />
          <CustomCard
            icon={faReceipt}
            heading={"Garanciális javítás"}
            text={
              "Az általunk beépített alkatrészekre 6 hónap garanciát vállalunk."
            }
          />
          <CustomCard
            icon={faCar}
            heading={"Könnyű megközelíthetőség"}
            text={
              "Örs Vezér tértől 5 perc, parkolási lehetőség a szerviz előtt, parkolási díj nélkül. A javítás bizonyos esetekben megvárható."
            }
          />
          {/* <CustomCard icon={faWrench} heading={'Nem rombolunk!'} text={'Javítást végző munkatársaink képzett villamosmérnökök. Nem mondjuk rá egy készülékre, hogy javíthatatlan, ha nem az.'}/> */}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

const MobileView = () => {
  return (
    <Flex
      id="home"
      px={2}
      bgImage={BG}
      direction={"column"}
      textAlign={"center"}
      w={"100vw"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"start"}
      display={{ base: "flex", md: "none" }}
    >
      <Heading textAlign={"start"} textColor={"white"} fontSize={"xx-large"}>
        Profi elektronikai javítás Gyorsan és megbízhatóan
      </Heading>
      <Text textAlign={"start"} color={"white"} pt={2}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, quam?
      </Text>
      <ButtonGroup mt={4}>
        <Button colorScheme="blue">Elérhetőségeink</Button>
        <Button width={"45%"}>
          <Link to="javitasok" smooth={true} offset={-66}>
            Javítási Áraink
          </Link>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

const TabletView = () => {
  return (
    <Flex
      id="home"
      h={"100vh"}
      w={"100vw"}
      flexDir={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      display={{ base: "none", md: "flex", lg: "none" }}
    >
      <Flex
        bgImage={BG}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        flexDir={"column"}
        justifyContent={"center"}
        w={"100%"}
        h={"100%"}
        gap={2}
      >
        <Heading px={8} textColor={"white"} textAlign="center">
          Profi elektronikai javítás gyorsan és megbízhatóan
        </Heading>
        <Center>
          <ButtonGroup>
            <Button variant={"solid"} colorScheme="blue">
              <Link to="">Vegye fel a kapcsolatot velünk</Link>
            </Button>
            <Button variant={"solid"}>
              <Link to="javitasok" smooth={true}>
                Javítási Áraink
              </Link>
            </Button>
          </ButtonGroup>
        </Center>
      </Flex>
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading my={8} textAlign={"center"}>
          Miért jó, ha minket választ?
        </Heading>
        <SimpleGrid gap={4} px={4} columnGap={8} rowGap={8} columns={2}>
          <CustomCard
            icon={faWrench}
            heading={"Nem rombolunk"}
            text={
              "Javítást végző munkatársaink képzett villamosmérnökök.\n Nem mondjuk rá egy készülékre, hogy javíthatatlan, ha nem az."
            }
          />
          <CustomCard
            icon={faWallet}
            heading={"Ingyenes bevizsgálás"}
            text={
              "Előre megállapított áron, rövid vállalási határidővel dolgozunk. Nézze meg weblapunkon előre, hogy milyen javítási költség várható az adott készülékre. "
            }
          />
          <CustomCard
            icon={faReceipt}
            heading={"Garanciális javítás"}
            text={
              "Az általunk beépített alkatrészekre 6 hónap garanciát vállalunk."
            }
          />
          <CustomCard
            icon={faCar}
            heading={"Könnyű megközelíthetőség"}
            text={
              "Örs Vezér tértől 5 perc, parkolási lehetőség a szerviz előtt, parkolási díj nélkül. A javítás bizonyos esetekben megvárható."
            }
          />
          {/* <CustomCard icon={faWrench} heading={'Nem rombolunk!'} text={'Javítást végző munkatársaink képzett villamosmérnökök. Nem mondjuk rá egy készülékre, hogy javíthatatlan, ha nem az.'}/> */}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Hero;

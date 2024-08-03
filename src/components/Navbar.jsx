import React, { useState } from "react";

import { Flex, Heading } from "@chakra-ui/react";

import { Squash as Hamburger } from "hamburger-react";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <Flex
        position={"sticky"}
        top={0}
        h={"max-content"}
        display={{ base: "none", md: "flex" }}
        p={4}
        zIndex={10000}
        bg={'white'}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading size={"md"}>Sekepsehang</Heading>
        <Flex alignItems={"center"} gap={8}>
          <Heading _hover={{ cursor: "pointer" }} size={"sm"}>
            Főoldal
          </Heading>
          <Heading _hover={{ cursor: "pointer" }} size={"sm"}>
            Javitások
          </Heading>
          <Heading _hover={{ cursor: "pointer" }} size={"sm"}>
            Kapcsolat
          </Heading>
          <Heading _hover={{ cursor: "pointer" }} size={"sm"}>
            GYIK
          </Heading>
        </Flex>
      </Flex>
      {/* Mobile Nav */}
      <MobileNav nav={nav} setNav={setNav} />
    </>
  );
};

const MobileNav = (props) => {
  return (
    <>
      <Flex
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        p={2}
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg="white"
        zIndex={1000}
      >
        <Heading>Sekepsehang</Heading>
        <Hamburger duration={0.6} toggled={props.nav} toggle={props.setNav} />
      </Flex>
      <AnimatePresence>
        {props.nav && (
          <Flex
            display={{ base: "flex", md: "none" }}
            as={motion.div}
            flexDir={"column"}
            position={"fixed"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            gap={6}
            justifyContent={"center"}
            alignItems={"center"}
            bg="white"
            zIndex={999}
            initial={{ x: "-100%" }}
            animate={{
              x: 0,
              transition: {
                duration: 0.6,
                ease: "anticipate",
              },
            }}
            exit={{
              x: "-100%",
              transition: {
                duration: 0.6,
                ease: "anticipate",
              },
            }}
          >
            <Heading _hover={{ cursor: "pointer" }} size={"md"}>
              Főoldal
            </Heading>
            <Heading _hover={{ cursor: "pointer" }} size={"md"}>
              Javitások
            </Heading>
            <Heading _hover={{ cursor: "pointer" }} size={"md"}>
              Kapcsolat
            </Heading>
            <Heading _hover={{ cursor: "pointer" }} size={"md"}>
              GYIK
            </Heading>
          </Flex>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

"use client";

import {
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      maxW="1000px"
      mx="auto"
      mt="8%"
      alignItems={"center"}
      justify={"space-between"}
      bgImage={`url(/images/Home/stars.svg)`}
      bgRepeat={"no-repeat"}
      bgSize={"auto"}
      bgPosition={"center 22px"}
      justifyContent={"center"}
      flexDirection={"column"}
      textAlign={"center"}
    >
      <Text color="#ff950a" fontSize={"md"} fontWeight={"semibold"} mb="4">
        BITLY LINKS
      </Text>
      <Text color="white" fontSize={"5xl"} fontWeight={"bold"} mb="4" mx="20">
        Create links that perform with our powerful URL Shortener
      </Text>
      <Text color="white" fontSize={"2xl"}>
        Spark instant connections with your audience using trimmed, <br />{" "}
        trustworthy, and trackable links within the Bitly Connections Platform.
      </Text>

      <InputGroup size="sm" mt="8">
        <Input
          borderTopLeftRadius={"16"}
          borderBottomLeftRadius={"16"}
          placeholder="Place your long URL here...."
          h="62px"
          fontSize={"xl"}
          color="white"
        />
        <InputRightAddon
          borderTopRightRadius={"16"}
          borderBottomRightRadius={"16"}
          h="62px"
          fontSize={"xl"}
          fontWeight={"bold"}
          _hover={{
            backgroundColor: "#99c2ff",
            cursor: "pointer",
          }}
        >
          Shorten link
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
};

export default HeroSection;

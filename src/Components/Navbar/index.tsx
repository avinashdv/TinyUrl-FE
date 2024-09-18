"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
export function NavBar() {
  const pathname = usePathname();

  return (
    <Flex
      alignItems={"center"}
      justify={"space-between"}
      height={84}
      bg="white"
    >
      <Flex
        width={"1000px"}
        margin={"auto"}
        alignItems={"center"}
        justify={"space-between"}
      >
        <Image
          width="100"
          height="50"
          src="https://docrdsfx76ssb.cloudfront.net/static/1726176683/pages/wp-content/uploads/2021/08/bitly_logo.svg"
          alt="micor tiny url logo"
        />
        {/* <Flex gap="5">
          <MenuLink title="Platform" />
          <MenuLink title="Solutions" />
          <MenuLink title="Pricing" />
          <MenuLink title="Resources" />
        </Flex> */}

        <Flex gap="6">
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            <Text
              px="6"
              py="2"
              borderRadius={"6"}
              _hover={{
                background: "#d6d2c9",
              }}
              fontSize={"md"}
              fontWeight={"medium"}
            >
              Log in
            </Text>
          </Link>
          <Button
            bgColor="#0058dd"
            color="white"
            _hover={{
              bg: "#031f39",
            }}
          >
            Sign up Free
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { ColorModeScript } from "@chakra-ui/react";
import { NavBar } from "../Components/Navbar";
import HeroSection from "@/Components/HeroSection";

export default function Home() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <NavBar />
        <HeroSection />
      </ChakraProvider>
    </div>
  );
}

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open_Sans', sans-serif`,
    body: `'Open_Sans', sans-serif`,
  },
  colors: {
    // brand: "#29B475",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

export default theme;

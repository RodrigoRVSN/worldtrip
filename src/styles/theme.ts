import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    dark: {
      "100": "#999999",
      "200": "#47585B",
      "300": "#000000",
    },
    light: {
      "100": "#FFFFFF",
      "200": "#F5F8FA",
      "300": "#DADADA",
    },
  },
  styles: {
    global: {
      body: {
        bg: "light.200",
        color: "dark.200",
      },
    },
  },
});

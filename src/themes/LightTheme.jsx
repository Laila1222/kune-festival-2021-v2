import { createMuiTheme } from "@material-ui/core";

// Colors
const black = "#232a2a";
const lightBlack = "#282a2d";
const lighterBlack = "#2C2C2C";
const white = "#FFFFFF";
const gray = "#808080";
// Main colors used in the logo:
const orange = "#c25d00";
const yellow = "#CB820F";
const cream = "#DEA675";
const rose = "#D48A71";
const brown = "#b34f17";
const background = "#e3dbd3";
const green = "#736d17";
const blue = "#64818c";

export const overridings = {
  name: "Light Theme",
  palette: {
    primary: {
      main: white,
      light: gray,
      contrastText: lightBlack,
    },
    secondary: {
      main: background,
      light: lightBlack,
      contrastText: black,
    },
    background: {
      default: background,
      paper: background,
    },
    colors: {
      orange,
      yellow,
      cream,
      rose,
      brown,
      green,
      blue,
    },

    type: "light",
  },
  typography: {
    fontSize: 14,
    fontFamily: "Lato Regular",
    spacing: {
      gutterSmall: 2,
    },
    body1: {
      "@media (max-width: 960px)": {
        fontSize: "0.9rem",
      },
    },
    body2: {
      "@media (max-width: 960px)": {
        fontSize: "0.9rem",
      },
    },
    h5: {
      "@media (max-width: 960px)": {
        fontSize: "1.4rem",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};

export default createMuiTheme(overridings);

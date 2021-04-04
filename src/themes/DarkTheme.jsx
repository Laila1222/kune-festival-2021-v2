import { createMuiTheme } from "@material-ui/core";

// Colors
const black = "#000000";
const lightBlack = "#1F1E1E";
const lighterBlack = "#2C2C2C";
const white = "#FFFFFF";
const gray = "#4A4A4A";
// Main colors used in the logo:
const orange = "#B04917";
const yellow = "#CB820F";
const cream = "#DEA675";
const rose = "#D48A71";
const brown = "#b34f17";

export const overridings = {
  name: "Dark Theme",
  palette: {
    primary: {
      main: black,
      light: gray,
      contrastText: white,
    },
    secondary: {
      main: lightBlack,
      light: lighterBlack,
      contrastText: white,
    },
    background: {
      default: black,
      paper: lightBlack,
    },
    colors: {
      orange,
      yellow,
      cream,
      rose,
      brown
    },

    type: "dark",
  },
  typography: {
    fontSize: 14,
    spacing: {
      gutterSmall: 2,
    },
    body1: {},
    body2: {},
    h5: {},
  },
};

export default createMuiTheme(overridings);

import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Fonts from "./assets/fonts";

const fontFamilyMetropolis = {
  fontFamily: [
    "Metropolis",
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  letterSpacing: "0.015rem",
};

// A custom theme for this app
const theme = createMuiTheme({
  type: "light",
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#AECBFA",
      light: "#CBF0F8",
    },
    highlight: {
      main: "#2196f3",
      light: "#4dabf5",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFF",
      highlight: "#F1F3F4",
    },
  },
  shape: {
    borderRadius: "0.5rem",
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 730,
      md: 860,
      lg: 1200,
      xl: 1920,
    },
  },
  overrides: {
    MuiAppBar: {
      positionAbsolute: {
        top: 0,
        left: "auto",
        /* right: 0; */
        position: "absolute",
      },
    },
    MuiContainer: {
      root: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "wrap",
        paddingLeft: "36px",
        paddingRight: "36px",
        height: "100vh",
      },
    },
    MuiInputBase: {
      root: {
        fontSize: "20px",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          Fonts.MetropolisRegular,
          Fonts.MetropolisBold,
          Fonts.RobotoRegular,
          Fonts.RobotoMedium,
          Fonts.RobotoBold,
        ],
      },
    },
    MuiListItemText: {
      primary: {
        ...fontFamilyMetropolis,
        fontWeight: 500,
        fontSize: "0.87rem",
      },
    },
  },
  custom: {
    fontFamily: {
      metropolis: fontFamilyMetropolis,
    },
  },
});

export const light = responsiveFontSizes(theme);

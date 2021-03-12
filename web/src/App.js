import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { light } from "./theme/theme";
import Home from "./views/Home";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { light } from "./theme/theme";
import Home from "./views/Home";

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <Home path="/" />
    </ThemeProvider>
  );
}

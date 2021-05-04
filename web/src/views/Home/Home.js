import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "../../components/Appbar/AppBar";
import { light } from "../../theme/theme";

import SummaryArea from "./components/MainArea/SummaryArea";
import SummaryResults from "./components/MainArea/SummaryResults";

export default function Home() {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <Container maxWidth={false}>
        <AppBar />
        <SummaryArea />
        <SummaryResults />
      </Container>
    </ThemeProvider>
  );
}

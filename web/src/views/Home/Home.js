import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import AppBar from "../../components/Appbar/AppBar";

import SummaryArea from "./components/MainArea/SummaryArea";
import SummaryResults from "./components/MainArea/SummaryResults";

export default function Home() {
  return (
    <Container maxWidth={false}>
      <CssBaseline />
      <AppBar />
      <SummaryArea />
      <SummaryResults />
    </Container>
  );
}

import React from "react";
import { Container } from "@material-ui/core";
import AppBar from "../../components/Appbar/AppBar";
import Footer from "../../components/Footer/Footer";
import SummaryArea from "./components/MainArea/SummaryArea";
import SummaryResults from "./components/MainArea/SummaryResults";

export default function Home() {
  return (
    <Container maxWidth="md">
      <AppBar />
      <SummaryArea />
      <SummaryResults />
      <Footer />
    </Container>
  );
}

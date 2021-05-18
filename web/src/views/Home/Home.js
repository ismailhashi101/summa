import React from "react";
import { Container } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AppBar from "../../components/Appbar/AppBar";
import Footer from "../../components/Footer/Footer";
import SummaryArea from "./components/MainArea/SummaryArea";
import SummaryResults from "./components/MainArea/SummaryResults";

export default function Home() {
  // const { todos, actions } = this.props;

  // const handleSubscribeTodos = (_, data) => {
  //   if (data && data.todoStream) {
  //     dispatchTodo({
  //       type: data.todoStream.action,
  //       payload: data.todoStream.todo,
  //     });
  //   }
  // };
  return (
    <Container maxWidth="md">
      <AppBar />
      <SummaryArea />
      <SummaryResults />
      <Footer />
    </Container>
  );
}

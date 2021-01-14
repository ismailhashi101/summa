import React, { useState, useEffect } from "react";
import { CssBaseline, Box, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "../../components/Appbar/AppBar";
import { dark, light } from "../../theme/theme";

import axios from "axios";
import SummaryArea from "./components/MainArea/SummaryArea";
import SummaryResults from "./components/MainArea/SummaryResults";

export default function ({ navigate }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      axios
        .get("http://localhost:4567/todos")
        .then((response) => {
          if (mounted) {
            console.log("We good", response.data);
            setData(response.data);
          }
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    };

    //fetchData();
    // temp data object
    const todos = [
      {
        id: 1,
        title: "test-1",
        notes: [
          {
            text: "note-1",
            isCompleted: false,
          },
          {
            text: "note-2",
            isCompleted: true,
          },
        ],
        labels: [
          {
            id: 1,
            name: "project-1",
          },
        ],
        color: "red",
        isCheckboxMode: true,
      },
      {
        id: 2,
        title: "test-2",
        notes: [
          {
            text: "a",
            isCompleted: true,
          },
        ],
        labels: [
          {
            id: 1,
            name: "project-1",
          },
        ],
        color: "green",
        isCheckboxMode: true,
      },
      {
        id: 3,
        title: "test-3",
        notes: [
          {
            text: "note-1",
            isCompleted: true,
          },
          {
            text: "note-2",
            isCompleted: true,
          },
          {
            text: "note-3",
            isCompleted: true,
          },
        ],
        labels: [
          {
            id: 1,
            name: "project-1",
          },
        ],
        color: "purple",
        isCheckboxMode: true,
      },
      {
        id: 3,
        title: "test-3",
        notes: [
          {
            text: "note-1",
            isCompleted: true,
          },
          {
            text: "note-2",
            isCompleted: true,
          },
          {
            text: "note-3",
            isCompleted: true,
          },
        ],
        labels: [
          {
            id: 1,
            name: "project-1",
          },
        ],
        color: "purple",
        isCheckboxMode: true,
      },
      {
        id: 3,
        title: "test-3",
        notes: [
          {
            text: "note-1",
            isCompleted: true,
          },
          {
            text: "note-2",
            isCompleted: true,
          },
          {
            text: "note-3",
            isCompleted: true,
          },
        ],
        labels: [
          {
            id: 1,
            name: "project-1",
          },
        ],
        color: "purple",
        isCheckboxMode: true,
      },
      {
        id: 3,
        title: "test-3",
        notes: [
          {
            text: "note-1",
            isCompleted: true,
          },
          {
            text: "note-2",
            isCompleted: true,
          },
          {
            text: "note-3",
            isCompleted: true,
          },
        ],
        labels: [
          {
            id: 1,
            name: "project-1",
          },
        ],
        color: "purple",
        isCheckboxMode: true,
      },
      {
        id: 3,
        title: "test-3",
        notes: [
          {
            text: "note-1",
            isCompleted: true,
          },
          {
            text: "note-2",
            isCompleted: true,
          },
          {
            text: "note-3",
            isCompleted: true,
          },
        ],
        labels: [
          {
            id: 1,
            name: "project-1",
          },
        ],
        color: "purple",
        isCheckboxMode: true,
      },
    ];

    setData(todos);

    return () => {
      mounted = false;
    };
  }, []);

  if (data) {
    return <Home results={data} />;
  }
}

function Home({ data }) {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <AppBar />
      <Container maxWidth={false}>
        <SummaryArea />
        <SummaryResults results={data}/>
      </Container>
    </ThemeProvider>
  );
}

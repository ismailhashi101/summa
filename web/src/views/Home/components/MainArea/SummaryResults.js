import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { List, Typography } from "@material-ui/core";
import SummaryCard from "./SummaryCard";

const useStyles = makeStyles((theme) => ({
  content: {
    align: "center",
    display: "block",
    position: "relative",
    top: "100px",
    paddingTop: "0.5%",
    paddingBottom: "3%",
    margin: "2%",
    maxWidth: theme.spacing(90),
  },
  noContent: {
    display: "none",
  },
  summaryResults: {
    paddingBottom: "20px",
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontWeight: 900,
    letterSpacing: "0.015rem",
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  summaryCard: {
    width: "-webkit-fill-available",
    // width: "auto",
    //   margin: "0 auto",
    //   breakInside: "avoid",
    //   pageBreakInside: "avoid",
    //   padding: "0.5rem 0",
    //   transition: theme.transitions.create("all", {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.standard,
    //   }),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 22,
  },
}));

export default function () {
  const classes = useStyles();
  const [summaryResults, setsummaryResults] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      axios
        .get("http://localhost:5000/summarize")
        .then((response) => {
          if (mounted) {
            console.log("We good", response.data);
            setsummaryResults(response.data);
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

    return () => {
      mounted = false;
    };
  }, []);

  const mockData = [
    {
      id: 1,
      title: "test-1",
      summary: "summary-1",
    },
    {
      id: 2,
      title: "test-2",
      summary: "summary-2",
    },
    {
      id: 3,
      title: "test-3",
      summary: "summary-3",
    },
  ];

  //setsummaryResults(mockData);

  // Convert array to JSX items
  var summaries = mockData.map(function(summaryItem) {
    return (
      <div key={summaryItem.id} className={classes.summaryCard}>
        <SummaryCard summaryItem={summaryItem} />
      </div>
    );
  });

  console.log("We good", mockData);

  return (
    <div className={mockData ? classes.content : classes.noContent}>
      <Typography variant="h4" gutterBottom className={classes.summaryResults}>
        Summary Results
      </Typography>
      {summaries}
    </div>
  );
}

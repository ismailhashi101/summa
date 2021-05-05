import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SummaryCard from "./SummaryCard";

const useStyles = makeStyles((theme) => ({
  content: {
    align: "center",
    display: "block",
    position: "relative",
    top: "100px",
    paddingTop: "0.5%",
    paddingBottom: "3%",
    //margin: "2%",
    marginTop: "2%",
    marginBottom: "2%",
    maxWidth: theme.spacing(90),
  },
  noContent: {
    display: "none",
  },
  summaryResults: {
    paddingBottom: "20px",
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontWeight: 400,
    display: "flex",
    width: "100%",
    alignItems: "center",
    fontSize: "35px",
    letterSpacing: "0.015rem"
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

export default function SummaryResults() {
  const classes = useStyles();
  const [summaryResults, setsummaryResults] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchSummaries = () => {
      axios
        .get("http://localhost:5000/summaries")
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

    fetchSummaries();

    return () => {
      mounted = false;
    };
  }, []);


  // Convert array to JSX items
  var summaries = summaryResults.map(function(summaryItem) {
    return (
      <div key={summaryItem.id} className={classes.summaryCard}>
        <SummaryCard summaryItem={summaryItem} />
      </div>
    );
  });

  return (
    <div className={summaryResults.length ? classes.content : classes.noContent}>
      <Typography variant="h4" gutterBottom className={classes.summaryResults}>
        Summary Results
      </Typography>
      {summaries}
    </div>
  );
}

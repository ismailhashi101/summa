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

const mockData = [
  {
    id: 1,
    title: "test-1",
    summary:
      "Thousands of emails detail EPA head’s close ties to fossil fuel industry. I sent the letter today the deputy solicitor general wrote the following day. In one example, Pruitt was a speaker at an ALEC conference on May 3, 2013, in Oklahoma City. The group had sued to compel the state to release the documents under public records laws. Please let me know what you and General Pruitt think, or if we can help further. Pruitt’s chief of staff replied: Thanks Bill — we will take a look and start working on a draft. The emails’ release comes just days after Pruitt was confirmed as the EPA’s new leader. Republicans forged ahead anyway, and Pruitt was confirmed by a 52-to-46 vote. Pruitt’s office at EPA did not at once respond to a ask for comment on Wednesday. On Tuesday, Pruitt addressed EPA employees for the first time as their new boss.",
  },
  {
    id: 2,
    title: "test-2",
    summary:
      "Thousands of emails detail EPA head’s close ties to fossil fuel industry. I sent the letter today the deputy solicitor general wrote the following day. In one example, Pruitt was a speaker at an ALEC conference on May 3, 2013, in Oklahoma City. The group had sued to compel the state to release the documents under public records laws. Please let me know what you and General Pruitt think, or if we can help further. Pruitt’s chief of staff replied: Thanks Bill — we will take a look and start working on a draft. The emails’ release comes just days after Pruitt was confirmed as the EPA’s new leader. Republicans forged ahead anyway, and Pruitt was confirmed by a 52-to-46 vote. Pruitt’s office at EPA did not at once respond to a ask for comment on Wednesday. On Tuesday, Pruitt addressed EPA employees for the first time as their new boss.",
  },
  {
    id: 3,
    title: "test-3",
    summary:
      "Thousands of emails detail EPA head’s close ties to fossil fuel industry. I sent the letter today the deputy solicitor general wrote the following day. In one example, Pruitt was a speaker at an ALEC conference on May 3, 2013, in Oklahoma City. The group had sued to compel the state to release the documents under public records laws. Please let me know what you and General Pruitt think, or if we can help further. Pruitt’s chief of staff replied: Thanks Bill — we will take a look and start working on a draft. The emails’ release comes just days after Pruitt was confirmed as the EPA’s new leader. Republicans forged ahead anyway, and Pruitt was confirmed by a 52-to-46 vote. Pruitt’s office at EPA did not at once respond to a ask for comment on Wednesday. On Tuesday, Pruitt addressed EPA employees for the first time as their new boss.",
  },
];

export default function () {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [summaryResults, setsummaryResults] = useState(mockData);

  useEffect(() => {
    let mounted = true;

    const fetchSummaries = () => {
      axios
        .get("http://localhost:5000/summaries")
        .then((response) => {
          if (mounted) {
            console.log("We good", response.data);
            setsummaryResults(response.data);
            setLoading(false);
          }
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            setError(error);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    };

    //fetchSummaries();

    return () => {
      mounted = false;
    };
  }, []);

  // Convert array to JSX items
  var summaries = summaryResults.map(function (summaryItem) {
    return (
      <div key={summaryItem.id} className={classes.summaryCard}>
        <SummaryCard summaryItem={summaryItem} />
      </div>
    );
  });

  return (
    <div className={summaryResults ? classes.content : classes.noContent}>
      <Typography variant="h4" gutterBottom className={classes.summaryResults}>
        Summary Results
      </Typography>
      {summaries}
    </div>
  );
}

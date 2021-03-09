import React from "react";
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
  root: {
    width: "-webkit-fill-available",
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

export default function ({ results }) {
  const classes = useStyles();
  results = true;

  return (
    <div className={results ? classes.content : classes.noContent}>
      <Typography variant="h4" gutterBottom className={classes.summaryResults}>
        Summary Results
      </Typography>
      <div className={classes.root}>
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </div>
  );
}

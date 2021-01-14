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
    paddingTop: "1%",
    flex: 1,
    margin: "2%",
    maxWidth: theme.spacing(90),
    minWidth: theme.spacing(60),
    backgroundColor: theme.palette.background.paper,
  },
  noContent: {
    display: "none"
  },
  summaryResults: {
    paddingBottom: "20px",
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
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
    <div className={results ? classes.content : classes.noContent }>
      <div className={classes.summaryResults}>
        <Typography variant="h4" gutterBottom>
          Summary Results
        </Typography>
      </div>
      <div className={classes.root}>
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </div>
  );
}

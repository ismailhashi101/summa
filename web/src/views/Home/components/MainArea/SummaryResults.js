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
    flex: 1,
    maxWidth: theme.spacing(85),
    maxHeight: theme.spacing(85),
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
  summaryResults: {
    paddingTop: "40px",
    paddingBottom: "25px",
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
  },
  root: {
    width: "-webkit-fill-available"
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
  }
}));

export default function () {
  const classes = useStyles();

  return (
    <div className={classes.content}>
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

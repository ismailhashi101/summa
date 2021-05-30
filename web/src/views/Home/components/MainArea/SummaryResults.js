import React from "react";
import { connect } from "react-redux";
import { getSummaries } from "../../../../selectors"
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import SummaryCard from "./SummaryCard";

const useStyles = makeStyles((theme) => ({
  content: {
    align: "center",
    display: "block",
    position: "relative",
    top: "110px",
    paddingBottom: "70px",
    marginTop: "1%",
    marginBottom: "2%",
    width: theme.spacing(90),
  },
  noContent: {
    display: "none"
  },
  summaryResults: {
    paddingBottom: "20px",
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontWeight: 500,
    display: "flex",
    width: "100%",
    alignItems: "center",
    fontSize: "xx-large",
    letterSpacing: "0.015rem"
  },
  summaryCard: {
    width: "-webkit-fill-available",
  }
}));

function SummaryResults({ allSummaries }) {
  const classes = useStyles();
    
  const renderedListItems = allSummaries.map((summary) => {
    return (
      <div className={classes.summaryCard} key={summary.id}>
        <SummaryCard summaryItem={summary} />
      </div>
    );
  });

  return (
    <div className={allSummaries.length <= 0 ? classes.noContent: classes.content}>
      <Typography variant="h4" gutterBottom className={classes.summaryResults}>
        Summary Results
      </Typography>
      {renderedListItems}
    </div>
  );
}

const mapStateToProps = (state) => {
  const allSummaries = getSummaries(state);
  console.log(allSummaries);
  return { allSummaries };
};

export default connect(mapStateToProps)(SummaryResults);

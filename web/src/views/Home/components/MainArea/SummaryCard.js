import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";

import { connect } from "react-redux";
import { deleteSummary } from "../../../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "-webkit-fill-available",
    marginBottom: "25px",
  },
  cardContent: {
    paddingBottom: 0,
  },
  cardHeader: {
    paddingTop: 25,
    paddingBottom: 10,
  },
  cardTitle: {
    width: "200px",
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontWeight: 900,
    letterSpacing: "0.015rem",
  },
  subheaderTitle: {
    display: "inline-flex",
    fontSize: 17,
    fontFamily: "Metropolis",
    fontWeight: 300,
    color: "#091540",
  },
  keywordTitle: {
    fontSize: 17,
    marginBottom: 0,
    fontFamily: "Metropolis",
    padding: "16px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontWeight: 300,
    color: "#091540",
  },
  cardParagraph: {
    fontSize: 15,
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    letterSpacing: "0.015rem",
    paddingBottom: "10px",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  cardFooter: {
    display: "flow-root",
    paddingTop: 0,
    padding: "16px",
    alignItems: "center",
  },
}));

function SummaryCard({ summaryItem, deleteSummary }) {
  const classes = useStyles();
  const [url] = useState(summaryItem.url);
  const [title] = useState(summaryItem.title);
  const [summary] = useState(summaryItem.summary);
  const [summaryTime] = useState(summaryItem.summaryTime);
  const [contentReducedBy] = useState(summaryItem.contentReducedBy);
  const [keywords] = useState(summaryItem.keywords);

  const handleDeleteSummary = () => {
    deleteSummary(summaryItem.id); //dispacth action to redux store
  };

  const renderedKeywords = keywords.map((keyword) => {
    return (
      <Chip
        className={classes.chip}
        color="secondary"
        size="medium"
        label={keyword}
        variant="outlined"
      />
    );
  });

  const renderedSummary = summary.map((s) => {
    return (
      <Typography
        variant="body1"
        component="p"
        className={classes.cardParagraph}
      >
        {s}
      </Typography>
    );
  });

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton aria-label="delete" onClick={handleDeleteSummary}>
            <DeleteOutlineIcon color="secondary" fontSize="default" />
          </IconButton>
        }
        subheader={
          <div className="container">
            <Typography
              className={classes.subheaderTitle}
              color="textSecondary"
              gutterBottom
            >
              {title ? title : ""}
            </Typography>
            <Typography
              className={classes.subheaderTitle}
              color="textSecondary"
              gutterBottom
            >
              SUMMA reduced {url} article by {Math.round(contentReducedBy)}% in{" "}
              {Math.round((summaryTime + Number.EPSILON) * 100) / 100} seconds!
            </Typography>
          </div>
        }
      />
      <CardContent className={classes.cardContent}>
        {renderedSummary}
        <Typography
          className={classes.keywordTitle}
          color="textSecondary"
          gutterBottom
        >
          Top keywords are:
        </Typography>
        <div className={classes.cardFooter}>{renderedKeywords}</div>
      </CardContent>
      {/* <CardActions disableSpacing>
        <Typography
          className={classes.keywordTitle}
          color="textSecondary"
          gutterBottom
        >
          Top keywords are:
        </Typography>
        <div className={classes.cardFooter}>{renderedKeywords}</div>
      </CardActions> */}
    </Card>
  );
}

export default connect(null, { deleteSummary })(SummaryCard);

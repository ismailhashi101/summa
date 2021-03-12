import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    paddingBottom: 5,
  },
  summaryResults: {
    paddingTop: "40px",
  },
  root: {
    width: "-webkit-fill-available",
    marginBottom: "25px",
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontWeight: 900,
    letterSpacing: "0.015rem",
  },
  pos: {
    marginBottom: 12,
  },
  cardParagraph: {
    fontSize: 14.5,
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    letterSpacing: "0.015rem",
  },
  learnMore: {
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontWeight: 900,
    letterSpacing: "0.015rem",
  },
}));

export default function ({ summaryItem }) {
  const classes = useStyles();
  const [title, setTitle] = useState(summaryItem.title);
  const [summary, setSummary] = useState(summaryItem.summary);
  // const [summaryDetails, setSummaryDetails] = useState(summaryItem.details);

  //console.log("summary card ", summaryItem);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.cardParagraph}
        >
          {summary}
        </Typography>
      </CardContent>
      <CardActions className={classes.learnMore}>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
}

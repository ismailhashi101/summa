import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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
}));

export default function SummaryCard({ summaryItem }) {
  const classes = useStyles();
  const [title, setTitle] = useState(summaryItem.title);
  const [summaryData, setSummaryData] = useState(
    {
      id: summaryItem.id,
      title: title,
      url: summaryItem.url,
      text: summaryItem.text,
      sentences: summaryItem.sentences,
    }
  );

  const handleTitle = (event) => {
    setTitle(event.target.value);
    setSummaryData([
      ...summaryData,
      {
        id: summaryData.id,
        title: event.target.value,
        url: summaryData.url,
        text: summaryData.text,
        sentences: summaryData.sentences,
      },
    ]);

    console.log("title", title);
    console.log("summary", summaryData);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          variant="h4"
        >
          <TextField
            className={classes.cardTitle}
            color="secondary"
            size="small"
            placeholder="Title"
            margin="dense"
            type="text"
            autoComplete="off"
            value={title}
            onChange={handleTitle}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.cardParagraph}
        >
          {summaryData.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

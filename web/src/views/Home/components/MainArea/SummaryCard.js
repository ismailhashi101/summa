import React from "react";
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

export default function () {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          variant="h5"
        >
          Title
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.cardParagraph}
        >
          summary adssa s das dasdasd as dasd as dasd dasdas das asd asd as dsad
          asd adsadasds a asd as sa d sdsdsad sa asd asd asd asd asd asd as das
          d sasds as das sa das asdasdasas asas dsd as asdasdsdsad as asd asd sa
          dsa das ds asas sd sd as dsd s sa ds
        </Typography>
      </CardContent>
      <CardActions className={classes.learnMore}>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
}

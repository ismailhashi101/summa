import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  content: {
    align: "center",
    display: "block",
    position: "relative",
    top: "100px",
    bottom: "100px",
    flex: 1,
    maxWidth: theme.spacing(85),
    maxHeight: theme.spacing(85),
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
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
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
  },
  pos: {
    marginBottom: 12,
  },
  cardParagraph: {
    fontSize: 14.5,
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
  },
  learnMore:{
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
  }
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

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";

import { connect } from "react-redux";
import { deleteSummary, editSummary } from "../../../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "-webkit-fill-available",
    marginBottom: "25px",
  },
  cardContent: {
    paddingBottom: 5,
  },
  cardHeader: {
    paddingBottom: 0,
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
    fontSize: 15,
    marginBottom: 0,
    fontFamily: "Metropolis",
    color: theme.palette.text.secondary,
  },
  keywordTitle: {
    fontSize: 15,
    marginBottom: 0,
    fontFamily: "Metropolis",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontEeight: 300,
    color: theme.palette.text.secondary,
  },
  cardParagraph: {
    fontSize: 14.5,
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    letterSpacing: "0.015rem",
    paddingBottom: "10px",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  container: {
    paddingTop: "10px",
    flex: "1 0 0",
  },
  divider: {
    display: "inline-block",
    width: "2px",
    backgroundColor: "currentColor",
    margin: "0 8px",
    height: "1.3em",
  },
  expand: {
    paddingTop: "5px",
    float: "right",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function SummaryCard({ summaryItem, deleteSummary, editSummary }) {
  const classes = useStyles();
  const [title, setTitle] = useState(summaryItem.title);
  const [expanded, setExpanded] = React.useState(false);
  const [keywords] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
  ]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
    handleEditSummary(summaryItem.id, title);
  };

  const handleDeleteSummary = () => {
    deleteSummary(summaryItem.id); //dispacth action to redux store
  };

  const handleEditSummary = (id, title) => {
    editSummary(id, title);
  };

  const renderedKeywords = keywords.map((keyword) => {
    return (
      <Chip
        className={classes.chip}
        color="secondary"
        size="small"
        label={keyword.label}
        variant="outlined"
      />
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
          <div class="container">
            <Typography
              className={classes.subheaderTitle}
              color="textSecondary"
              gutterBottom
            >
              Summarized text in{" "}
              {Math.round((summaryItem.time + Number.EPSILON) * 100) / 100}{" "}
              seconds
              <span className={classes.divider} />
              Reduced text by {93}%
            </Typography>
          </div>
        }
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant="body1"
          component="p"
          className={classes.cardParagraph}
        >
          {summaryItem.text}
        </Typography>
        {
          <div class="container">
            <Typography
              className={classes.keywordTitle}
              color="textSecondary"
              gutterBottom
            >
              Keyword Extraction
            </Typography>
            {renderedKeywords}
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon className={classes.expandButton} />
            </IconButton>
          </div>
        }
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{title ? title : "Original Text"}</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default connect(null, { deleteSummary, editSummary })(SummaryCard);

// break down summary into multiple sentences

{
  /* <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography> */
}

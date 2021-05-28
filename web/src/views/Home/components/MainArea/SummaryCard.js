import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";

import { connect } from "react-redux";
import { deleteSummary, editSummary } from "../../../../actions";

const useStyles = makeStyles(() => ({
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
  cardParagraph: {
    fontSize: 14.5,
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    letterSpacing: "0.015rem",
  },
}));

function SummaryCard({ summaryItem, deleteSummary, editSummary }) {
  const classes = useStyles();
  const [title, setTitle] = useState(summaryItem.title);

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

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        action={
          <IconButton aria-label="delete" onClick={handleDeleteSummary}>
            <DeleteOutlineIcon color="secondary" fontSize="default" />
          </IconButton>
        }
        title={
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
        }
        // subheader={"Summarized in {summaryItem.time} seconds!"}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant="body1"
          component="p"
          className={classes.cardParagraph}
        >
          {summaryItem.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default connect(null, { deleteSummary, editSummary })(SummaryCard);

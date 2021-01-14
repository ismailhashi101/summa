import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SummaryBox from "./SummaryBox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  content: {
    align: "center",
    display: "block",
    position: "relative",
    top: "100px",
    paddingTop: "1%",
    margin: "2%",
  },
  summaryBox: {
    padding: theme.spacing(3, 0, 0),
    margin: "0 auto",
  },
  searchbarContainer: {
    flex: 1,
    maxWidth: theme.spacing(100),
    margin: "0 auto",
  },
  summaryTitle: {
    width: "max-content",
    margin: "0 auto",
  },
  title: {
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
    fontSize: "17px",
  },
  titleInput: {
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
    width: "20px",
    textAlign: "center",
  },
  uploadContainer: {
    position: "relative",
    width: "411px",
    height: "38px",
    top: "2px",
    left: 0,
    margin: 0,
    padding: 0,
  },
  uploadFile: {
    position: "absolute",
    width: "144px",
    height: "27px",
    top: "2px",
    left: 0,
    margin: 0,
    padding: 0,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
  },
  summaryInput: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    marginLeft: "0px",
    marginRight: "15px",
    flexFlow: "row wrap",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
  },
  uploadContainer: {
    paddingRight: "5px",
  },
  input: {
    display: "none",
  },
  summarizeButton: {
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
    textTransform: "capitalize",
    fontWeight: 550,
    backgroundColor: "#aecbfaa6",
  },
  summaryResults: {
    paddingTop: "40px",
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.searchbarContainer}>
        <div className={classes.summaryTitle}>
          <span className={classes.title}>
            Summarize my text in &nbsp;
            <input
              className={classes.titleInput}
              type="text"
              autocomplete="off"
              maxlength="2"
              value="7"
            />
            &nbsp; sentences.
          </span>
        </div>
        <div className={classes.summaryBox}>
          <SummaryBox ml={8} />
        </div>
        <div className={classes.root}>
          <div className={classes.summaryInput}>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.uploadContainer}
                label="Upload"
                variant="outlined"
                color="secondary"
                placeholder="Upload a File!"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
            <form noValidate autoComplete="off">
              <TextField
                label="URL"
                variant="outlined"
                color="secondary"
                placeholder="Paste a URL!"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.summarizeButton}
            >
              Summarize
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

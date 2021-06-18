import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { connect } from "react-redux";
import { addSummary } from "../../../../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { green } from "@material-ui/core/colors";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// import PublishIcon from "@material-ui/icons/Publish";
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    display: "none",
  },
  content: {
    display: "block",
    position: "relative",
    top: "90px",
    margin: "2%",
    maxWidth: theme.spacing(200),
    width: "700px",
  },
  summaryTitle: {
    width: "max-content",
    margin: "0 auto",
  },
  title: {
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontSize: "17px",
  },
  titleInput: {
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
    width: "20px",
    textAlign: "center",
  },
  uploadContainer: {
    position: "relative",
    width: "225px",
    height: "38px",
    top: "2px",
    left: 0,
    margin: 0,
    padding: 0,
    paddingRight: "5px",
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
  summaryInput: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    marginLeft: "0px",
    flexFlow: "row wrap",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
  },
  summarizeButton: {
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    textTransform: "lowercase",
    fontWeight: 550,
    backgroundColor: "#aecbfaa6",
    fontSize: "large",
    letterSpacing: "0.015rem",
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  summaryResults: {
    paddingTop: "40px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
  },
  publicIcon: {
    paddingRight: "5px",
    paddingLeft: "5px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
    fontSize: "larger",
  },
  summaryBox: {
    display: "flow-root",
    flexWrap: "wrap",
    width: "-webkit-fill-available",
//     height: "-webkit-fill-available",
    fontSize: "larger",
    padding: theme.spacing(3, 0, 0),
    margin: "0 auto",
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const BASE_URL = process.env.REACT_APP_BASE_URL;

function SummaryArea({ addSummary }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState(null);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [url, setUrl] = React.useState("");
  //const [selectedFile, setSelectedFile] = useState();
  //const [isFilePicked, setIsFilePicked] = useState(false);
  const [summaryBox, setSummaryBox] = React.useState("");
  const [sentences, setSentences] = React.useState("7");
  const [summaryData, setSummaryData] = useState({
    url: url,
    //selectedFile: selectedFile,
    summaryBox: summaryBox,
    sentences: sentences,
  });

  const handleSentences = (event) => {
    setSentences(event.target.value);
    setSummaryData({
      url: url,
      //selectedFile: selectedFile,
      summaryBox: summaryBox,
      sentences: event.target.value,
    });
  };

  const handleSummaryBox = (event) => {
    setSummaryBox(event.target.value);
    setSummaryData({
      url: url,
      //selectedFile: selectedFile,
      summaryBox: event.target.value,
      sentences: sentences,
    });
  };

  const handleUrl = (event) => {
    setUrl(event.target.value);
    setSummaryData({
      url: event.target.value,
      //selectedFile: selectedFile,
      summaryBox: summaryBox,
      sentences: sentences,
    });
  };

  // const handleUpload = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   setIsFilePicked(true);
  //   setSummaryData([
  //     ...summaryData,
  //     {
  //       id: uuid(),
  //       url: url,
  //       //selectedFile: event.target.files[0],
  //       summaryBox: summaryBox,
  //       sentences: sentences,
  //     },
  //   ]);
  //   //console.log(event.target.files[0]);
  // };

  const handleAddSummary = (summaryObject) => {
    addSummary(
      summaryObject.id,
      summaryObject.url,
      summaryObject.title,
      summaryObject.summary,
      summaryObject.summaryTime,
      summaryObject.contentReducedBy,
      summaryObject.sentences,
      summaryObject.keywords
    );
  };

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const validateSummary = (summary) => {
    if (isBlank(summary)) {
      setSeverity("error");
      setAlertMessage("Could not validate SUMMARY!");
      return false;
    }

    return true;
  };

  const validateSummaryData = (summaryData) => {
    if (summaryData.sentences > 40) {
      setOpen(true);
      setSeverity("error");
      setAlertMessage("Too many sentences ... MAX is 40!");
      return false;
    }

    if (isBlank(summaryData.url) && isBlank(summaryData.summaryBox)) {
      setOpen(true);
      setSeverity("warning");
      setAlertMessage("Nothing to summarize!");
      return false;
    }

    if (!isBlank(summaryData.url) && isBlank(summaryData.summaryBox)) {
      // summarize article URL if textbox is empty
      if (!validateUrl(summaryData.url)) {
        setOpen(true);
        setSeverity("error");
        setAlertMessage("Invalid Url");
        return false;
      } else {
        return true;
      }
    }

    if (isBlank(summaryData.url) && !isBlank(summaryData.summaryBox)) {
      // summarize textbox if URL is empty
      const textFieldlength = summaryData.summaryBox.length;
      if (textFieldlength < 1000) {
        // if less than 1000 characters
        setOpen(true);
        setSeverity("info");
        setAlertMessage("Text is too short!");
        return false;
      }
    } else {
      setOpen(true);
      setSeverity("error");
      setAlertMessage("Could not validate TEXT!");
      return false;
    }

    return true;
  };

  function isBlank(str) {
    return !str || /^\s*$/.test(str);
  }

  function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  }

  const summarizeArticle = () => {
    // const formData = new FormData();
    // formData.append("File", selectedFile);

    setSummaryData({
      url: url,
      //selectedFile: selectedFile,
      summaryBox: summaryBox,
      sentences: sentences,
    });

    if (validateSummaryData(summaryData)) {
      handleButtonClick();
      axios
        .post(`${BASE_URL}/summarize`, {
          summary: summaryData,
        })
        .then((response) => {
          console.log("Response: ", response.data);
          setLoading(false);
          if (validateSummary(response.data)) {
            handleAddSummary(response.data);
            setOpen(true);
            setSeverity("success");
            setAlertMessage("Summarized Successfully!");
          }
        })
        .catch(function (error) {
          setLoading(false);
          setOpen(true);
          setSeverity("error");
          setAlertMessage("Ooops, text could not be summarized!");
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    }

    setSummaryData({
      url: "",
      //selectedFile: selectedFile,
      summaryBox: "",
      sentences: sentences,
    });
    setSummaryBox("");
    setUrl("");
  };

  function renderSwitch(severity) {
    switch (severity) {
      case "success":
        return (
          <Alert onClose={handleClose} severity={severity}>
            {alertMessage}
          </Alert>
        );
      case "error":
        return (
          <Alert onClose={handleClose} severity={severity}>
            {alertMessage}
          </Alert>
        );
      case "warning":
        return (
          <Alert onClose={handleClose} severity={severity}>
            {alertMessage}
          </Alert>
        );
      case "info":
        return (
          <Alert onClose={handleClose} severity={severity}>
            {alertMessage}
          </Alert>
        );
      default:
        return null;
    }
  }

  return (
    <div className={classes.content}>
      <div className={classes.summaryTitle}>
        <span className={classes.title}>
          Summarize my text in &nbsp;
          <input
            className={classes.titleInput}
            type="text"
            autoComplete="off"
            maxLength="2"
            value={sentences}
            onChange={handleSentences}
          />
          &nbsp; sentences.
        </span>
      </div>
      <div className={classes.summaryBox}>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-secondary"
            value={summaryBox}
            onChange={handleSummaryBox}
            label="Summa"
            variant="outlined"
            color="secondary"
            multiline
            rows={10}
            placeholder="Paste an article or text here and hit summarize ;) "
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className={classes.inputContainer}>
        <div className={classes.summaryInput}>
          <form noValidate autoComplete="off">
            {/* <TextField
              className={classes.uploadContainer}
              value={isFilePicked ? selectedFile.name : ""}
              label="Upload"
              variant="outlined"
              color="secondary"
              placeholder="Upload a File!"
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <input
                      accept="file"
                      onChange={handleUpload}
                      className={classes.input}
                      id="icon-button-file"
                      type="file"
                    />
                    <label htmlFor="icon-button-file">
                      <IconButton
                        aria-label="upload"
                        component="span"
                        className={classes.publicIcon}
                      >
                        <PublishIcon />
                      </IconButton>
                    </label>
                  </InputAdornment>
                ),
              }}
            /> */}
            <TextField
              value={url}
              onChange={handleUrl}
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
            className={classes.summarizeButton}
            onClick={summarizeArticle}
            variant="contained"
            size="large"
            color="secondary"
            disabled={loading}
          >
            Summarize
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </Button>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        {renderSwitch(severity)}
      </Snackbar>
    </div>
  );
}

export default connect(null, { addSummary })(SummaryArea);

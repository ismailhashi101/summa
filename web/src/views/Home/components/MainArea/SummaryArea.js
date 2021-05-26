import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { connect } from "react-redux";
import { addSummary } from "../../../../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";

// import PublishIcon from "@material-ui/icons/Publish";
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
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
    height: "-webkit-fill-available",
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

function SummaryArea({ addSummary }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
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

  // const summarizeArticle = () => {
  //   // const formData = new FormData();

  //   // formData.append("File", selectedFile);

  //   setSummaryData([
  //     ...summaryData,
  //     {
  //       url: url,
  //       //selectedFile: selectedFile,
  //       summaryBox: summaryBox,
  //       sentences: sentences,
  //     },
  //   ]);

  //   axios
  //     .post("http://localhost:5000/summarize", {
  //       summary: summaryData,
  //     })
  //     .then((response) => {
  //       console.log("We good", response.data);
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log("Error", error.message);
  //       }
  //     });
  // };

  // const handleSentences = (event) => {
  //   setSentences(event.target.value);
  //   setSummaryData({
  //     url: url,
  //     //selectedFile: selectedFile,
  //     summaryBox: summaryBox,
  //     sentences: sentences,
  //   });
  // };

  // const handleSummaryBox = (event) => {
  //   setSummaryBox(event.target.value);
  //   setSummaryData({
  //     url: url,
  //     //selectedFile: selectedFile,
  //     summaryBox: summaryBox,
  //     sentences: sentences,
  //   });
  // };

  // const handleUrl = (event) => {
  //   setUrl(event.target.value);
  //   setSummaryData({
  //     url: url,
  //     //selectedFile: selectedFile,
  //     summaryBox: summaryBox,
  //     sentences: sentences,
  //   });
  //   console.log(summaryData);

  // };

  //   const handleUpload = (event) => {
  //     setSelectedFile(event.target.files[0]);
  //     setIsFilePicked(true);
  //     setSummaryData([
  //       ...summaryData,
  //       {
  //         id: uuid(),
  //         url: url,
  //         //selectedFile: event.target.files[0],
  //         summaryBox: summaryBox,
  //         sentences: sentences,
  //       },
  //     ]);
  //     //console.log(event.target.files[0]);
  //   };

  const handleAddSummary = (summary) => {
    // dispatches actions to add summary
    addSummary(summary.id, summary.title, summary.text);
  };

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
  };

  const summarizeArticle = () => {
    handleButtonClick();

    // const formData = new FormData();
    // formData.append("File", selectedFile);

    setSummaryData({
      url: url,
      //selectedFile: selectedFile,
      summaryBox: summaryBox,
      sentences: sentences,
    });

    axios
      .post("http://localhost:5000/summarize", {
        summary: summaryData,
      })
      .then((response) => {
        console.log("We good", response.data);
        handleAddSummary(response.data);
        setSuccess(true);
        setLoading(false);
      })
      .catch(function (error) {
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

    setSummaryData({
      url: "",
      //selectedFile: selectedFile,
      summaryBox: "",
      sentences: sentences,
    });

    setSummaryBox("");
    setUrl("");
  };

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
    </div>
  );
}

export default connect(null, { addSummary })(SummaryArea);

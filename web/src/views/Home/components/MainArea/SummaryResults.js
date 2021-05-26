import React from "react";
import { connect } from "react-redux";
import { getSummaries } from "../../../../selectors"
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import SummaryCard from "./SummaryCard";

const useStyles = makeStyles((theme) => ({
  content: {
    align: "center",
    display: "block",
    position: "relative",
    top: "110px",
    paddingBottom: "70px",
    marginTop: "1%",
    marginBottom: "2%",
    width: theme.spacing(90),
  },
  noContent: {
    // align: "center",
    // display: "none",
    // position: "relative",
    // top: "110px",
    // paddingBottom: "70px",
    // marginTop: "1%",
    // marginBottom: "2%",
    // width: theme.spacing(90),
    display: "none"
  },
  summaryResults: {
    paddingBottom: "20px",
    fontFamily:
      "Metropolis, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontWeight: 400,
    display: "flex",
    width: "100%",
    alignItems: "center",
    fontSize: "30px",
    letterSpacing: "0.015rem",
  },
  summaryCard: {
    width: "-webkit-fill-available",
  }
}));

function SummaryResults({ allSummaries }) {
  const classes = useStyles();
  //const [summaryResults, setsummaryResults] = useState([]);

  // useEffect(() => { 
  //   let mounted = true;

  //   const fetchSummaries = () => {
  //     axios
  //       .get("http://localhost:5000/summaries")
  //       .then((response) => {
  //         if (mounted) {
  //           setsummaryResults(response.data);
  //         }
  //       })
  //       .catch(function (error) {
  //         if (error.response) {
  //           console.log(error.response.data);
  //           console.log(error.response.status);
  //         } else if (error.request) {
  //           // The request was made but no response was received
  //           console.log(error.request);
  //         } else {
  //           // Something happened in setting up the request that triggered an Error
  //           console.log("Error", error.message);
  //         }
  //       });
  //   };

  //   fetchSummaries();

  //   //console.log(summaries);

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);
    
  const renderedListItems = allSummaries.map((summary) => {
    return (
      <div className={classes.summaryCard} key={summary.id}>
        <SummaryCard summaryItem={summary} />
      </div>
    );
  });

  return (
    <div className={allSummaries.length <= 0 ? classes.noContent: classes.content}>
      <Typography variant="h4" gutterBottom className={classes.summaryResults}>
        Summary Results
      </Typography>
      {renderedListItems}
    </div>
  );
}

const mapStateToProps = (state) => {
  const allSummaries = getSummaries(state);
  console.log(allSummaries);
  return { allSummaries };
};

export default connect(mapStateToProps)(SummaryResults);

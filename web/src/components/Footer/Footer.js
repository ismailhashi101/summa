import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    position: "relative",
    backgroundColor: "#e7e7e7",
    padding: 0,
    width: "100%",
    height: "78px",
  },
  root: {
    zIndex: 1,
    width: "100%",
    display: "-webkit-flex",
    display: "-moz-box",
    display: "flex",
    justifyContent: "space-between",
    align: "center",
    alignItems: "center",
  },
  bgFooter: {
    position: "absolute",
    left: "-moz-calc((100vw - 1920px)/-2)",
    left: "calc((100vw - 1920px)/-2)",
    width: "100vw",
    bottom: "0",
    height: "78px",
    background: "#e7e7e7",
    zIndex: "0",
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.root}></div>
      <div className={classes.bgFooter}></div>
    </footer>
  );
}

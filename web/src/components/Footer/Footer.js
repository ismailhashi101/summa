import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'calc(5% + 75px)',
    bottom: 0,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    ...theme.custom.fontFamily.metropolis,
    display: "flex",
    alignItems: "center",
    lineHeight: "inherit"
  },
}));

export default function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LogoContainer />
      <p style={{ fontSize: 15, marginTop: "5px" }} >© Created by Ismail in 2020</p>
    </div>
  );
}

function LogoContainer() {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <BookIcon color="secondary" style={{ fontSize: 25 }} />
      <Typography
        color="textSecondary"
        className={classes.title}
        variant="h6"
        noWrap
      >
        summa
      </Typography>
    </div>
  );
}

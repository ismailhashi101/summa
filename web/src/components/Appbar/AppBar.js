import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "content",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "stretch",
  },
  title: {
    ...theme.custom.fontFamily.metropolis,
    display: "flex",
    alignItems: "center",
    fontSize: "1.875rem"
  },
  appbar: {
    position: "absolute"
  },
  toolbar: {
   minHeight: "90px",
   paddingLeft: "40px"
  }
}));

export default function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        elevation={0}
        position="absolute"
      >
        <Toolbar className={classes.toolbar}>
          <LogoContainer />
        </Toolbar>
      </AppBar>
    </div>
  );
}

function LogoContainer() {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <BookIcon color="secondary" style={{ fontSize: 40, paddingRight: 5 }}/>
      <Typography
        color="textSecondary"
        className={classes.title}
        variant="h4"
        noWrap
      >
        summa
      </Typography>
    </div>
  );
}

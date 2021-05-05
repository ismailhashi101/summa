import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  containerBorder: {
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: theme.palette.divider,
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
  toolbar: {
   position: "absolute",
   minHeight: "64px"
  }
}));

export default function ResponsiveDrawer() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={0}
        className={classes.containerBorder}
        position="fixed"
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

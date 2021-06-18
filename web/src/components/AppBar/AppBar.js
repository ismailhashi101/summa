import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "content",
    position: "relative",
    width: "100%",
    margin: "2%",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "stretch",
  },
  title: {
    ...theme.custom.fontFamily.metropolis,
    display: "flex",
    alignItems: "center",
    fontSize: "1.975rem",
  },
  toolbar: {
    minHeight: "70px"
  },
}));

export default function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="absolute">
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
      <BookIcon color="secondary" style={{ fontSize: 40, paddingRight: 5 }} />
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

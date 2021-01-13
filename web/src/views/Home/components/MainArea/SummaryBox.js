import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flow-root",
    flexWrap: "wrap",
    width: "-webkit-fill-available",
    height: "-webkit-fill-available",
    fontSize: "larger"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
    fontSize: "larger"
  },
}));

const SummaryBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-secondary"
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
  );
};

export default SummaryBox;

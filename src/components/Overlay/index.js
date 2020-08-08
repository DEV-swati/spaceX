import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#26a0c9",
  },
}));
const ColorCircularProgress = withStyles({
  root: {
    color: "#26a0c9",
  },
})(CircularProgress);

export default function Overlay(props) {
  const classes = useStyles();
  var open = props.open;
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <ColorCircularProgress size={50} thickness={5} aria-busy={open} />
    </Backdrop>
  );
}

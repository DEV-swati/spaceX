import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    width: "100%",
  },
  media: {
    height: 140,
  },
  heading: {
    color: "#424a84",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className="p-3">
        <img src={props.image} alt={props.heading} width="100%" />
      </CardMedia>
      <CardContent className="text-left">
        <Typography
          gutterBottom
          className={classes.heading}
          variant="h5"
          component="h2"
        >
          {props.heading}
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
}

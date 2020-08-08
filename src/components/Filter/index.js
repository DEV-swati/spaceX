import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "400",
    borderBottom: "1px solid #ccc",
    margin: "0 12%",
    paddingBottom: "10px",
  },
  filterButton: {
    backgroundColor: "#afd870",
    margin: "14px",
    fontSize: "15px",
    padding: "0.5rem 2rem",

    boxShadow: "0px 0px 5px #ccc",
    "&:hover": {
      backgroundColor: "#afd870",
      boxShadow: "0px 0px 5px #111",
    },
  },
  selected: {
    backgroundColor: "#6ca003",
  },
}));

export const Filter = ({
  filterName,
  options,
  type,
  changeFilterData,
  selected,
}) => {
  const classes = useStyles();

  const changeFilterValue = (option, type) => {
    changeFilterData(option, type);
  };

  return (
    <div>
      <h4 className={classes.heading}>{filterName}</h4>
      <Grid container>
        {options.map((option, index) => {
          return (
            <Grid
              container
              item
              xs={6}
              sm={6}
              className="mb-2 d-flex justify-content-center"
              key={index}
            >
              <Button
                key={index}
                onClick={() => changeFilterValue(option, type)}
                className={`${classes.filterButton} ${
                  selected === option && classes.selected
                }`}
              >
                {option}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Filter;

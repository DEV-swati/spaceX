import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import FilterCont from "../../containers/FilterCont";
import CardCont from "../../containers/CardCont";
import { Grid } from "@material-ui/core";
import OverlayCont from "../../containers/OverlayCont";

// const useStyles = makeStyles((theme) => ({}));

export const Home = () => {
  //   const classes = useStyles();

  return (
    <>
      <Header />
      <Grid container>
        <Grid container item xs={12} sm={3} className="mb-5">
          <FilterCont />
        </Grid>
        <Grid container item xs={12} sm={9} className="">
          <CardCont />
        </Grid>
      </Grid>
      <Footer />
      <OverlayCont />
    </>
  );
};

export default Home;

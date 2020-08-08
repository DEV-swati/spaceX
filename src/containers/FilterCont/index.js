import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import {
  launch_year,
  launch_success,
  landing_success,
} from "../../constants/filterConstants";
import Filter from "../../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getLaunchData } from "../../modules/action";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    padding: "10px",
  },
}));

export const FilterCont = () => {
  const [filterPayload, setfilterPayload] = useState({
    launch_year: null,
    launch_success: null,
    landing_success: null,
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    setLaunchYear,
    setsuccessfulLaunch,
    setsuccessfulLanding,
  } = useSelector((state) => state.spacexReducer);

  const changeFilterData = (option, type) => {
    if (filterPayload[type] === option) {
      let details = { ...filterPayload, [type]: null };
      setfilterPayload(details);
      dispatch(getLaunchData(details));
    } else {
      let details = { ...filterPayload, [type]: option };
      setfilterPayload(details);
      dispatch(getLaunchData(details));
    }
  };

  return (
    <div className={classes.paperRoot}>
      <Paper>
        <h3>Filters</h3>
        <div>
          <Filter
            filterName="Launch Year"
            options={launch_year}
            type="launch_year"
            changeFilterData={changeFilterData}
            selected={setLaunchYear}
          />
          <Filter
            filterName="SuccessFul Launch"
            options={launch_success}
            type="launch_success"
            changeFilterData={changeFilterData}
            selected={setsuccessfulLaunch}
          />
          <Filter
            filterName="SuccessFul Landing"
            options={landing_success}
            type="landing_success"
            changeFilterData={changeFilterData}
            selected={setsuccessfulLanding}
          />
        </div>
      </Paper>
    </div>
  );
};

export default FilterCont;

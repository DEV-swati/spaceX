import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getLaunchData } from "../../modules/action";
import Card from "../../components/Card";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  noData: {
    width: "100%",
    paddingTop: "20px",
  },
}));

export const CardCont = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { launchedData } = useSelector((state) => state.spacexReducer);

  useEffect(() => {
    dispatch(getLaunchData());
  }, [dispatch]);

  return (
    <>
      <Grid container>
        {launchedData && launchedData.length > 0 ? (
          launchedData.map((oneLaunch, index) => {
            return (
              <Grid
                container
                item
                sm={4}
                md={3}
                xs={12}
                className="p-2"
                key={index}
              >
                <Card
                  heading={`${oneLaunch.mission_name} #${oneLaunch.flight_number}`}
                  key={index}
                  image={oneLaunch.links.mission_patch}
                >
                  <div>
                    <div>
                      <b>Mission Ids: </b>
                      <ul>
                        {!!oneLaunch.mission_id.length &&
                          oneLaunch.mission_id.map((id, index) => {
                            return <li key={index}>{id}</li>;
                          })}
                      </ul>
                    </div>
                    <div>
                      <b>Launch Year: </b> <span>{oneLaunch.launch_year}</span>
                    </div>
                    <div>
                      <b>Successful Launch: </b>
                      <span>{oneLaunch.launch_success ? "True" : "False"}</span>
                    </div>
                    <div>
                      <b>Successful Landhing: </b>
                      <span>{oneLaunch.launch_landing ? "True" : "False"}</span>
                    </div>
                  </div>
                </Card>
              </Grid>
            );
          })
        ) : (
          <h3 className={classes.noData}>No Data Found</h3>
        )}
      </Grid>
    </>
  );
};

export default CardCont;

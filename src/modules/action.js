import axios from "axios";

const BASE_URL = "https://api.spaceXdata.com/v3/launches";

export const LAUNCH_DATA = "LAUNCH_DATA";
export const LAUNCH_YEAR = "LAUNCH_YEAR";
export const LAUNCH_SUCCESS = "LAUNCH_SUCCESS";
export const LADING_SUCCESS = "LADING_SUCCESS";
export const ACTIVE_DISABLE_OVERLAY = "ACTIVE_DISABLE_OVERLAY";

export const launchDataAction = (data) => ({
  type: LAUNCH_DATA,
  data: data,
});
export const launchYearAction = (data) => ({
  type: LAUNCH_YEAR,
  data: data,
});
export const launchSuccessAction = (data) => ({
  type: LAUNCH_SUCCESS,
  data: data,
});
export const landingSuccessAction = (data) => ({
  type: LADING_SUCCESS,
  data: data,
});

export const activateDisableOverlay = (data) => ({
  type: ACTIVE_DISABLE_OVERLAY,
  data: data,
});

export const getLaunchData = (payload) => async (dispatch) => {
  dispatch(activateDisableOverlay(true));
  var url = `${BASE_URL}`;
  var parameters = {
    limit: 100,
  };
  if (payload) {
    Object.keys(payload).map((key) => {
      if (payload[key] !== null) {
        parameters = {
          ...parameters,
          [key]: payload[key],
        };
      }
      return key;
    });
    dispatch(launchYearAction(payload.launch_year));
    dispatch(launchSuccessAction(payload.launch_success));
    dispatch(landingSuccessAction(payload.landing_success));
    console.log(parameters);
  }
  try {
    const res = await axios.get(url, {
      params: parameters,
    });
    const data = res.data;
    dispatch(launchDataAction(data));
    dispatch(activateDisableOverlay(false));
  } catch (err) {
    console.log(err);
    dispatch(activateDisableOverlay(false));
  }
};

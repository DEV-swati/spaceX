import {
  LAUNCH_DATA,
  LAUNCH_YEAR,
  LAUNCH_SUCCESS,
  LADING_SUCCESS,
  ACTIVE_DISABLE_OVERLAY,
} from "./action";

const userDefault = {
  launchedData: null,
  setLaunchYear: null,
  setsuccessfulLaunch: null,
  setsuccessfulLanding: null,
  isOverlay: false,
};

export default function spacexReducer(state = userDefault, action) {
  const { type, data } = action;
  switch (type) {
    case LAUNCH_DATA:
      return {
        ...state,
        launchedData: data,
      };
    case LAUNCH_YEAR:
      return {
        ...state,
        setLaunchYear: data,
      };
    case LAUNCH_SUCCESS:
      return {
        ...state,
        setsuccessfulLaunch: data,
      };
    case LADING_SUCCESS:
      return {
        ...state,
        setsuccessfulLanding: data,
      };
    case ACTIVE_DISABLE_OVERLAY:
      return Object.assign({}, state, {
        isOverlay: action.data,
      });
    default:
      return state;
  }
}

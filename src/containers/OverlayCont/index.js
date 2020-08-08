import React from "react";
import { useSelector } from "react-redux";
import Overlay from "../../components/Overlay";

const OverlayCont = () => {
  const { isOverlay } = useSelector((state) => state.spacexReducer);

  return <Overlay open={isOverlay} />;
};

export default OverlayCont;

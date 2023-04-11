import React from "react";
import { useDispatch } from "react-redux";
import { previousImage } from "../../features/backgroundSlice";

const BackgroundLeftArrow = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(previousImage());
      }}
    >
      {"<"}
    </button>
  );
};

export default BackgroundLeftArrow;
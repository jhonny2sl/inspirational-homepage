import React from "react";
import { useDispatch } from "react-redux";
import { nextImage } from "../../features/backgroundSlice";

const BackgroundRightArrow = () => {
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => {
                dispatch(nextImage());
            }}
        >
            {">"}
        </button>
    );
};

export default BackgroundRightArrow;
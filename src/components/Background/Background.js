import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBackground, getImageSrc } from "../../features/backgroundSlice";
import "./Background.css";


const Background = () => {
    const { imageSrcs, currentIndex } = useSelector(selectBackground);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImageSrc([
            "/assets/images/2-nature-wallpaper-grass.jpg",
            "/assets/images/12319.jpg",
            "/assets/images/250472.jpg"
        ]));
    }, [dispatch]);
    
    return (
      <div>
        <img src={imageSrcs[currentIndex]} />
      </div>
    );
};

export default Background;
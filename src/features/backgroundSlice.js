import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
    name: "background",
    initialState: {
        imageSrcs: [
            // "/assets/images/2-nature-wallpaper-grass.jpg",
            // "/assets/images/12319.jpg",
            // "/assets/images/250472.jpg"
        ],
        currentIndex: 0
    },
    reducers: {
        getImageSrc: (state, action) => {
            state.imageSrcs = action.payload;
            state.currentIndex = 0;
        },
        nextImage: (state, action) => {
            state.currentIndex = (state.currentIndex + 1) % state.imageSrcs.length;
        },
        previousImage: (state, action) => {
            if (state.currentIndex > 0) {
                state.currentIndex--;
            } else {
                state.currentIndex = state.imageSrcs.length - 1;
            }
        }
    }
});

export const selectBackground = (state) => state.background;

export const {
    getImageSrc,
    nextImage,
    previousImage
} = backgroundSlice.actions;

export default backgroundSlice.reducer;
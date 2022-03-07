import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PhotoData } from "../types";
import store, { AppThunk } from "./store";
import { PhotoFeatureState } from "./types";

const initialState = {
  rejectedImages: [],
  approvedImages: [],
  currentPhoto: {},
} as unknown as PhotoFeatureState;

const photoFeatureSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    approvePhoto(state, { payload }: PayloadAction<PhotoData>) {
      state.approvedImages.push(payload);
    },
    rejectPhoto(state, { payload }: PayloadAction<PhotoData>) {
      state.rejectedImages.push(payload);
    },
    setPhotos(state, { payload }: PayloadAction<PhotoData>) {
      state.currentPhoto = payload;
    },
  },
});

export const getPhoto = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=iih2IqT1FvYUVSJ9ku_0RE6mleMlbu5x1kSSp5znLwU`
    );
    const photo: PhotoData = response.data;
    if (checkIsRejected(photo)) {
      dispatch(getPhoto);
    } else {
      dispatch(setPhotos(photo));
    }
  } catch (error) {
    throw error;
  }
};

const checkIsRejected = (photo: PhotoData): boolean => {
  const rejectedImage = store
    .getState()
    .photoFeatureReducer.rejectedImages.find((image) => image.id === photo.id);
  return Boolean(rejectedImage);
};

export const { approvePhoto, rejectPhoto, setPhotos } =
  photoFeatureSlice.actions;

export default photoFeatureSlice.reducer;

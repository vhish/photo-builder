import { PhotoData } from "../types";

export interface PhotoFeatureState {
  rejectedImages: PhotoData[];
  approvedImages: PhotoData[];
  currentPhoto: PhotoData;
}

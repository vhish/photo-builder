import { Plus } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { BsCheck, BsX } from "react-icons/bs";

import {
  approvePhoto,
  getPhoto,
  rejectPhoto,
} from "../../redux/photoFeatureReducer";
import { RootState } from "../../redux/rootReducer";
import {
  ActionButton,
  ActionText,
  ButtonWrapper,
  ImageContentWrapper,
  ImageSection,
} from "./ImageContent.styles";

export const ImageContent = () => {
  const { currentPhoto } = useSelector(
    (state: RootState) => state.photoFeatureReducer
  );

  const dispatch = useDispatch();

  const handleGetPhoto = () => {
    dispatch(getPhoto());
  };

  const handleApprovePhoto = () => {
    dispatch(approvePhoto(currentPhoto));
    dispatch(getPhoto());
  };

  const handleRejectPhoto = () => {
    dispatch(rejectPhoto(currentPhoto));
    dispatch(getPhoto());
  };

  return (
    <div>
      <ImageSection>
        {!currentPhoto.urls ? (
          <ImageContentWrapper onClick={handleGetPhoto}>
            <button>
              <Plus size="50" color="rgb(219 219 231)" />
            </button>
          </ImageContentWrapper>
        ) : (
          <ImageContentWrapper>
            <img
              src={currentPhoto.urls && currentPhoto.urls.regular}
              alt="Free unsplash"
              width="100%"
            />
          </ImageContentWrapper>
        )}
      </ImageSection>
      {!currentPhoto.urls ? (
        <ActionText>
          <p>
            Click on the{" "}
            <Plus
              style={{
                marginBottom: "-2px",
                width: "16px",
                height: "16px",
                color: "#E2E8F1",
              }}
            />{" "}
            in order to get image recommendations
          </p>
        </ActionText>
      ) : (
        <ButtonWrapper>
          <ActionButton color="#404040">
            <button className="reject" onClick={handleRejectPhoto}>
              <IconContext.Provider value={{ color: "#ffffff", size: "50px" }}>
                <BsX />
              </IconContext.Provider>
            </button>
          </ActionButton>
          <ActionButton onClick={handleApprovePhoto} color="blue">
            <button className="approve" onClick={handleRejectPhoto}>
              <IconContext.Provider value={{ color: "#ffffff", size: "50px" }}>
                <BsCheck />
              </IconContext.Provider>
            </button>
          </ActionButton>
        </ButtonWrapper>
      )}
    </div>
  );
};

export default ImageContent;

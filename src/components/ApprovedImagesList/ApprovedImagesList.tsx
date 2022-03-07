import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import {
  ApprovedImagesContainer,
  ApprovedImagesWrapper,
  ApprovedImagesListContainer,
  ApprovedImage,
} from "./ApprovedImages.styles";
import "../../utils/css/image-styles.css";
import Slider from "react-slick";

export const ApprovedImagesList = () => {
  const { approvedImages } = useSelector(
    (state: RootState) => state.photoFeatureReducer
  );

  const settings = {
    dots: false,
    infinite: approvedImages.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <ApprovedImagesContainer className="imgContainer">
      <p>{`APPROVED IMAGES (${approvedImages.length})`}</p>
      <ApprovedImagesWrapper>
        {!approvedImages || !(approvedImages.length > 0) ? (
          ""
        ) : (
          <ApprovedImagesListContainer>
            <Slider {...settings}>
              {approvedImages.map((image) => {
                return (
                  <ApprovedImage key={image.id}>
                    <div
                      style={{ backgroundImage: `url(${image.urls.small})` }}
                    ></div>
                  </ApprovedImage>
                );
              })}
            </Slider>
          </ApprovedImagesListContainer>
        )}
      </ApprovedImagesWrapper>
    </ApprovedImagesContainer>
  );
};

export default ApprovedImagesList;

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body,
{
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 50px;
}
.slick-prev:before,
.slick-next:before {
  color: blue;
}
`;
export const Main = styled.main`
   {
    padding-top: 40px;
  }
`;

export const AppContainer = styled.div`
   {
    background-color: white;

    margin: auto;
    border-radius: 5px;
    max-height: 800px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 90%;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1223px) {
      width: 80%;
    }
    @media only screen and (min-width: 1224px) {
      width: 30%;
    }
    @media only screen and (min-width: 1824px) {
      width: 25%;
    }

    p {
      color: #3b54e5;
      font-weight: 700;
      font-size: 12px;
      border-bottom: solid 1px #f0f1f8;
      padding: 15px 20px;
      margin: 0;
    }
  }
`;

export default GlobalStyles;

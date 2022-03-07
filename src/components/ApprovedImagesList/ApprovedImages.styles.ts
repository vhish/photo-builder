import styled from "styled-components";

export const ApprovedImagesWrapper = styled.div`
   {
    //width: 50px;
    //height: 50px;
    //display: flex;
    //justifycontent: space-between;
    //alignitems: row;
    //backgroundcolor: #eeeef0;
    //margintop: 20px;
    //border: 1px solid rgb(219 219 231);
     
  }
`;

export const ApprovedImagesContainer = styled.div`
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
    height: 100%;
`;

export const ApprovedImagesListContainer = styled.div`
  padding: 15px 20px 0 20px;
`

export const ApprovedImage = styled.div`
  display: inline-block;
  margin-right: 5px;
  div {
    width: 100px;
    height: 60px;
    background-size: 100%;
  }

  img {
    display: inline-block;
  }
  
`

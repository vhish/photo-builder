import styled from "styled-components";

export const ImageContentWrapper = styled.div`
  width: 100%;
  height: 400px;
  justifycontent: center;
  alignitems: center;
  background-color: #e3e8f0;
  border: 1px solid rgb(219 219 231);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  
  button {
    background: transparent;
    
    border: none;
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  
  display: flex;
  column-gap: 5px; /* ⬄ only */
  padding: 15px 20px;
`;

export const ActionButton = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  gap: 10px;
  button {
    border: none;
    border-radius: 50px;
    //width: 100px;
    cursor: pointer;
    width: 100%;
  }
   button.approve {
     background: #3A55E6;
   }
  button.reject {
    background: #444545;
  }
`;

export const ActionText = styled.div`
  p {
    text-align: center;
  }
`;

export const ImageSection= styled.div`
  padding: 15px 20px;
`

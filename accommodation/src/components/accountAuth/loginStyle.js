import styled from "styled-components";

export const MainContainer = styled.div.attrs({ className: "main-container" })`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LeftContainer = styled.div.attrs({ className: "left-container" })`
  background-color: #002c3f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div.attrs({ className: "right-container" })`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const BuildingImage = styled.img.attrs({ className: "img-fluid" })`
  position: relative;
  bottom: 4%;
`;



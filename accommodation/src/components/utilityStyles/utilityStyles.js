import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1240px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
export const Container = styled.div`
  max-width: 1240px;
`;
export const LeftContainer = styled.div.attrs({ className: "left-container" })`
  background-color: #002c3f;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  @media (min-width: 0px) and (max-width: 575px) {
    height: max-content;
    padding-bottom: 2%;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BuildingImage = styled.img.attrs({ className: "img-fluid" })`
  position: relative;
  bottom: 4%;
`;
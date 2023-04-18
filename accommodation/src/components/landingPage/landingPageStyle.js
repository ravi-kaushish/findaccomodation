import styled from "styled-components";
import WhiteBuildings from "../../images/Whitebuildings.svg";
import Ellipse1 from "../../images/Ellipse31.svg";
import Ellipse2 from "../../images/Ellipse2.svg";
import Volbuilding from "../../images/vol-building2.svg";
import ReqBuilding from "../../images/req-building.svg";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  padding: 1.25rem 2.75rem;
  @media (max-width: 1240px) {
    margin: 0;
  }
`;

export const TopContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  padding-left: 4%;
  background-image: url(${WhiteBuildings}), url(${Ellipse1}), url(${Ellipse2});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: right bottom, top left, top left;
`;

export const MainHeading = styled.p``;
export const MidContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2%; */
`;

export const VolunteerContainer = styled.div`
  
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  border-radius: 8px;
  background-image: url(${Ellipse1}), url(${Ellipse2}), url(${Volbuilding});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top left, top left, right bottom;
  padding-left: 3.15rem;
  padding-right: 2.12rem;
  
`;

export const RequirementContainer = styled.div`
  
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  border-radius: 8px;
  background-image: url(${Ellipse1}), url(${Ellipse2}), url(${ReqBuilding});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top left, top left, right bottom;
  padding-left: 3.15rem;
  padding-right: 2.12rem;
  
`;

export const DynamicContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ShortlistContainer = styled.div`
  width: 55%;
  margin-right: 4%;
`;

export const NotificationContainer = styled.div`
  width: 40%;
`;

export const Button = styled.button`
  background-image: linear-gradient(180deg, #ffb81c, #f0a500);
  border-radius: 50px;
`;

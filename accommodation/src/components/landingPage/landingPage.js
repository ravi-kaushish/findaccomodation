import React from "react";
import {
  MainContainer,
  TopContainer,
  MainHeading,
  MidContainer,
  VolunteerContainer,
  RequirementContainer,
  DynamicContainer,
  ShortlistContainer,
  NotificationContainer,
  Button,} from "./landingPageStyle";
import { Wrapper,Container } from "../utilityStyles/utilityStyles";  
import Navbar from "../navbar/navbar";
import Cupboard from "../../images/cupboard.svg";
import Mail from "../../images/mail.svg";

const LandingPage = () => {



  const handleAvailableAccommodation = (event) => {
    event.preventDefault();
    window.location.href=`/availableaccommodation`;
  }


  return (
    <>
    <Navbar />
    <Wrapper >
    <Container>
      
      <MainContainer className="shadow-sm">
        <TopContainer className="top-container">
          <p style={{ color: "black", display: "block", marginTop: "4%" }}>
            Welcome, John Doe
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "1% 10%",
            }}
          >
            <MainHeading
              style={{ display: "inline-block", marginLeft: "-13%" }}
            >
              Let's find your <b>Accommodation</b>
            </MainHeading>
            <Button className="btn" onClick={handleAvailableAccommodation} style={{ height: "fit-content" }}>
              See Available Accomodation
            </Button>
          </div>
        </TopContainer>
        <h3 style={{ margin: "2% 0" }}>
          Be a Volunteer and Help your ally in finding their accommodation
        </h3>
        <MidContainer>
          <VolunteerContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginBottom: "6%",
              }}
            >
              <p style={{ color: "black", marginTop: "9%" }}>
                Help each other finding an accommodation <br />
                Participation is appreciated and is completely voluntary, with
                emphasis on privacy and security of an individual.
              </p>
              <Button className="btn">Be a Volunteer</Button>
            </div>
          </VolunteerContainer>
          <RequirementContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <p style={{ color: "black", marginTop: "9%" }}>
                Find Your Accommodation is an online platform for CGI Community
                Post your requirement .
              </p>
              <Button className="btn" style={{ marginTop: "3%" }}>
                Post your Requirement
              </Button>
            </div>
          </RequirementContainer>
        </MidContainer>
        <DynamicContainer>
          <ShortlistContainer>
            <p style={{ color: "black" }}>Shortlisted By You</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0px 4px 10px rgba(66, 76, 97, 0.15)",
                borderRadius: "8px",
              }}
            >
              <img src={Cupboard}></img>
              <p style={{ color: "black" }}>
                You don't have any shortlisting yet!
              </p>
              <p style={{ color: "black" }}>
                Take your time to find the perfect accommodation your ideal
                space is just a few clicks away.
              </p>
            </div>
          </ShortlistContainer>
          <NotificationContainer>
            <p style={{ color: "black" }}>Notification</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0px 4px 10px rgba(66, 76, 97, 0.15)",
                borderRadius: "8px",
              }}
            >
              <img src={Mail} />
              <p style={{ color: "black" }}>No Notifications Right Now!</p>
              <p style={{ color: "black" }}>
                We'll notify you when something arrives.
              </p>
            </div>
          </NotificationContainer>
        </DynamicContainer>
      </MainContainer>
    </Container>
    </Wrapper >
    </>
  );
};

export default LandingPage;

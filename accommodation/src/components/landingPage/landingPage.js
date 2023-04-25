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
  Button,
} from "./landingPageStyle";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import Navbar from "../navbar/navbar";
import Cupboard from "../../images/cupboard.svg";
import Mail from "../../images/mail.svg";
import "./landingPage.css";
import Interest from "../interest/interest";
import Notification from "../notification/notification";

const LandingPage = ({ user }) => {
  const handleAvailableAccommodation = (event) => {
    event.preventDefault();
    window.location.href = `/availableaccommodations`;
  };
  const handleVolunteer = (event) => {
    event.preventDefault();
    window.location.href = `/form`;
  };
  const handlePostReq = (event) => {
    event.preventDefault();
    window.location.href = `/requirementform`;
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container className="main-wrapper">
          <div className="container-fluid ">
            <TopContainer
              className="row"
              style={{ paddingBottom: "3.87rem", marginTop: "1.25rem" }}
            >
              <div className="col-7">
                <p
                  className="landingPage__head-para"
                  style={{
                    color: "black",

                    marginTop: "3.3rem",
                  }}
                >
                  Welcome, {user}
                </p>
                <p className="landingPage__mainheading">
                  Let's find your <b>Accommodation</b>
                </p>
              </div>
              <div className="col-md-5" style={{ marginTop: "5.87rem" }}>
                <Button
                  className="btn"
                  style={{
                    height: "fit-content",
                    marginLeft: "3.3rem",
                    marginRight: "2.3rem",
                    padding: "0",
                  }}
                  onClick={handleAvailableAccommodation}
                >
                  <p
                    className="landingPage__btn-p"
                    style={{ margin: "1rem 2rem" }}
                  >
                    See Available Accommodations
                  </p>
                </Button>
              </div>
            </TopContainer>
            <div className="row">
              <div className="col">
                <p className="landingPage__mid-p" style={{ margin: "2% 0" }}>
                  Be a <strong>Volunteer</strong> and <strong>Help</strong> your
                  ally in finding their accommodation
                </p>
              </div>
            </div>

            <MidContainer className="row gap-4">
              <VolunteerContainer className="col-md">
                <p
                  className="landingPage__p"
                  style={{ color: "black", marginTop: "9%", marginBottom: "0" }}
                >
                  Help each other finding an accommodation.
                </p>
                <p className="landingPage__p" style={{ margin: "0" }}>
                  Participation is appreciated and is completely voluntary, with
                  emphasis on privacy and security of an individual.
                </p>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <Button
                        style={{
                          padding: "0",
                          marginBottom: "2.31rem",
                          marginTop: "1.56rem",
                        }}
                        onClick={handleVolunteer}
                        className="btn"
                      >
                        <p
                          style={{ margin: "1rem 2rem" }}
                          className="landingPage__btn-p"
                        >
                          Be a Volunteer
                        </p>
                      </Button>
                    </div>
                    <div className="col">
                      <button style={{marginTop: "1.56rem"}} className="landingPage__result-btn">
                        <p
                          className="landingPage__btn-p"
                          style={{ margin: "1rem 1.5rem 0.8rem" }}
                        >
                          See Open Results
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </VolunteerContainer>
              <RequirementContainer className="col-md ">
                <p
                  className="landingPage__p"
                  style={{ color: "black", marginTop: "9%" }}
                >
                  Find Your Accommodation is an online platform for CGI
                  Community Post your requirement .
                </p>
                <Button
                  className="btn"
                  style={{
                    marginTop: "3%",
                    padding: "0",
                    marginBottom: "2.5rem",
                    marginTop: "1.5rem",
                  }}
                  onClick={handlePostReq}
                >
                  <p
                    style={{ margin: "1rem 2rem" }}
                    className="landingPage__btn-p"
                  >
                    Post Your Requirement
                  </p>
                </Button>
              </RequirementContainer>
            </MidContainer>
            <DynamicContainer className="row gap-4">
              <ShortlistContainer className="col-md-7">
                <p className="landingPage__head" style={{ color: "black" }}>
                  Interest Sent
                </p>

                <div className="row row-cols-sm-2 ">
                  <div className="col-sm">
                    <Interest />
                  </div>
                  <div className="col-sm">
                    <Interest />
                  </div>
                  <div className="col-sm">
                    <Interest />
                  </div>
                </div>
              </ShortlistContainer>
              <NotificationContainer className=" col-md">
                <p className="landingPage__head" style={{ color: "black" }}>
                  Notifications
                </p>
                <div className="col-12" style={{ marginBottom: "1rem" }}>
                  <Notification />
                </div>
                <div className="col-12">
                  <Notification />
                </div>
              </NotificationContainer>
            </DynamicContainer>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default LandingPage;

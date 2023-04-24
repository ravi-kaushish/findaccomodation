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

const LandingPage = ({user}) => {
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
        <Container>
          {/* <MainContainer>
            <TopContainer className="top-container">
              <p
                className="landingPage__head-para"
                style={{
                  color: "black",

                  marginTop: "3.3rem",
                }}
              >
                Welcome, John Doe
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  margin: "1rem 0",
                }}
              >
                <p className="landingPage__mainheading">
                  Let's find your <b>Accommodation</b>
                </p>
                <Button
                  className="btn"
                  style={{
                    height: "fit-content",
                    marginLeft: "3.3rem",
                    marginRight: "2.3rem",
                    padding: "0",
                  }}
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
            <div>
              <p className="landingPage__mid-p" style={{ margin: "2% 0" }}>
                Be a <strong>Volunteer</strong> and <strong>Help</strong> your
                ally in finding their accommodation
              </p>
            </div>
            <div className="contianer-fluid flex-row d-flex justify-content-center">
              <div className="row">
                <div className="col">
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
                      <p
                        className="landingPage__p"
                        style={{ color: "black", marginTop: "9%" }}
                      >
                        <p className="landingPage__p" style={{ margin: "0" }}>
                          Help each other finding an accommodation{" "}
                        </p>
                        <p className="landingPage__p" style={{ margin: "0" }}>
                          Participation is appreciated and is completely
                          voluntary, with emphasis on privacy and security of an
                          individual.
                        </p>
                      </p>
                      <Button
                        style={{ padding: "0", marginBottom: "2.31rem" }}
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
                  </VolunteerContainer>
                </div>
                <div className="col">
                  <RequirementContainer>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
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
                          marginBottom: "2.6rem",
                        }}
                      >
                        <p
                          style={{ margin: "1rem 2rem" }}
                          className="landingPage__btn-p"
                        >
                          Post Your Requirement
                        </p>
                      </Button>
                    </div>
                  </RequirementContainer>
                </div>
              </div>
            </div>
            <DynamicContainer>
              <ShortlistContainer>
                <p className="landingPage__head" style={{ color: "black" }}>
                  Interest Sent
                </p>
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
                  <img
                    src={Cupboard}
                    style={{ margin: "3rem 17.5rem 0 " }}
                  ></img>
                  <p
                    className="landingPage__dyn-p"
                    style={{
                      color: "black",
                      margin: "1rem 0",
                      textAlign: "center",
                    }}
                  >
                    You don't have any shortlisting yet!
                  </p>
                  <p
                    className="landingPage__p "
                    style={{
                      color: "black",
                      width: "60%",
                      textAlign: "center",
                      marginBottom: "3.3rem",
                    }}
                  >
                    Take your time to find the perfect accommodation your ideal
                    space is just a few clicks away.
                  </p>
                </div>
              </ShortlistContainer>
              <NotificationContainer>
                <p className="landingPage__head" style={{ color: "black" }}>
                  Notifications
                </p>
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
                  <img src={Mail} style={{ margin: "3.5rem 9.6rem 0" }} />
                  <p
                    className="landingPage__dyn-p"
                    style={{
                      color: "black",
                      textAlign: "center",
                      margin: " 1rem 0",
                    }}
                  >
                    No Notifications Right Now!
                  </p>
                  <p
                    className="landingPage__p"
                    style={{
                      color: "black",
                      textAlign: "center",
                      marginBottom: "4.06rem",
                    }}
                  >
                    We'll notify you when something arrives.
                  </p>
                </div>
              </NotificationContainer>
            </DynamicContainer>
          </MainContainer> */}
          <div className="container-fluid">
            <TopContainer className="row" style={{paddingBottom:"3.87rem"}}>
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
              <div className="col-md-5" style={{marginTop:"5.87rem"}}>
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
            <div className="row" >
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
                  style={{ color: "black", marginTop: "9%",marginBottom:"0" }}
                >
                  Help each other finding an accommodation.
                </p>
                <p className="landingPage__p" style={{ margin: "0" }}>
                  Participation is appreciated and is completely voluntary, with
                  emphasis on privacy and security of an individual.
                </p>
                <Button
                  style={{ padding: "0", marginBottom: "2.31rem" ,marginTop:"1.56rem" }}
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
                    marginTop:"1.5rem"
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
            <DynamicContainer className="row gap-4" >
              <ShortlistContainer className="col-md-7">
                <p className="landingPage__head" style={{ color: "black" }}>
                  Interest Sent
                </p>

                <div className="row row-cols-sm-2 ">
                  <div className="col-sm"><Interest /></div>
                  <div className="col-sm"><Interest /></div>
                  <div className="col-sm"><Interest /></div>
                </div>
              </ShortlistContainer>
              <NotificationContainer className=" col-md">
                <p className="landingPage__head" style={{ color: "black" }}>
                  Notifications
                </p>
                <div className="col-12" style={{border:"solid 1px black", marginBottom:"1rem"}}><Notification /></div>
                <div className="col-12" style={{border:"solid 1px black"}}><Notification /></div>
                
              </NotificationContainer>
            </DynamicContainer>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default LandingPage;

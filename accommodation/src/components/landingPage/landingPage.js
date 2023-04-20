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

const LandingPage = () => {



  const handleAvailableAccommodation = (event) => {
    event.preventDefault();
    window.location.href=`/availableaccommodation`;
  }


  return (
    <>

      <Navbar />
      <Wrapper>
        <Container>
          <MainContainer>
            <TopContainer className="top-container">
              <p
                className="landingPage__head-para"
                style={{
                  color: "black",
                  display: "block",
                  marginTop: "3.3rem",
                }}
              >
                Welcome, John Doe

              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "",
                  margin: "1rem 0",
                }}
              >
                <p
                  className="landingPage__mainheading"
                  style={{ display: "inline-block" }}
                >
                  Let's find your <b>Accommodation</b>
                </p>
                <Button
                  className="btn"
                  style={{ height: "fit-content", marginLeft: "3.3rem" }}
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
            <p className="landingPage__mid-p" style={{ margin: "2% 0" }}>
              Be a <strong>Volunteer</strong> and <strong>Help</strong> your ally in finding their accommodation
            </p>
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
                        <p className="landingPage__p" style={{margin:"0"}}>Help each other finding an accommodation </p>
                        <p className="landingPage__p" style={{margin:"0"}}>
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
                  <img src={Cupboard}></img>
                  <p className="landingPage__dyn-p" style={{ color: "black" }}>
                    You don't have any shortlisting yet!
                  </p>
                  <p className="landingPage__p" style={{ color: "black" }}>
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
                  <img src={Mail} />
                  <p className="landingPage__dyn-p" style={{ color: "black" }}>
                    No Notifications Right Now!
                  </p>
                  <p className="landingPage__p" style={{ color: "black" }}>
                    We'll notify you when something arrives.
                  </p>
                </div>
              </NotificationContainer>
            </DynamicContainer>
          </MainContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default LandingPage;

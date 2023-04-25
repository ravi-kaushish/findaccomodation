import React from "react";
import cgLogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";
import vector from "../../images/vector.svg";
import {
  Wrapper,
  Container,
  MainContainer,
  LeftContainer,
  RightContainer,
  BuildingImage,
} from "../utilityStyles/utilityStyles";

const ForgotPassword = () => {



  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href=`/otp`;
  }



  return (
    <Wrapper>
      <Container>
        <MainContainer className="container " style={{ padding: "0 6.7%" }}>
          <div className="row main-row " style={{ height: "35.75rem" }}>
            <LeftContainer className="col-6 d-sm-flex d-none ">
              <div className="row">
                <div
                  className="col-12 text-center"
                  style={{ color: "#ffffff" }}
                >
                  <BuildingImage
                    className="img-fluid"
                    src={building}
                    style={{}}
                  />
                  <p className="find-accomo">Find Your Accommodation</p>
                  <p className="description">
                    This is an online platform that helps other to find
                    accommodation
                  </p>
                </div>
              </div>
            </LeftContainer>
            <RightContainer className="col-12 col-sm-6 right-container ">
              <div className="row" style={{ padding: "0 4.5rem" }}>
                <div className="col-12 text-center mb-4 mt-5">
                  <img className="img-fluid" src={cgLogo} />
                  <h4 className="login__main-heading mt-3">Forgot Password?</h4>
                  <p style={{ color: "black" }} className=" d-sm-none d-flex">
                    This is an online platform that helps other to find
                    accommodation
                  </p>
                </div>
              </div>
              <div
                className="row"
                style={{ width: "100%", padding: "0 1.21rem" }}
              >
                <div className="col-12">
                  <div className="container w-100 g-2">
                    <div
                      className="col-12 d-flex"
                      style={{
                        backgroundColor: "#E3F3FC",
                        margin: "1.5rem 0 2.5rem",
                      }}
                    >
                      <img
                        src={vector}
                        alt=""
                        className="img2"
                        style={{ margin: "0 0.5rem 0.7rem" }}
                      />
                      <p
                        className="mb-2 mt-2 alerttext"
                        style={{ color: "black" }}
                      >
                        Please enter your email address below. You will receive
                        a OTP to reset your password.
                      </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <label for="email" className="form-label">
                        Email ID
                      </label>
                      <input type="email" className="form-control" />

                      <button className="btn btn-warning w-100 mt-3">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="container text-center"
                style={{ marginTop: "5%", marginBottom: "5.87rem" }}
              >
                <a href="/" className="link-primary">
                  Back to login
                </a>
              </div>
            </RightContainer>
          </div>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;
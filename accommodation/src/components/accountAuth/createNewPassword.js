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

const CreateNewPassword = () => {
  return (
    <Wrapper>
      <Container>
        <MainContainer className="container " style={{padding:"0 2.7%"}}>
          <div className="row main-row " style={{ height: "35.75rem" }}>
            <LeftContainer className="col-6 d-sm-flex d-none ">
              <div className="row">
                <div className="col-12 text-center">
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
                  <h4 className="login__main-heading mt-3">
                    Create New Password
                  </h4>
                  <p style={{ color: "black" }} className=" d-sm-none d-flex">
                    This is an online platform that helps other to find
                    accommodation
                  </p>
                </div>
              </div>
              <div
                className="row"
                style={{ width: "100%", padding: "0 1.21rem",marginTop:"1.5rem" }}
              >
                <div className="col-12">
                  <div className="container w-100 g-2">
                    <form>
                      <label for="email" className="form-label">
                        New Password
                      </label>
                      <input type="password" className="form-control" />
                      <label
                        for="password"
                        className="form-label"
                        style={{ marginTop: "1rem" }}
                      >
                        Confirm Password
                      </label>
                      <input type="password" className="form-control" />
                    </form>
                    <button className="btn btn-warning w-100 mt-3">
                      Submit
                    </button>
                    <div
                      className="col-12 d-flex"
                      style={{
                        backgroundColor: "#E3F3FC",
                        margin: "1.5rem 0 4.18rem",
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
                        Must contain 8 characters, at least one character and
                        one number.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RightContainer>
          </div>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default CreateNewPassword;

import React from "react";
import {
  Wrapper,
  Container,
  MainContainer,
} from "../utilityStyles/utilityStyles";
import Cglogo from "../../images/cgLogo.svg";
import GreenThumb from "../../images/Green-ThumbsUp.svg";
import Alert from "../../images/alert.svg";
import "./postSuccessful.css";

const postRequirement = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <MainContainer className="container ">
            <div
              className="container justify-content-center text-center changedPassword__maincontainer"
              style={{ width: "65%", padding: "2.5rem" }}
            >
              <div className="">
                <img src={GreenThumb} />
                <p
                  className="changedPassword__heading"
                  style={{ marginTop: "1.6rem", marginBottom: "0" }}
                >
                  Thank You for posting requirement!
                </p>
                <div
                  className=" d-flex flex-direction-row changedPassword__alertbox"
                  style={{ marginTop: "1.5rem"}}
                >
                  <p
                    className="changedPassword__alertbox-p"
                    style={{ margin: "0.6rem" }}
                  >
                    Your participation is greatly appreciated. As for now your
                    details has been successfully registered.
                  </p>
                </div>

                <div className="d-flex nspace mb-4">
                  <div className="col-6 " >
                    <button
                      className="btn w-100 mt-3"
                      style={{ fontWeight: "600" , borderColor:'black' }}
                    >
                      Go to Home
                    </button>
                  </div>

                  <div className="col-6" style={{marginLeft:'0.5rem'}}>
                    <button
                      className="btn btn-warning w-100 mt-3"
                      style={{ fontWeight: "600"}}
                    >
                      Post Requirement  
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </MainContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default postRequirement;

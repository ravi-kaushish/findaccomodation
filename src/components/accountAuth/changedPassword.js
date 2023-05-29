import React from "react";
import {
  Wrapper,
  Container,
  MainContainer,
} from "../utilityStyles/utilityStyles";
import Cglogo from "../../images/cgLogo.svg";
import Tick from "../../images/circle.svg";
import Alert from "../../images/alert.svg";
import "./changedPassword.css";
import { func } from "prop-types";

const changedPassword = () => {

  function handleNewPassLogin (event){
    event.preventDefault();
    window.location.href = `/landingpage`;
  }

  return (
    
    <>
      <Wrapper>
        <Container>
          <MainContainer className="container ">
            <div className="container justify-content-center text-center changedPassword__maincontainer" style={{width:'80%' , padding:'2.5rem'}}>
              <div className="row d-none d-sm-flex">
                <div className="col-12">
                  <img src={Cglogo} className="" />
                </div>

                <p className="changedPassword__main-heading" style={{marginTop:'1rem' ,  marginBottom:'0'}}>Let's Find Your Accommodation</p>
              </div>

              <div className="" style={{marginTop:'2.68rem' }}>
                <img src={Tick}/>
                <p className="changedPassword__heading" style={{marginTop:'1.6rem' ,marginBottom:'0'}}> Password Successfully Changed</p>
                <div className=" d-flex flex-direction-row changedPassword__alertbox" style={{marginTop:'1.5rem'}}>
                  <img src={Alert} alt="" style={{ marginLeft: "0.62rem" }} />
                  <p className="changedPassword__alertbox-p" style={{margin:'0.6rem'}}>
                  Your Password has been successfully changed. 
                  </p>
                </div>

                <div className="row nspace mb-4">
                  <div className="col-12 ">
                    <button className="btn btn-warning w-100 mt-3" style={{fontWeight:'600'}} onClick={handleNewPassLogin}>
                    Continue
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

export default changedPassword;

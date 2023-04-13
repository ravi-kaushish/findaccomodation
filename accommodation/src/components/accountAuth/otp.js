import React from "react";
import "./otp.css";
import arrow from "../../images/back_arrow.png";
import cglogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";

const Otp = () => {
  return (
    <>
      <div className="container shadow-sm">
        <div className="container main-container " style={{ padding: "0" }}>
          <div className="row main-row " style={{ height: "552px" }}>
            <div
              className="col-6 left-container d-none d-sm-flex"
              style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
            >
              <div className="row" style={{ width: "85%" }}>
                <div className="col-12 text-center">
                  <img
                    className="img-fluid"
                    src={building}
                    style={{ position: "relative", bottom: "4%" }}
                  />
                  <p className="find-accomo">Find Your Accommodation</p>
                  <p className="description">
                    This is an online platform that helps other to find
                    accommodation
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 right-container "
              style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
            >
              <div className="row">
                <div className="col-12 text-center mb-4 mt-5">
                  <img className="img-fluid" src={cglogo} />
                  <h4 className="main-heading mt-3">
                    Let's Find Your Accommodation
                  </h4>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-12  "
                  style={{ width: "80%", marginLeft: "3.2rem" }}
                >
                  <a>
                    <img src={arrow} />{" "}
                    <span className="mail">email@email.com</span>
                  </a>
                  <h4 className="mt-4 enter-code">Enter Code</h4>
                  <p className="code-msg">
                    Please type the Six digit code we have sent on your
                    Microsoft account.
                  </p>
                  <form style={{ marginBottom: "4%" }}>
                    <input
                      type="text"
                      id="otp"
                      className=""
                      placeholder="Code"
                      style={{ width: "100%" }}
                    />
                  </form>
                  <button className="btn btn-warning w-100 mt-3">Verify</button>
                </div>
              </div>
              <div
                className="container text-center"
                style={{ marginTop: "5%" }}
              >
                <a className="link-primary">Use Another Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;

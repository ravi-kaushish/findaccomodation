import React from "react";
import "./interest.css";
import interest from "../../images/interest.svg";

const Interest = () => {
  return (
    <>
      <div
        className="container interest__container"
        style={{ marginBottom: "1rem" }}
      >
        <div className="row">
          <div className="col interest__name" style={{ marginTop: "1rem" }}>
            <div style={{display:"flex"}}>
              <div style={{marginRight:"1rem"}}>
                <img className="img-fluid" src={interest} />
              </div>
              <div>
                <a>Nakul Bagchi</a>
                <p>CGI 154</p>
              </div>
            </div>
          </div>
          <div className="col-12" style={{marginBottom:"1rem"}}>
            <p className="interest__para" style={{marginBottom:"0.3rem"}}>LandMark : Block B, Sector 15 Noida</p>
            <a  className="a-link" >View On Map</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interest;

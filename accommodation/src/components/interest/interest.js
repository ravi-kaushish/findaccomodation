import React from "react";
import "./interest.css"

const Interest = () => {
  return (
    <>
      <div className="container interest__container" style={{marginBottom:"1rem"}}>
        <div className="row">
          <div className="col">
            <img className="img-fluid" />
            <a>Nakul Bagchi</a>
            <p>CGI 154</p>
          </div>
          <div className="col-12">
            <p>LandMark:Block B, Sector 15 Noida</p>
            <a>View On Map</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interest;

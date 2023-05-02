import React, { useState } from "react";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import "./availableAccommodations.css";
import Data from "./dummyData";
import Navbar from "../navbar/navbar";
import Blueright_arrow from "../../images/Blueright-arrow.svg";
import gps from "../../images/GPS.svg";
import office from "../../images/office.svg";
import metro from "../../images/Metrotransit.svg";
import greencheck from "../../images/Check-outlinegreen check.svg";
import userphoto from "../../images/userphoto.svg";
import search from "../../images/search.svg";
import location from "../../images/location.svg";
import allowed from "../../images/allowed.svg";
import not_allowed from "../../images/Not Allowed.svg";
import clock from "../../images/clock.svg";
import owner_name from "../../images/owner name.svg";
import call from "../../images/call.svg";
import greentick from "../../images/greentickfinal.svg";
import femaleIcon from "../../images/femaleIcon.svg";
import OpenRequirements from "./openRequirements";
import CheckboxFilterAcco from "./checkboxFilterAcco";
import CheckboxFilterReq from "./checkboxFilterReq";
import NoDataaPage from "./noDataaPage";
import { Link } from "react-router-dom";

const OffcanvusAvailableAccommodation = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header d-flex justify-content-end mb-0">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body mt-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col 12">
                <div>
                  <div className="row mb-3">
                    <div className="d-flex">
                      <div className="me-2">
                        <img src={userphoto} alt="" />
                      </div>
                      <div className="ms-1">
                        <p className="mb-0">{/* {data.fullName} */}</p>
                        <p className="mb-0">{/* {data.CGIID} */}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div>
                      <p className="mb-0">
                        Landmark:
                        {/* {data.sector} */}, Noida
                      </p>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="d-flex">
                      <img src={gps} alt="" />
                      <p className="ms-1 mb-0">View on Map</p>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="d-flex">
                      <div className="nearby-location py-2">
                        <div className="d-flex justify-content-center mb-1">
                          <img src={office} alt="" />
                        </div>
                        <div className="d-flex justify-content-center mb-1">
                          <p className="text mb-0">
                            {/* {data.distance}  */}
                            kms from Sector-3 office
                          </p>
                        </div>
                      </div>
                      <div className="nearby-location ms-3 py-2">
                        <div className="d-flex justify-content-center">
                          <img src={metro} alt="" />
                        </div>
                        <div className="d-flex justify-content-center">
                          <p className="text mb-0">
                            Nearest metro {/* {data.nearestMetro} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="d-flex">
                      <img src={greencheck} alt="" className="me-2" />
                      <p className="mb-0">I'm looking for a room-mate</p>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div>
                      <p className="mb-2">Accommodation Type</p>
                      <p className="mb-0">
                        {/* {data.accommodationType}  */}|{" "}
                        {/* {data.flatType}  */}| {/* {data.furnishedType} */}
                      </p>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="amenities-text">
                      <p className="mb-2">Amenities</p>
                    </div>
                    <div className="d-flex mb-1">
                      <div className="d-flex justify-content-center amenities p-2 me-3">
                        <img src={allowed} alt="" className="me-2" />
                        <p className="mb-0">WiFi</p>
                      </div>
                      <div className="d-flex justify-content-center amenities p-2 me-3">
                        <img src={allowed} alt="" className="me-2" />
                        <p className="mb-0">Food</p>
                      </div>
                      <div className="d-flex justify-content-center amenities p-2">
                        <img src={allowed} alt="" className="me-2" />
                        <p className="mb-0">Kitchen</p>
                      </div>
                    </div>
                    <div className="d-flex mt-2">
                      <div className="d-flex justify-content-center amenities p-2 me-3">
                        <img src={allowed} alt="" className="me-2" />
                        <p className="mb-0">Washing Machine</p>
                      </div>
                      <div className="d-flex justify-content-center amenities p-2">
                        <img src={allowed} alt="" className="me-2" />
                        <p className="mb-0">Induction</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="habits-text">
                      <p className="mb-2">House Habits</p>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex col-4 habits p-2 me-3">
                        <img src={not_allowed} alt="" className="me-2" />
                        <p className="mb-0">Non-Veg</p>
                      </div>
                      <div className="d-flex col-4 habits p-2 me-3">
                        <img src={not_allowed} alt="" className="me-2" />
                        <p
                          style={{
                            marginBottom: "0.0rem",
                            marginRight: "0.25rem",
                          }}
                        >
                          Smoking
                        </p>
                      </div>
                      <div className="d-flex col-4 amenities ">
                        <div>
                          <img src={allowed} alt="" className="me-2" />
                        </div>
                        <p className="mb-0">Drinking</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div>
                      <p className="mb-2">Preferred Time to Contact</p>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex justify-content-center amenities p-2 me-3">
                        <img src={allowed} alt="" className="me-2" />
                        <p className="mb-0">Weekend</p>
                      </div>
                      <div className="d-flex justify-content-center amenities p-2">
                        <img src={clock} alt="" className="me-2" />
                        <p className="mb-0">11:00 AM - 04:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div>
                      <p className="mb-2">Owner Information</p>
                    </div>
                    <div className="mt-1">
                      <div className="d-flex mb-3">
                        <img src={owner_name} alt="" className="me-2" />
                        <p className="mb-0">John Doe</p>
                      </div>
                      <div className="d-flex">
                        <img src={call} alt="" className="me-2" />
                        <p className="mb-0">9876543210</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div>
                      <button
                        type="button"
                        className="w-100 border-0 justify-content-center interested"
                      >
                        I'm interested
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffcanvusAvailableAccommodation;

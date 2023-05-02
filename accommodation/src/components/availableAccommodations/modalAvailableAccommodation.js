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

const ModalAvailableAccommodation = () => {
  const [message, setMessage] = useState("");

  const handlemessageText = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                style={{
                  color: "#343435",
                  fontWeight: "700",
                }}
              >
                Request Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="d-flex">
                    <div className="me-1">
                      <img src={femaleIcon} alt="" />
                    </div>
                    <div className="ms-2">
                      <div className="">
                        <p
                          className="mb-0"
                          style={{
                            color: "#28519E",
                            fontWeight: "700",
                          }}
                        >
                          {/* {data.fullName} */}
                        </p>
                      </div>
                      <div className="d-flex">
                        <div
                          className=" d-flex "
                          style={{
                            backgroundColor: "rgba(12, 100, 49, 0.1)",
                            borderRadius: "2px",
                          }}
                        >
                          <div className="ms-2">
                            <img src={greentick} alt="" />
                          </div>
                          <div className="me-2">
                            <p
                              className="mb-0 ms-2 "
                              style={{ color: "#0C9A47" }}
                            >
                              Verified
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="d-flex">
                    <div>
                      <p
                        style={{
                          color: "#343435",
                          fontWeight: "700",
                        }}
                      >
                        Email id:
                      </p>
                    </div>
                    <div>
                      <p
                        className="ms-2"
                        style={{
                          color: "#343435",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        harshitakhurana@expample.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="d-flex">
                    <div>
                      <p
                        style={{
                          color: "#343435",
                          fontWeight: "700",
                        }}
                      >
                        Contact No:
                      </p>
                    </div>
                    <div>
                      <p
                        className="ms-2"
                        style={{
                          color: "#343435",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        9876543210
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex">
                    <div>
                      <p
                        style={{
                          color: "#343435",
                          fontWeight: "700",
                        }}
                      >
                        University/College Name:
                      </p>
                    </div>
                    <div>
                      <p
                        className="ms-2"
                        style={{
                          color: "#343435",
                          fontWeight: "500",
                        }}
                      >
                        Chitkara University
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="d-flex">
                    <div>
                      <p
                        style={{
                          color: "#343435",
                          fontWeight: "700",
                        }}
                      >
                        Offer Incentive:
                      </p>
                    </div>
                    <div
                      style={{
                        marginLeft: "0.37rem",
                        width: "10%",
                      }}
                    >
                      <input />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mb-1">
                    <p
                      className="mb-0"
                      style={{
                        color: "#343435",
                        fontWeight: "700",
                      }}
                    >
                      Message:
                    </p>
                  </div>
                  <div>
                    <div className="mb-3">
                      <textarea
                        value={message}
                        onChange={handlemessageText}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        className="border-0 py-2 px-3 w-100 interested"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Send Request
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAvailableAccommodation;

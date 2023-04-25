import React ,{useState}from "react";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import "./availableAccommodations.css"
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

const AvailableAccommodations = () => {

    
        const [message, setMessage] = useState("");
        const [mapaddress, setMapAddress] = useState("Pinnacle Business Park");
      
        const handlemessageText = (event) => {
          const { value } = event.target;
          setMessage(value);
        };
      
        const findAddressmap = (event) => {
          const { value } = event.target;
          setMapAddress(value);
        };
      
        const handleSubmit = () => {
          const data = {
            messgae: message,
            mapaddress: mapaddress,
          };
      
          console.log(data);
        }
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <div
            className="container-fluid"
            style={{ backgroundColor: "#F5F5F5", margin: "0", padding: " 1.31rem 2.68rem" }}
          >
            <div className="mt-0">
              <div className="">
                <div className="">
                  <div className="row mt-0 mb-2">
                    <div className=" col text-secondary">
                      <p className="mb-0 mt-3">Home / Available Accomodation</p>
                    </div>
                  </div>
                  <div className="row mt-1 mb-2">
                    <div className="col">
                      <h className="heading">Nearby Available Accommodation</h>
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col">
                      <div className="row mb-2">
                        <div className="col-4">
                          <div class="col-8 w-100">
                            <div
                              class="form d-flex border w-150 px-3"
                              style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "4px",
                              }}
                            >
                              <span className="mt-1">
                                <img src={location}></img>
                              </span>

                              <input
                                type="text"
                                class="form-control form-input no-border"
                                value={mapaddress}
                                onChange={findAddressmap}
                                style={{ border: "none", outlineStyle: "none" }}
                              />
                              <span class="left-pan mt-1">
                                <img src={search} alt="img" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-8 container d-flex justify-content-end gap-2">
                          <nav class="navbar navbar-expand-lg navbar-light ">
                            <div class="container-fluid d-flex gap-2">
                              <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo01"
                                aria-controls="navbarTogglerDemo01"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                              >
                                <span class="">Filter</span>
                              </button>
                              <div
                                class="collapse navbar-collapse"
                                id="navbarTogglerDemo01"
                              >
                                <ul class="navbar-nav">
                                  <li class="nav-item">
                                    <div class="btn-group">
                                      <button
                                        style={{
                                          backgroundColor: "#ffffff",
                                          border: "1px solid #E9ECEB",
                                        }}
                                        class="btn btn-secondary btn-light btn-sm dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Select Accommodation Type
                                      </button>
                                      <ul class="dropdown-menu">
                                        <div className="ps-2">
                                          <li>
                                            <div class="form-check mt-1 mb-3">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                PG
                                              </label>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="form-check mt-1">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                Flat
                                              </label>
                                            </div>
                                          </li>
                                        </div>
                                      </ul>
                                    </div>
                                  </li>

                                  <li class="nav-item mx-3">
                                    <div class="btn-group">
                                      <button
                                        class="btn btn-secondary btn-light btn-sm dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                          backgroundColor: "#ffffff",
                                          border: "1px solid #E9ECEB",
                                        }}
                                      >
                                        Select Distance
                                      </button>
                                      <ul class="dropdown-menu">
                                        <div className="ps-2">
                                          <li className="">
                                            <div class="form-check mb-3">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                0km to 2km
                                              </label>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="form-check mt-1 mb-3">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                2km to 5km
                                              </label>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="form-check mt-1 mb-3">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                5km to 8km
                                              </label>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="form-check mt-1">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                8km to 10km
                                              </label>
                                            </div>
                                          </li>
                                        </div>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="nav-item">
                                    <div class="btn-group">
                                      <button
                                        class="btn btn-secondary btn-light btn-sm dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                          backgroundColor: "#ffffff",
                                          border: "1px solid #E9ECEB",
                                        }}
                                      >
                                        House Habits
                                      </button>
                                      <ul class="dropdown-menu">
                                        <div className="ps-2">
                                          <li>
                                            <div class="form-check mt-1 mb-3">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                Non Smoker
                                              </label>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="form-check mt-1 mb-3">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                Non Drinker
                                              </label>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="form-check mt-1">
                                              <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                              />
                                              <label
                                                class="form-check-label"
                                                for="flexCheckChecked"
                                              >
                                                Vegetarian
                                              </label>
                                            </div>
                                          </li>
                                        </div>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid "
              style={{ margin: "0", padding: "0" }}
            >
              <div className="row ">
                <div className="col-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.679789251819!2d77.31854831452182!3d28.579376693236757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a79d0f4b9%3A0x8865fb53ffb94e5a!2sPinnacle%20Business%20Park!5e0!3m2!1sen!2sin!4v1681135487004!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: "0", display: "inline-block" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className=" scrollbar col-8"  style={{backgroundColor:"#F5F5F5"}}>
                  <div className=" row row-cols-2 " >
                    {Data.map((data, index) => (
                      <div key={data.id}>
                        <div className="availableAcco__card" style={{backgroundColor:"#ffffff"}}>
                          <div className="p-3">
                            <div className="d-flex mb-3">
                              <div className="me-2">
                                <img src={userphoto} alt="" />
                              </div>
                              <div className="ms-1">
                                <div
                                  className="d-flex"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasRight"
                                  aria-controls="offcanvasRight"
                                >
                                  <p className="mb-1 availableAcco__card-p-name">{data.fullName}</p>
                                  <img src={Blueright_arrow} alt="" />
                                </div>
                                <p className="mb-0  availableAcco__card-p-id">{data.CGIID}</p>
                              </div>
                            </div>

                            <div className="d-flex align-item-center" style={{marginBottom:'0.31rem'}}>
                              <p className="availableAcco__card-p-main">
                                Landmark:
                              </p>
                              <p className="availableAcco__card-p-sector">{data.sector}, Noida</p>
                            </div>

                            <div className="d-flex mb-2">
                              <img src={gps} alt="" />
                              <p className="mb-0 ms-1">View on Map</p>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="me-3 nearby-location">
                                <div className="d-flex justify-content-center">
                                  <img src={office} alt="" />
                                </div>
                                <div className="d-flex justify-content-center">
                                  <p className="mb-0 text-center px-2">
                                    {data.distance} km from Sec-3 Office
                                  </p>
                                </div>
                              </div>
                              <div className="nearby-location">
                                <div className="d-flex justify-content-center">
                                  <img src={metro} alt="" />
                                </div>
                                <div className="d-flex justify-content-center">
                                  <p className="mb-0 text-center">
                                    Nearest Metro {data.nearestMetro}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mb-3">
                              <p className="availableAcco__card-p-main" style={{marginBottom:'0.62rem'}}>Accommodation Type:</p>
                              <p>
                                {data.accommodationType} | {data.flatType}{" "}
                                {data.furnishedType
                                  ? `| ${data.furnishedType}`
                                  : ""}
                              </p>
                              <div className="d-flex">
                                <img src={greencheck} alt="" />
                                <p className="mb-0 ms-2">
                                  I am looking for a room-mate
                                </p>
                              </div>
                            </div>
                            <div>
                              <button
                                className="border-0 py-2 px-3 w-100 interested"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                I'm interested
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Modal */}
                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
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
                                            {data.fullName}
                                          </p>
                                        </div>
                                        <div className="d-flex">
                                          <div
                                            className=" d-flex "
                                            style={{
                                              backgroundColor:
                                                "rgba(12, 100, 49, 0.1)",
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
                                      <div>
                                        <p
                                          className="ms-2"
                                          style={{
                                            color: "#343435",
                                            fontWeight: "500",
                                          }}
                                        >
                                          1000
                                        </p>
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
                                        <button className="btn btn-primary">
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

                        {/* Offcanvas code */}
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
                                          <p className="mb-0">
                                            {data.fullName}
                                          </p>
                                          <p className="mb-0">{data.CGIID}</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row mb-2">
                                      <div>
                                        <p className="mb-0">
                                          Landmark: {data.sector}, Noida
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
                                              {data.distance} kms from Sector-3
                                              office
                                            </p>
                                          </div>
                                        </div>
                                        <div className="nearby-location ms-3 py-2">
                                          <div className="d-flex justify-content-center">
                                            <img src={metro} alt="" />
                                          </div>
                                          <div className="d-flex justify-content-center">
                                            <p className="text mb-0">
                                              Nearest metro {data.nearestMetro}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row mb-4">
                                      <div className="d-flex">
                                        <img
                                          src={greencheck}
                                          alt=""
                                          className="me-2"
                                        />
                                        <p className="mb-0">
                                          I'm looking for a room-mate
                                        </p>
                                      </div>
                                    </div>
                                    <div className="row mb-4">
                                      <div>
                                        <p className="mb-2">
                                          Accommodation Type
                                        </p>
                                        <p className="mb-0">
                                          {data.accommodationType} |{" "}
                                          {data.flatType} | {data.furnishedType}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="row mb-4">
                                      <div className="amenities-text">
                                        <p className="mb-2">Amenities</p>
                                      </div>
                                      <div className="d-flex mb-1">
                                        <div className="d-flex justify-content-center amenities p-2 me-3">
                                          <img
                                            src={allowed}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">WiFi</p>
                                        </div>
                                        <div className="d-flex justify-content-center amenities p-2 me-3">
                                          <img
                                            src={allowed}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">Food</p>
                                        </div>
                                        <div className="d-flex justify-content-center amenities p-2">
                                          <img
                                            src={allowed}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">Kitchen</p>
                                        </div>
                                      </div>
                                      <div className="d-flex mt-2">
                                        <div className="d-flex justify-content-center amenities p-2 me-3">
                                          <img
                                            src={allowed}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">
                                            Washing Machine
                                          </p>
                                        </div>
                                        <div className="d-flex justify-content-center amenities p-2">
                                          <img
                                            src={allowed}
                                            alt=""
                                            className="me-2"
                                          />
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
                                          <img
                                            src={not_allowed}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">Non-Veg</p>
                                        </div>
                                        <div className="d-flex col-4 habits p-2 me-3">
                                          <img
                                            src={not_allowed}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">Smoking</p>
                                        </div>
                                        <div className="d-flex col-4 amenities p-2">
                                          <img
                                            src={allowed}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">Drinking</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row mb-4">
                                      <div>
                                        <p className="mb-2">
                                          Preferred Time to Contact
                                        </p>
                                      </div>
                                      <div className="d-flex">
                                        <div className="d-flex justify-content-center amenities p-2 me-3">
                                          <img
                                            src={allowed}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">Weekend</p>
                                        </div>
                                        <div className="d-flex justify-content-center amenities p-2">
                                          <img
                                            src={clock}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">
                                            11:00 AM - 04:00 PM
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row mb-4">
                                      <div>
                                        <p className="mb-2">
                                          Owner Information
                                        </p>
                                      </div>
                                      <div className="mt-1">
                                        <div className="d-flex mb-3">
                                          <img
                                            src={owner_name}
                                            alt=""
                                            className="me-2"
                                          />
                                          <p className="mb-0">John Doe</p>
                                        </div>
                                        <div className="d-flex">
                                          <img
                                            src={call}
                                            alt=""
                                            className="me-2"
                                          />
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default AvailableAccommodations;
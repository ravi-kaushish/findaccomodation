import React from "react";
import cglogowhite from "../../images/cgLogoWhite.svg";
import profilePic from "../../images/profilePic.svg";
import bell from "../../images/bell.svg";
import dropdownArrow from "../../images/dropdownArrow.svg";
import { func } from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function handleLandingPage(event){
    event.preventDefault();
    navigate('/landingpage');
    
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#002C3F" }}
    >
      <div className="container-fluid">
        <Link style={{cursor:"pointer"}} onClick={handleLandingPage}>
          <img
            className="d-inline-block align-text-top"
            style={{ width: "155.81px", height: "35px" }}
            src={cglogowhite}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={profilePic}></img>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                <img src={bell}></img>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="mx-2" src={profilePic}></img>
                <img src={dropdownArrow}></img>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./login.css";
import cgLogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";
import {
  Wrapper,
  Container,
  MainContainer,
  LeftContainer,
  RightContainer,
  BuildingImage,
} from "../utilityStyles/utilityStyles";
import {MultiStepContext} from "../stepContext/stepContext";

const Login = () => {
  const [email, setEmail] = useState("gurnoor.toor@cginfinity.com");
  const [password, setPassword] = useState("Abc@.123");
  const navigate = useNavigate();
  
  const {currentUser,setCurrentUser}=useContext(MultiStepContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    


    axios.post("https://cg-accommodation.azurewebsites.net/login", { email, password })
      .then((response) => {
        console.log(response.data);
        setCurrentUser(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);

        navigate('/landingpage')
      })
      .catch((error) => {
        console.log(error.response.data);
        
      });
    console.log(email);
    console.log(`password: ${password} (hidden visible only on backend)`);
    
    
  };

  return (
    <Wrapper>
      <Container>
        <MainContainer className="container ">
          <div className="row main-row " style={{ height: "35.75rem" }}>
            <LeftContainer className="col-6 d-sm-flex d-none ">
              <div className="row">
                <div
                  className="col-12 text-center"
                  style={{ color: "#ffffff" }}
                >
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
                    Let's Find Your Accommodation
                  </h4>
                  <p style={{ color: "black" }} className=" d-sm-none d-flex">
                    This is an online platform that helps other to find
                    accommodation
                  </p>
                </div>
              </div>
              <div
                className="row"
                style={{ width: "100%", padding: "0 1.21rem" }}
              >
                <div className="col-12">
                  <div className="container w-100 g-2">
                    <form onSubmit={handleSubmit}>
                      <label for="email" className="form-label">
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email ID"
                      />
                      <label
                        for="password"
                        className="form-label"
                        style={{ marginTop: "1rem" }}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                      />

                      <button className="btn btn-warning w-100 mt-3">
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="container text-center"
                style={{ marginTop: "5%" }}
              >
                <a href="/forgotpassword" className="link-primary">
                  Forgot Password?
                </a>
              </div>
              <div
                className="container-fluid"
                style={{ padding: "0 2.5rem", marginTop: "2.25rem" }}
              >
                <div
                  className=" text-center"
                  style={{
                    backgroundColor: "#E9ECEB",
                    position: "relative",
                    top: "3%",
                    padding: "0.5rem 0",
                  }}
                >
                  <p style={{ color: "black" ,marginBottom:"0"}}>First time user? Sign Up </p>
                  <a href="/employeesignup" className="link-primary">
                    CGI Employees
                  </a>
                  <span> | </span>
                  <a href="/internsignup" className="link-primary">
                    CGI Interns
                  </a>
                </div>
              </div>
            </RightContainer>
          </div>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default Login;

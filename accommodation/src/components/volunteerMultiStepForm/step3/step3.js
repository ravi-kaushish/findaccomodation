import React, { useContext } from "react";
import "./step3.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";

const MainContainer = styled.div``;

const Step3 = () => {
  const { next, previous } = useContext(MultiStepContext);
  return (
    // <div className="container-fluid" style={{ padding: "0" }}>
    //   <div className="row ">
    //     <div>
    //       <p
    //         className="mhead"
    //         style={{
    //           color: "#626262",
    //           font: "Lato",
    //           fontSize: "16px",
    //           padding: "0px",
    //         }}
    //       >
    //         Step 3
    //       </p>
    //     </div>
    //     <div>
    //       <p className="p_color my-0 heading">Accommodation Type</p>
    //     </div>
    //   </div>

    //   <hr />

    //   <form>
    //     <div className="row mb-4">
    //       <div className="col mb-3">
    //         <p className="my-0 subhead">Accommodation Type</p>
    //       </div>
    //       <div className="d-flex">
    //         <button className="pgbutn">
    //           <p className="ms-1 my-1">PG</p>
    //         </button>
    //         <button className="d-flex flatbtn mx-3">
    //           <p className="my-0">Flat</p>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col">
    //         <p className="my-0 subhead">Sharing Type</p>
    //       </div>

    //       <div className="container d-flex justify-content-between ">
    //         <button className="step3__btn-style">
    //           <p className="" style={{ color: "black",marginBottom:"0" }}>
    //             Single
    //           </p>
    //         </button>
    //         <button
    //           className="step3__btn-style"

    //         >
    //           <p className="" style={{ color: "black" ,marginBottom:"0"}}>
    //             Double
    //           </p>
    //         </button>
    //         <button className=" step3__btn-style ">
    //           <p className="" style={{ color: "black" ,marginBottom:"0"}}>
    //             Triple
    //           </p>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="mt-4">
    //         <p className="my-0 subhead">House Habit Permitted</p>
    //       </div>

    //       <fieldset>
    //         <div className="mt-3">
    //           <input
    //             type="checkbox"
    //             id="coding"
    //             name="interest"
    //             value="coding"
    //             className=""
    //           />
    //           <label className="mx-3">Non Veg</label>
    //         </div>
    //         <div className="mt-3">
    //           <input type="checkbox" id="music" name="interest" value="music" />
    //           <label className="mx-3">Smoking</label>
    //         </div>
    //         <div className="mt-3">
    //           <input type="checkbox" id="music" name="interest" value="music" />
    //           <label className="mx-3">Drinking</label>
    //         </div>
    //       </fieldset>
    //     </div>

    //     <div className="row">
    //       <div
    //         className="d-flex justify-content-end"
    //         style={{ marginTop: "150px" }}
    //       >
    //         <button className="d-flex imgButn mx-4" onClick={previous}>
    //           <div className="ms-1 my-1">
    //             <p>Previous</p>
    //           </div>
    //         </button>
    //         <button className="border-0 butn" onClick={next}>
    //           Save & Next
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <>
      <MainContainer >
        <div>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",

              color: "#626262",
            }}
          >
            Step 3
          </p>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
            }}
          >
            Accommodation Type
          </p>
          <hr style={{ margin: "0" }} />
        </div>
        <div style={{ marginTop: "1.5rem", padding:"0 1.125rem" }}>
          <form >
            <p className="Step3__form-heading" style={{marginBotton:"1rem"}}>Accommodation Type</p>
            <div className="contianer d-flex flex-row gap-3" style={{marginBottom:"1.5rem"}}>
              <button className="Step3__btn-style" defaultChecked><p className="Step3__btn-p-style">PG</p></button>
              <button className="Step3__btn-style"><p className="Step3__btn-p-style">Flat</p></button>
            </div>
            <p className="Step3__form-heading" style={{marginBottom:"1rem"}}>Sharing Type</p>
            <div className="contianer d-flex flex-row gap-3" style={{marginBottom:"1.5rem"}}>
              <button className="Step3__btn-style"><p className="Step3__btn-p-style">Single</p></button>
              <button className="Step3__btn-style"><p className="Step3__btn-p-style">Double</p></button>
              <button className="Step3__btn-style"><p className="Step3__btn-p-style">Sharing</p></button>
            </div>

            <p className="Step3__form-heading" style={{marginBottom:"1.15rem"}}>House Habit Permitted</p>
            <div class="form-check" style={{marginBottom:"1.18rem"}}>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Non Veg
              </label>
            </div>
            <div class="form-check" style={{marginBottom:"1.18rem"}}>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Non Veg
              </label>
            </div>
            <div class="form-check" style={{marginBottom:"12.37rem"}} >
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Non Veg
              </label>
            </div>
            {/* <div className="container-fluid d-flex flex-row">
                <button onClick={previous}>
                <p>Previous</p>

                </button>
                <button onClick={next}>
                <p>Save & Next</p>

                </button>
            </div> */}
            <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          
          }}
        >
          <button type="button" class="btn btn-outline-primary" onClick={previous}>
            Previous
          </button>
          <button
            onClick={() => {
              next();
              //   setData();
            }}
            className="border-0 butn "
            style={{ width: "40%" }}
          >
            Save & Next
          </button>
        </div>
          </form>
        </div>
      </MainContainer>
    </>
  );
};

export default Step3;

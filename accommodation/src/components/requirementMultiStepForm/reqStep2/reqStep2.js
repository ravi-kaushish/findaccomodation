import React, { useContext } from "react";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import "./reqStep2.css";
import { MultiStepContext } from "../../stepContext/stepContext";
const ReqStep2 = () => {
  const { reqNext, reqPrevious } = useContext(MultiStepContext);
  return (
    <>
      <FormContainer>
        <Header>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "1rem",
              lineHeight: "1.25rem",

              color: "#626262",
            }}
          >
            Step 2
          </p>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "1.25rem",
              lineHeight: "1.5rem",
            }}
          >
            Accommodation Types
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
          <p className="reqStep2__label-h" style={{ marginBottom: "1rem" }}>
            Accommodation Type
          </p>
          <div
            className="container-fluid d-flex flex-row gap-4"
            style={{ padding: "0", marginBottom: "1.5rem" }}
          >
            <button type="button" className="reqStep2__btn">
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 3.09rem" }}
              >
                PG
              </p>
            </button>
            <button type="button" className="reqStep2__btn">
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 2.93rem" }}
              >
                Flat
              </p>
            </button>
          </div>
          <p className="reqStep2__label-h" style={{ marginBottom: "1rem" }}>
            Sharing Type
          </p>
          <div
            className="container-fluid d-flex flex-row gap-4"
            style={{ padding: "0", marginBottom: "1.5rem" }}
          >
            <button type="button" className="reqStep2__btn">
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 2.53rem" }}
              >
                Single
              </p>
            </button>
            <button type="button" className="reqStep2__btn">
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 2.53rem" }}
              >
                Double
              </p>
            </button>

            <button type="button" className="reqStep2__btn">
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 2.53rem" }}
              >
                Triple
              </p>
            </button>
          </div>
          <p className="reqStep2__label-h" style={{ marginBottom: "1.15rem" }}>
            House Habit Preferences
          </p>
          <div class="form-check" style={{ marginBottom: "1.18rem" }}>
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
          <div class="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Smoking
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Drinking
            </label>
          </div>
          <div className="row " style={{ marginTop: "14.5rem", padding: "0" }}>
            <div className="col-6">
              <button
                className="reqStep2__btn-pre"
                type="button"
                onClick={reqPrevious}
                style={{width:"100%"}}
              >
                <p
                  className="reqStep__btn-p "
                  style={{ margin: "5% 0" }}
                >
                  Previous
                </p>
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="reqStep2__btn-next"
                onClick={reqNext}
                style={{width:"100%"}}
              >
                <p
                  className="reqStep__btn-p "
                  style={{ margin:"5% 0"}}
                >
                  Save & Next
                </p>
              </button>
            </div>
          </div>
        </Body>
      </FormContainer>
    </>
  );
};

export default ReqStep2;

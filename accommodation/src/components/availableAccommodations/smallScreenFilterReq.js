import React from 'react'

const SmallScreenFilterReq = () => {
  return (
    <>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Filters</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <form>
            <div className="container">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginBottom: "1rem 0 1.15rem 0",
                }}
              >
                Select Accommodation Type
              </p>
              <div class="form-check">
                <input class="form-check-input border border-primary" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckDefault">
                  PG
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input border border-primary" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckChecked">
                  FLAT
                </label>
              </div>


              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  margin: "1.5rem 0 1.15rem 0",
                }}
              >
                Select House Habits
              </p>
              <div class="form-check">
                <input
                  class="form-check-input border border-primary"
                  type="checkbox"
                  value=""
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Non Veg
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input  border border-primary" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckChecked">
                  Smoking
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input  border border-primary" type="checkbox" value="" />
                <label class="form-check-label" for="flexCheckChecked">
                  Drinking
                </label>
              </div>

              <div
                className="row "
                style={{ marginTop: "18rem", padding: "0" }}
              >
                <div className="col-6">
                  <button
                    className="reqStep2__btn-pre"
                    type="button"
                    style={{ width: "100%" }}
                  >
                    <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                      Reset
                    </p>
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="reqStep2__btn-next"
                    style={{ width: "100%" }}
                  >
                    <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                      Apply
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SmallScreenFilterReq
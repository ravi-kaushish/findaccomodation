import React from "react";
import female from "../../images/female.svg"

const Notification = () => {
  return (
    <>
      <div className="container-fluid notification-container">
        <div className="row">
          <div className="col-2">
            <img src={female} />
          </div>
          <div className="col">
            <p>
              <strong>Harshit Khurana</strong> has express interest on your
              accommodation posting
            </p>
            <a className="a-link">Show message</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;

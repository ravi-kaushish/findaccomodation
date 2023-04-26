import React from "react";
import female from "../../images/female.svg"
import "./notification.css"

const Notification = () => {
  return (
    <>
      <div className="container-fluid notification-container" style={{padding:"0.75rem 0.75rem 1rem 1rem"}}>
        <div className="row">
          <div className="col-2">
            <img src={female} />
          </div>
          <div className="col">
            <p>
              <strong>Harshit Khurana</strong> has express interest on your
              accommodation posting
            </p>
            <a className="notification__a-p " style={{color:"#007FD3"}}>Show message</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;

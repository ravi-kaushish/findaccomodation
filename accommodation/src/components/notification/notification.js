import React from "react";

const Notification = () => {
  return (
    <>
      <div className="container-fluid" style={{border:"solid 1px red"}}>
        <div className="row">
          <div className="col-2">
            <img src="" />
          </div>
          <div className="col">
            <p>
              <strong>Harshit Khurana</strong>has express interest on your
              accommodation posting
            </p>
            <a>Show message</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;

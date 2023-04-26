import React from "react";
import Nodata from "../../images/nodatalogo.svg";

const NoDataaPage = () => {
  return (
    <>
      <div className="container-fluid" style={{ margin: "15.3rem 12.5rem 15.3rem 12.5rem", padding: "0" }}>
      <div className=" row row-cols-2 ">
        <div className="align-item-center">
          <img src={Nodata}/>
          <p style={{color: '#343435' , fontWeight:'700' , fontSize:'1rem' , lineHeight:'1.18rem' , fontFamily:'Lato'}}>No nearby accommodation right now!</p>
          <p>
            Take your time to find the perfect accommodation your ideal space is
            just a few clicks away.
          </p>





        </div>
        </div>
      </div>
    </>
  );
};

export default NoDataaPage;

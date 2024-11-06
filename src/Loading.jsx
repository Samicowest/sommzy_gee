import React from "react";
import loadingImg from "./assets/8-ball-logo.png";
import BackgroundImage from "./assets/bg.png";

function Loading() {
  return (
    <div
      className="welcome"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <img src={loadingImg} width="100px" alt="" className="w-logo" />
        <p>
          Connecting<span className="loader"></span>
        </p>
      </div>
    </div>
  );
}

export default Loading;

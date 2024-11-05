import React from "react";
import loadingImg from "./assets/8-ball-logo.png";
import BackgroundImage from "./assets/bg2.png";

function Loading() {
  return (
    <div
      className="welcome"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover", // Optional: cover the entire div
        // backgroundPosition: "center", // Optional: center the image
        // width: "100%", // Set width and height as needed
        // height: "100vh", // Set background image
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

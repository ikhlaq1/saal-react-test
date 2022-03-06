import React from "react";
import "./styles.css";

const LightBox = ({ image, hideLightBox }) => {
  //receiving image url and hideLightBox function as props
  return (
    <div
      className="lightBox"
      onClick={() => {
        hideLightBox(false);
      }}
    >
      <img className="userImage" src={image} alt="user-full" />
    </div>
  );
};

export default LightBox;

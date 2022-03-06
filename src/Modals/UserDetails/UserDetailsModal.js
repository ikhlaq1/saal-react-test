import React from "react";
import { convertDate } from "../../utils/DateConverter";

import "./styles.css";

export default function UserDetailsModal({ show, userDetails, onHide }) {
  return (
    <>
      {show && (
        <div className="modal">
          <div className="card">
            <img src={userDetails.picture.large} alt="user-full" />
            <h1>
              {userDetails.name.title} {userDetails.name.first}{" "}
              {userDetails.name.last}
            </h1>
            <p className="title">Sex: {userDetails.gender}</p>
            <p className="title">
              DOB: {convertDate(userDetails.registered.date)}
            </p>
            <p className="title">Age: {userDetails.registered.age}</p>
            <p className="title">
              Location: {userDetails.location.city},{" "}
              {userDetails.location.country}
            </p>
            <p className="title">Post Code: {userDetails.location.postcode}</p>

            <p className="title">
              Phone: {userDetails.phone.replaceAll("-", "")}
            </p>
          </div>
          <button className="close-button topright" onClick={onHide}>
            X
          </button>
        </div>
      )}
    </>
  );
}

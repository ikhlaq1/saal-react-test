import React from "react";
import "./styles.css";
import {  Tr, Td } from "react-super-responsive-table";
import { convertDate } from "../../utils/DateConverter";

const User = ({user,openLightBox,showUserDetailModal}) => {
  return (
    <Tr className="listData" >
    <Td>
      <img
        onClick={() => {
          openLightBox(user.picture.large);
        }}
        className="userThumbnail"
        src={user.picture.thumbnail}
      />
    </Td>
    <Td>
      {user.name.first} {user.name.last}{" "}
    </Td>
    <Td
      className="userName"
      onClick={() => {
        showUserDetailModal(user);
      }}
    >
      {user.login.username}
    </Td>
    <Td>{user.email}</Td>
    <Td>{convertDate(user.dob.date)}</Td>
    <Td>{user.location.city}</Td>
    <Td>{user.phone.replaceAll("-", "")}</Td>
  </Tr>
  );
};

export default User;

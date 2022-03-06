import React, { useContext, useState } from "react";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import { DISPLAYED_USERS } from "../../Constants/Constants";
import UsersContext from "../../context/UsersContext";
import UserDetailsModal from "../../Modals/UserDetails/UserDetailsModal";
import LightBox from "../LightBox/Lightbox";
import User from "../User/User";
import "./styles.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function UserList() {
  //getting all users , current page number and search text from context

  const { users, page, searchText } = useContext(UsersContext);
  // initialising states for lighbox, current lighbox image, modal
  const [showLightBox, setShowLightbox] = useState(false);
  const [lightBoxImage, setLightBoxImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUserDetails, setSelectedUserDetails] = useState();
  // calculating start index for current page
  const initialPageIndex = (page - 1) * DISPLAYED_USERS;

  // getting 10 users based on page index
  const currentDisplayedUsers =
    users && users.slice(initialPageIndex, initialPageIndex + DISPLAYED_USERS);

  //converting given date to DD/MM/YYYY format

  //function for showing modal and setting current user details to be showed in modal
  const showUserDetailModal = (value) => {
    setShowModal(true);
    setSelectedUserDetails(value);
  };

  //function for hiding modal
  const hideUserDetailModal = () => {
    setShowModal(false);
  };

  //function for showing lightbox
  const openLightBox = (imageUrl) => {
    setLightBoxImage(imageUrl);
    setShowLightbox(true);
  };
  return (
    <>
      <Table className="ListView">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Name</Th>
            <Th>Username </Th>
            <Th>Email</Th>
            <Th>DOB</Th>
            <Th>Address</Th>
            <Th>Phone</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/*checking if users are present and no search text is present */}
          {/*then show current 10 users only */}

          {currentDisplayedUsers &&
          currentDisplayedUsers &&
          searchText === "" ? (
            currentDisplayedUsers.map((user) => (
              <User
                key={user.login.uuid}
                user={user}
                openLightBox={openLightBox}
                showUserDetailModal={showUserDetailModal}
              />
            ))
          ) : (
            <>
              {/*looping on all users and filtering them on username if search text is present  */}
              {users &&
                users
                  .filter((filteredUser) => {
                    if (searchText === "") {
                      return filteredUser;
                    } else if (
                      filteredUser.login.username
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    ) {
                      return filteredUser;
                    }
                  })
                  .map((user) => (
                    <User
                      key={user.login.uuid}
                      user={user}
                      openLightBox={openLightBox}
                      showUserDetailModal={showUserDetailModal}
                    />
                  ))}
            </>
          )}
        </Tbody>
      </Table>

      {/* Created simple lightbox componet and shows when user click image */}
      {/* Used props to pass image and callback function for hiding lightbox */}

      {showLightBox && (
        <LightBox image={lightBoxImage} hideLightBox={setShowLightbox} />
      )}
      {/* Created modal component to display user details */}
      <UserDetailsModal
        show={showModal}
        userDetails={selectedUserDetails}
        onHide={() => hideUserDetailModal()}
      ></UserDetailsModal>
    </>
  );
}

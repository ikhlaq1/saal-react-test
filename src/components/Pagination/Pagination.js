import React, { useContext } from "react";
import { DISPLAYED_USERS } from "../../Constants/Constants";
import UsersContext from "../../context/UsersContext";
import "./styles.css";

const Pagination = () => {
  //extracting all users , setter function for pagenumber, and current page number from context
  const { users, changePageNumber, page } = useContext(UsersContext);
  //calculating all pages by dividing it by current pages to be displayed (assuming it will always be muliple of 10)
  const allPages = users && users.length / DISPLAYED_USERS;
  //creating array of all page numbers
  const pages = [...Array(allPages).keys()].map((pageNumber) => pageNumber + 1);
  return (
    <div className="pagination">
      {/* displaying all page numbers and setting current page number as active */}
      {pages.map((pageNo, index) => (
        <a
          key={index}
          className={page == pageNo ? "active" : ""}
          onClick={() => changePageNumber(pageNo)}
        >
          {pageNo}
        </a>
      ))}
    </div>
  );
};

export default Pagination;

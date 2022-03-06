import React, { useContext } from "react";
import UsersContext from "../../context/UsersContext";
import "./styles.css";

const SearchBox = () => {
  //destructuring handleSearchText function from context
  //avoided using simple way i.e props because of mentioned specs in task description
  const { handleSearchText } = useContext(UsersContext);
  return (
    <div className="search">
      {/* on change of text handleSearchText function is invooked with event as parameter */}
      <input
        className="textBox"
        onChange={handleSearchText}
        type="search"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;

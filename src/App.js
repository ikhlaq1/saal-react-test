import React, { useState, useEffect } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Pagination from "./components/Pagination/Pagination";
import SearchBox from "./components/Search /SearchBox";
import UserList from "./components/UserList/UserList";
import { API_URL } from "./Constants/Constants";
import UsersContext from "./context/UsersContext";

function App() {
  //setting initial state of app
  const [appState, setAppState] = useState({
    loading: false,
    users: null,
  });
  //setting initial state of page number and search text
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  //using useEffect hook to call ramdom api for users
  useEffect(() => {
    //showing loading message before calling api
    setAppState({ loading: true });
    const apiUrl = API_URL;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((users) => {
        //setting user data and hiding loading messgage
        setAppState({ loading: false, users: users.results });
      })
      .catch((err) => {
        //catching error if any
        alert(err);
      });
  }, [setAppState]);

  //setter function for page number
  const changePageNumber = (newPageNumber) => {
    setPage(newPageNumber);
  };

  //setter function for search text
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  //creating object for context value
  const contextValue = {
    users: appState.users,
    page: page,
    searchText: searchText,
    changePageNumber: changePageNumber,
    handleSearchText: handleSearchText,
  };

  return (
    <div className="App">
      {/* Implemented Error boundary to show Fallback UI if anything goes wrong */}
      <ErrorBoundary>
        {/* Wrapping app in context provider and setting value of context */}
        <UsersContext.Provider value={contextValue}>
          {appState.loading ? (
            <div>
              <h2>Please wait while we fetch users list....</h2>
            </div>
          ) : (
            <>
              <SearchBox />
              <UserList />
              {/* Hiding pagination component if user is searching  */}
              {searchText === "" && <Pagination />}
            </>
          )}
        </UsersContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;

import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [searchModal, setSearchModal] = useState(false);
  const [userContacts, setUserContacts] = useState([]);
  const [userGroups, setUserGroup] = useState([]);
  const [selectedUser, setSelectedUser] = useState(false);
  const [userNotification, setUserNotification] = useState([]);
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || true
  );
  const [auth, setAuth] = useState({
    userName: "",
    email: "",
    id: "",
    profileUrl: "",
    accessToken: "",
  });
  const changeTheme = () => {
    document.body.className =
      document.body.className === "dark" ? "light" : "dark";
  };

  return (
    <AppContext.Provider
      value={{
        changeTheme,
        searchModal,
        setSearchModal,
        persist,
        setPersist,
        setUserContacts,
        userContacts,
        userGroups,
        setUserGroup,
        selectedUser,
        setSelectedUser,
        userNotification,
        setUserNotification,
        auth,
        setAuth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export { AppContext };

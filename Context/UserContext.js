"use client";
import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { getToken } from "../src/app/utils/get_auth_token";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    firstNameField: "",
    lastNameField: "",
    dateField: "",
    monthField: "",
    yearField: "",
    countryCode: "",
    phoneNumField: "",
    emailField: "",
    passField: "",
    cnfrmpassField: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userAlreadyAuthorized = getToken();
    if (userAlreadyAuthorized) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    // Cookies.set('authToken', token, { expires: 7 })
    Cookies.set("authToken", token);

    // console.log("set token in cookies", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    Cookies.remove("authToken");
    router.push("/");
  };

  return (
    <UserContext.Provider value={{
        userInfo,
        setUserInfo,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

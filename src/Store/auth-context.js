import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {}
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const loggedUser = localStorage.getItem("email");
    if (loggedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("email", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
  };
  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

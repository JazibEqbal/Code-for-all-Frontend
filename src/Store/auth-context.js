import React, { useState } from "react";
import axios from 'axios';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {}
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
      data: {
        email,
        password
      }
    })
    .then(res => {
      if(res.data.user)
        setIsLoggedIn(true);
    })
    .catch(e => console.log(e));
  };

  const logoutHandler = () => {
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

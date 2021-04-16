import React, {useState, useContext, createContext} from "react";

const authContext = createContext();

const allowedLogins = {
  'test': 'test',
  'admin': 'qwerty',
}


export function ProvideAuth({children}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}


export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (login, password) => {
    const isLoggedIn = Object.keys(allowedLogins).includes(login)
      && allowedLogins[login] === password
    setUser(isLoggedIn)
  }

  const handleLogout = () => {
    setUser(!user)
  }

  return {
    user,
    handleLogin,
    handleLogout
  };
}

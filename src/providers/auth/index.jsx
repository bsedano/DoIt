import { useContext, createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const login = async (data) => {
    await axios
      .get("https://doit-bsedano.herokuapp.com/login", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  

  return <AuthContext.Provider value={{login}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);

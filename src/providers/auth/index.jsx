import { useContext, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const authLogin = async (data) => {
    await axios
      .post("https://doit-bsedano.herokuapp.com/login", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };
  const authRegister = async (data) => {
    await axios
      .post("https://doit-bsedano.herokuapp.com/register", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Usuário cadastrado com sucesso!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };
  return (
    <AuthContext.Provider value={{ authLogin, authRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);

import TodoProvider from "./todo";
import AuthProvider from "./auth";

export const url = "https://doit-bsedano.herokuapp.com";
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <TodoProvider>{children}</TodoProvider>
    </AuthProvider>
  );
};

export default Providers;

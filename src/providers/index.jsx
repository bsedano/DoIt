import TodoProvider from "./todo";
import AuthProvider from "./auth";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <TodoProvider>{children}</TodoProvider>
    </AuthProvider>
  );
};

export default Providers;

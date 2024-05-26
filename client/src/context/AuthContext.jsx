import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";
import PropTypes from "prop-types";

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.error("Failed to sign up:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, user }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

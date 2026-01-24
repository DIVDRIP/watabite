import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { restaurantsDetails } from "../assets/assets";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // Auth state
  const [user, setUser] = useState(null); 
  // user = { id, name, email, role }

  const [userRole, setUserRole] = useState(null); 
  // "customer" | "restaurant" | "rider"

  // UI state
  const [showUserLogin, setShowUserLogin] = useState(false);

  // Global loading state
  const [loading, setLoading] = useState(false);

 
  

  const value = {
    // navigation
    navigate,

    // restaurants
    restaurantsDetails,

    // auth
    user,
    setUser,
    userRole,
    setUserRole,

    // ui
    showUserLogin,
    setShowUserLogin,

    // global
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

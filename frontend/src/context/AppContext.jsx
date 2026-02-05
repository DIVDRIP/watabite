import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { restaurantsDetails } from "../assets/assets";


export const AppContext = createContext(null);
const backendUrl = import.meta.env.VITE_BACKEND_URL

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // Auth state
  const [user, setUser] = useState(null);
  // user = { id, name, email, role }
   useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }
  }, []);

  const [userRole, setUserRole] = useState(null);
  // "customer" | "restaurant" | "rider"

  // UI state
  const [showUserLogin, setShowUserLogin] = useState(false);

  // Global loading state
  const [loading, setLoading] = useState(false);

  // cart
  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        // quantity increase
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };
 


  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

//   const removeFromCart = (id) => {
//   setCartItems(prev => {
//     const updated = { ...prev };
//     delete updated[id];
//     return updated;
//   });
// };


  // INCREASE QTY
const increaseQty = (id) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  );
};

// DECREASE QTY
const decreaseQty = (id) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0)
  );
};

// const increaseQty = (id) => {
//   setCartItems(prev => ({
//     ...prev,
//     [id]: { qty: prev[id].qty + 1 }
//   }));
// };

// const decreaseQty = (id) => {
//   setCartItems(prev => {
//     if (prev[id].qty === 1) {
//       const updated = { ...prev };
//       delete updated[id];
//       return updated;
//     }
//     return {
//       ...prev,
//       [id]: { qty: prev[id].qty - 1 }
//     };
//   });
// };


  // cartCount
  const cartCount = cartItems?.reduce(
    (total, item) => total + item.qty,
    0
  );

  




  // cart total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );





  const value = {
    // navigation
    navigate,

    // cat data
    addToCart, removeFromCart, cartItems,increaseQty,decreaseQty,cartCount,totalAmount,backendUrl,
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

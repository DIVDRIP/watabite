import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import { useState } from "react";
import LoginModal from "./models/LoginModal";
import Restaurants from "./pages/Restaurants";
import MyOrders from "./pages/MyOrders";
import TrackMyOrder from "./pages/TrackMyOrder";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import Footer from "./components/Footer";

const App = () => {

  const [login, setLogin] = useState(false);

  // const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div className="text-default min-h-screen bg-black text-white">
      <Navbar openLogin={() =>setLogin(true)} />

    {/* Login Modal */}

    {login &&
    (<LoginModal closeLogin={()=>setLogin(false)} />
    )}

      <div className="">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/restaurants" element={<Restaurants/>} />
          <Route path="/my-orders" element={<MyOrders/>} />
          <Route path="/cartpage" element={<CartPage/>} />
          <Route path="/payment-page" element={<PaymentPage/>} />
          <Route path="/track-my-order/:id" element={<TrackMyOrder/>} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />   {/* 👈 appears on every page */}
    </div>
  )
}

export default App;
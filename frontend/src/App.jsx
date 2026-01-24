import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import { useState } from "react";
import LoginModal from "./models/LoginModal";
import Restaurants from "./pages/Restaurants";
import MyOrders from "./pages/MyOrders";
import TrackMyOrder from "./pages/TrackMyOrder";

const App = () => {

  const [login, setLogin] = useState(false);

  // const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div className="bg-black text-white">
      <Navbar openLogin={() =>setLogin(true)} />

    {/* Login Modal */}

    {login &&
    (<LoginModal closeLogin={()=>setLogin(false)} />
    )}

      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/restaurants" element={<Restaurants/>} />
          <Route path="/my-orders" element={<MyOrders/>} />
          <Route path="/track-my-order" element={<TrackMyOrder/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import { useState } from "react";
import LoginModal from "./components/LoginModal";

const App = () => {

  const [login, setLogin] = useState(false);
  // const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div className="bg-black text-white">
      <Navbar openLogin={()=>setLogin(true)} />



    {/* login Modal */}
    {login && 
  (<LoginModal closeLogin = {()=>setLogin(false)} />
)}


      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
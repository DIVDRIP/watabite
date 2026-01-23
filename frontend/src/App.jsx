import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";

const App = () => {
  // const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div className="bg-black text-white">
      <Navbar />


      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
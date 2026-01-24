import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = ({openLogin}) => {
  const [open, setOpen] = useState(false);


  const {user, setUser, navigate} = useContext(AppContext); 
    

  return (

    // <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-black relative transition-all">
    <nav className="flex  items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg transition-all sticky top-0 w-full backdrop-blur-lg border-b border-gray-600 shadow-sm z-50">
      <img src={assets.logo} alt="Watabite Logo" className="h-10 w-auto" />

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/restaurants"}>Restaurants</Link>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search restaurant"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              clip-rule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        
        <div className="relative group">
          <img
            src={assets.profileicon}
            alt="profile"
            className="h-10 w-10 rounded-full cursor-pointer object-cover"
          />

          {/* Invisible Hover Bridge */}
          <div className="absolute right-0 top-full h-3 w-full"></div>

          <ul className="hidden group-hover:block absolute top-full right-0 bg-black text-white shadow-md rounded-md border border-gray-200 mt-2 w-32 text-sm">
            
            {user ? (
              <>
                <li onClick={()=> {
                  navigate("/my-orders");
                }} className="p-1.5 cursor-pointer hover:bg-[#62CC74] hover:rounded-md hover:text-black">
                  My Orders
                </li>
                <li onClick={()=> {
                  navigate("/track-my-orders");
                }} className="p-1.5 cursor-pointer hover:bg-[#62CC74] hover:rounded-md hover:text-black">
                  Track
                </li>
                <li onClick={()=> setUser(null)} 
                    className="p-1.5 cursor-pointer hover:bg-[#62CC74] hover:rounded-md hover:text-black">
                  Logout
                </li>
              </>
            ) : (
              <li onClick={openLogin} className="p-1.5 cursor-pointer hover:bg-[#62CC74] hover:rounded-md hover:text-black">
                Login
              </li>
            )}

          </ul>
        </div>


      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#fff" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#fff" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#fff" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-15 left-0 w-full bg-black shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link to={"./"}>Home</Link>
        <Link to={"/restaurants"}>Restaurants</Link>
        <div className="relative group">
          <img
            src={assets.profileicon}
            alt="profile"
            className="h-10 w-10 rounded-full cursor-pointer object-cover"
          />

          {/* Invisible Hover Bridge */}
          <div className="absolute right-0 top-full h-3 w-full"></div>

          <ul className="hidden group-hover:block absolute top-full right-0 bg-black text-white shadow-md rounded-md border border-gray-200 mt-2 w-32 text-sm">
            
            {user ? (
              <>
                <li onClick={()=> {
                  navigate("/my-orders");
                }} className="p-1.5 cursor-pointer hover:bg-[#62CC74] hover:rounded-md hover:text-black">
                  My Orders
                </li>
                <li onClick={()=> {
                  navigate("/track-my-orders");
                }} className="p-1.5 cursor-pointer hover:bg-[#62CC74] hover:rounded-md hover:text-black">
                  Track
                </li>
                <li onClick={()=> setUser(null)} 
                    className="p-1.5 cursor-pointer hover:bg-[#62CC74] hover:rounded-md hover:text-black">
                  Logout
                </li>
              </>
            ) : (
              <li onClick={openLogin} className="p-1.5 cursor-pointer hover:bg-[#62CC74] hover:rounded-md hover:text-black">
                Login
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

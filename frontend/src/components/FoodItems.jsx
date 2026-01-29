
import { Heart } from "lucide-react";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const FoodItems = ({ id, image, name, description, price }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const {addToCart} = useContext(AppContext);
  
 
  //  NEW: current quantity from cart
  // const quantity = cartItems[id]?.qty || 0;




  const handleAddToCart = () => {
        addToCart({ id, image, name, price });
        
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }
// bg-gradient-to-b from-zinc-900 to-black
  return (
    <div className="group relative hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-black transition-all duration-300 hover:scale-[1.02] hover:shadow-green-400/18">
      
      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden bg-zinc-800">
        <img
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={name}
        />
        
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* FAVORITE BUTTON */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-200"
        >
          <Heart 
            size={20} 
            className={`transition-all duration-200 ${
              isFavorite 
                ? 'fill-red-500 text-red-500' 
                : 'text-white hover:text-red-400'
            }`}
          />
        </button>

        {/* PRICE TAG */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-green-500 shadow-lg">
          <p className="text-lg font-bold text-white">₹{price}</p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4">
        <h4 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {name}
        </h4>

        <p className="text-sm text-gray-400 line-clamp-2 mb-4 min-h-[40px]">
          {description}
        </p>

        {/* ADD TO CART BUTTON */}
        <button 
          onClick={handleAddToCart}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            isAdded
              ? ' bg-green-800 backdrop-blur-3xl  text-white'
              : ' bg-green-800 backdrop-blur-3xl  text-white shadow-lg hover:shadow-green-400/18'
          }`}
        >
          {isAdded ? ' Added!' : 'Add to Cart'}
        </button>


       
      </div>
    </div>
  );
};

export default FoodItems;

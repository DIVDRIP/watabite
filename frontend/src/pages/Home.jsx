import { useContext } from "react";
import Hero from "../components/Hero";
import RestaurantCards from "../components/RestaurantCards";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { restaurantsDetails, navigate } = useContext(AppContext);

  const handleSelect = (restaurant) => {
    navigate("/restaurants", { state: { restaurantId: restaurant.id }});
  };

  return (
    <div>
      <Hero />

      {/* cards section */}
      <div className="px-6 md:px-20 py-16">
        <RestaurantCards restaurants={restaurantsDetails.slice(0, 8)}
        onSelect={handleSelect} 
        />
      </div>
    </div>
  );
};

export default Home;

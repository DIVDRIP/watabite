import React, { useContext, useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import { AppContext } from "../context/AppContext";
import Item from "../components/Item";
import RestaurantMenu from "../components/RestaurantMenu";
import RestaurantCards from "../components/RestaurantCards";
import { useLocation } from "react-router-dom";

const Restaurants = () => {

  const location = useLocation();

  const { navigate, restaurantsDetails } = useContext(AppContext);

  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (restaurantsDetails.length > 0) {
      setRestaurants(restaurantsDetails);
    

    // find restaurant using ID

    if (location.state?.restaurantId) {
      const foundRestaurant = restaurantsDetails.find(
        (r) => r.id === location.state.restaurantId
      );
      if (foundRestaurant){
        setSelectedRestaurant(foundRestaurant);

      setTimeout(() => {
        menuRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      }
    }
  }

  }, [restaurantsDetails, location.state]);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);

    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);

  };

  return (
    <div className="bg-black/90 mx-12.5 md:py-20 md:px-20 ">
      {/* text */}
      <div className="text-center py-5 text-3xl">
        <Title text={"Nearby Restaurants"} />
      </div>

      {/* restaurants rendering */}

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-3 gap-y-8">
        {restaurants?.map((restaurant, index) => (
          <Item
            key={index}
            id={restaurant.id}
            category={restaurant.category}
            name={restaurant.name}
            rating={restaurant.rating}
            reviews={restaurant.reviews}
            time={restaurant.time}
            image={restaurant.image}
            onclick={() => handleRestaurantClick(restaurant)}
          />
        ))}
      </div> */}

      {/* reusable cards */}
      <RestaurantCards
        restaurants={restaurants}
        onSelect={handleRestaurantClick}
      />


      {/* menu view by clicking */}
      {selectedRestaurant && (
        <div>
          <div className="text-center p-5 mt-4  text-3xl">
            <Title text={"Menu View"} />
          </div>
          <div ref={menuRef}>
            <RestaurantMenu restaurant={selectedRestaurant} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurants;

import React from "react";
import Item from "./Item";

const RestaurantCards = ({ restaurants, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-3 gap-y-8">
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
          onclick={() => onSelect?.(restaurant)}
        />
      ))}
    </div>
  );
};

export default RestaurantCards;

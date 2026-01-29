export const STEPS = [
  "Order Confirmed",
  "Preparing",
  "On the Way",
  "Delivered",
];

export const ordersData = {
  active: [
    {
      id: "WTB2493",
      restaurantId: "restaurant1",
      restaurant: "Pyramid",
      items: ["Paneer Pasta ×1", "Garlic Bread ×1"],
      total: 349,
      status: "On the Way", // Confirmed | Preparing | On the Way | Delivered
      stepIndex: 2,
      image:"https://i.pinimg.com/1200x/9c/3b/72/9c3b7274384a0bab197fd68115a395ff.jpg",
      eta: "15–20 mins",
      driver: { name: "Vinay Mishra", phone: "+91 50748 99889" },
    },
    {
      id: "WTB2482",
      restaurantId: "restaurant2",
      restaurant: "Gautom’s Dine",
      items: ["Chicken Biryani ×1", "Naan ×2"],
      total: 565,
      status: "Delivered",
      stepIndex: 3,
      image:"https://i.pinimg.com/1200x/42/40/00/424000ebbdd51a3a637b395635e9c488.jpg",
      eta: "Delivered",
      driver: { name: "Vinay Mishra", phone: "+91 50748 99889" },
    },
  ],
  past: [
    {
      restaurant: "Orchid Garden",
      restaurantId: "restaurant4",
      date: "Jan 22, 2024 at 7:20 PM",
      total: 499,
      status: "Delivered",
      image:"https://i.pinimg.com/1200x/7d/c5/70/7dc57013dbc42056f6f6dd8ee621bdc3.jpg",
    },
    {
      restaurant: "Hangries",
      restaurantId: "restaurant3",
      date: "Jan 18, 2024 at 5:45 PM",
      total: 299,
      status: "Cancelled",
      image:"https://i.pinimg.com/736x/95/91/c3/9591c3e67661b68a27c47cb33b66c83f.jpg",
    },
    {
      restaurant: "Pyramid",
      restaurantId: "restaurant1",
      date: "Jan 05, 2024 at 6:20 PM",
      total: 749,
      status: "Delivered",
      image:"https://i.pinimg.com/1200x/9c/3b/72/9c3b7274384a0bab197fd68115a395ff.jpg",
    },
  ],
};


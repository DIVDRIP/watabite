import logo from "./watabite-logo.svg";
import profileicon from "./profile-icon.gif";
import herobanner from "./hero-banner.png";
import webbanner1 from "./web-banner-1.png";
import deliverygif from "./delivery-gif.gif"
import deliveryillust from "./delivery-illust.png";
import deliverybanner from "./delivery-banner.png";

export const assets = {
    logo,
    profileicon,
    herobanner,
    webbanner1,
    deliverygif,
    deliveryillust,
    deliverybanner,
};

export const restaurantsDetails = [

    // restautant 1
    {
        id:"restaurant1",
        name:"Pyramid",
        image:"https://i.pinimg.com/1200x/9c/3b/72/9c3b7274384a0bab197fd68115a395ff.jpg",
        category:"Creamy Pasta",
        reviews:"2435",
     time:"23-25",
        rating:4.5,
       menu: [
  {
    category: "Pizzas",
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic delight with 100% real mozzarella cheese",
        price: 199,
        image: "https://i.pinimg.com/736x/9d/5d/30/9d5d3011f7771054bbd01b72ab235c68.jpg"
      },
      {
        id: 2,
        name: "Farmhouse Pizza",
        description: "Onion, capsicum, tomato & grilled mushroom",
        price: 299,
        image: "https://i.pinimg.com/736x/3e/c9/fe/3ec9fe32c6217014789b5f42e2343f47.jpg"
      },
      {
        id: 3,
        name: "Paneer Tikka Pizza",
        description: "Spicy paneer tikka with onion & capsicum",
        price: 349,
        image:"https://i.pinimg.com/736x/f9/15/67/f915679387210fe18bcc748ca046f101.jpg"
      }
    ]
  },
  {
    category: "Pastas",
    items: [
      {
        id: 4,
        name: "White Sauce Pasta",
        description: "Creamy white sauce with veggies & herbs",
        price: 249,
        image:"https://i.pinimg.com/1200x/c5/2d/45/c52d454bf256841ea8934cd3d760d7b1.jpg"
      },
      {
        id: 5,
        name: "Red Sauce Pasta",
        description: "Tangy tomato sauce with Italian spices",
        price: 229,
        image:"https://i.pinimg.com/1200x/be/94/30/be94306521eb4332b14a91c28333e315.jpg"
      }
    ]
  },
  {
    category: "Starters",
    items: [
      {
        id: 6,
        name: "Garlic Bread",
        description: "Freshly baked bread with garlic butter",
        price: 129,
        image:"https://i.pinimg.com/1200x/58/5b/b7/585bb77bcceae48e050e6184395334bf.jpg"
      },
      {
        id: 7,
        name: "Cheese Garlic Bread",
        description: "Garlic bread topped with melted cheese",
        price: 159,
        image:"https://i.pinimg.com/1200x/4c/07/eb/4c07eb98fa078f2a390979b167622071.jpg"
      }
    ]
  },
  {
    category: "Drinks",
    items: [
      { id: 8, name: "Coke", price: 49,image:"https://i.pinimg.com/1200x/7a/d0/a3/7ad0a30fb9ae51a1c9af68a73b384e35.jpg" },
      { id: 9, name: "Cold Coffee", price: 99,image:"https://i.pinimg.com/1200x/32/d5/bd/32d5bdf1de62450014185bd2bea1c2e5.jpg" },
      { id: 10, name: "Fresh Lime Soda", price: 79,image:"https://i.pinimg.com/736x/80/a9/3c/80a93cafb9075695d94bfae1351e10a1.jpg" }
    ]
  }
]
    },
    

    // restaurant 2
{
    id:"restaurant2",
    name:"Gautam's O Dine",
    image:"https://i.pinimg.com/1200x/42/40/00/424000ebbdd51a3a637b395635e9c488.jpg",
     category:"Paneer Tikka",
     reviews:"2435",
     time:"23-25",
    rating:4.2,
   menu: [
  {
    category: "Paneer Starters",
    items: [
      {
        id: 1,
        name: "Malai Paneer Tikka",
        description: "Soft paneer cubes marinated in creamy spices",
        price: 150,
        image:"https://i.pinimg.com/736x/ad/ab/32/adab326f74365f0b38d30d164a05e610.jpg"
      },
      {
        id: 2,
        name: "Achari Paneer Tikka",
        description: "Paneer marinated with tangy achari spices",
        price: 120,
        image:"https://i.pinimg.com/1200x/3f/e0/87/3fe087770a1a00a40b738cf95a4deadb.jpg"
      },
      {
        id: 3,
        name: "Paneer Pakoda",
        description: "Crispy deep fried paneer fritters",
        price: 110,
        image:"https://i.pinimg.com/1200x/c4/81/68/c4816893ba54112544402099264c8531.jpg"
      }
    ]
  },
  {
    category: "Main Course",
    items: [
      {
        id: 4,
        name: "Shahi Paneer",
        description: "Rich cashew gravy with soft paneer",
        price: 220,
        image:"https://i.pinimg.com/736x/e7/fd/4c/e7fd4c845ac57d2a745f22a652472bab.jpg"
      },
      {
        id: 5,
        name: "Kadai Paneer",
        description: "Spicy paneer with capsicum & onion",
        price: 210,
        image:"https://i.pinimg.com/736x/3e/a0/7f/3ea07f98c1ff6304dbe64998d81c43a2.jpg"
      }
    ]
  }
]
},

// restaurant 3
{
 id:"restaurant3",
 name:"Hangries",
 image:"https://i.pinimg.com/736x/95/91/c3/9591c3e67661b68a27c47cb33b66c83f.jpg",
 category:"Margherita Pizza",
 rating:4.2,
 reviews:"2435",
     time:"23-25",
 menu: [
  {
    category: "Pizzas",
    items: [
      { id: 301, name: "Margherita Pizza", description: "Classic cheese pizza with fresh basil", price: 199,image:"https://i.pinimg.com/1200x/30/2b/d3/302bd34ab158e93df6f4b7fcc0ce8b46.jpg" },
      { id: 302, name: "Cheese Burst Pizza", description: "Loaded cheese inside crust", price: 299,image:"https://i.pinimg.com/736x/e5/9f/e6/e59fe665c16b15c2abddbc9ed1efbf55.jpg" },
      { id: 303, name: "Paneer Overloaded Pizza", description: "Spicy paneer with extra toppings", price: 349,image:"https://i.pinimg.com/736x/b6/7b/da/b67bda12145d854333b81d7896e3d126.jpg" }
    ]
  },
  {
    category: "Burgers",
    items: [
      { id: 304, name: "Veg Cheese Burger", description: "Crispy veg patty with cheese", price: 129,image:"https://i.pinimg.com/736x/3b/03/1f/3b031f3a47a7dc7bb3220a683b895e3d.jpg" },
      { id: 305, name: "Paneer Burger", description: "Grilled paneer patty burger", price: 159,image:"https://i.pinimg.com/736x/24/20/ea/2420ea7b3453198af7213878350c3625.jpg" }
    ]
  }
]

},
// restaurant 4
{
 id:"restaurant4",
 name:"Orchid Garden",
 image:"https://i.pinimg.com/1200x/7d/c5/70/7dc57013dbc42056f6f6dd8ee621bdc3.jpg",
 category:"Indo-Chinese Starter",
 rating:4.2,
 reviews:"2435",
     time:"23-25",
 menu: [
  {
    category: "Starters",
    items: [
      { id: 401, name: "Veg Manchurian", description: "Crispy balls in spicy sauce", price: 149 },
      { id: 402, name: "Chilli Paneer", description: "Paneer tossed in Indo-Chinese gravy", price: 179 }
    ]
  },
  {
    category: "Noodles & Rice",
    items: [
      { id: 403, name: "Hakka Noodles", description: "Stir fried noodles with veggies", price: 139 },
      { id: 404, name: "Veg Fried Rice", description: "Classic Chinese style rice", price: 129 }
    ]
  }
]

},
// restaurant 5
{
 id:"restaurant5",
 name:"Grill Master",
 image:"https://i.pinimg.com/1200x/5a/1b/f1/5a1bf197978d33298f16504f1bea8d39.jpg",
 category:"Grilled Burger",
 rating:4.2,
 reviews:"2435",
     time:"23-25",
 menu: [
  {
    category: "Grilled Burgers",
    items: [
      { id: 501, name: "Classic Veg Burger", description: "Grilled patty with lettuce & sauce", price: 149 },
      { id: 502, name: "Cheese Burst Burger", description: "Extra cheese filled burger", price: 179 }
    ]
  },
  {
    category: "Grilled Snacks",
    items: [
      { id: 503, name: "Grilled Paneer Sandwich", description: "Paneer sandwich with herbs", price: 139 },
      { id: 504, name: "French Fries", description: "Crispy golden fries", price: 99 }
    ]
  }
]

},
// restaurant 6
{
 id:"restaurant6",
 name:"Parveen Vaishno Dhaba",
 image:"https://i.pinimg.com/736x/70/f1/ba/70f1bab59948b2d82d6ce86ca7b0ae5d.jpg",
 category:"Shahi Paneer",
 rating:4.2,
 reviews:"2435",
     time:"23-25",
 menu: [
  {
    category: "Main Course",
    items: [
      { id: 601, name: "Shahi Paneer", description: "Rich creamy paneer gravy", price: 220 },
      { id: 602, name: "Dal Makhani", description: "Slow cooked buttery dal", price: 180 }
    ]
  },
  {
    category: "Breads",
    items: [
      { id: 603, name: "Butter Naan", description: "Soft naan with butter", price: 40 },
      { id: 604, name: "Tandoori Roti", description: "Whole wheat roti", price: 20 }
    ]
  }
]

},
// restaurant 7
{
 id:"restaurant7",
 name:"Kulcha Theka",
 image:"https://i.pinimg.com/1200x/7d/8c/4c/7d8c4ce10856cd1c34c8366d20882ac1.jpg",
 category:"Amritsari Kulcha",
 rating:4.2,
 reviews:"2435",
     time:"23-25",
menu: [
  {
    category: "Kulcha Specials",
    items: [
      { id: 701, name: "Amritsari Aloo Kulcha", description: "Stuffed aloo kulcha with butter", price: 80 },
      { id: 702, name: "Paneer Kulcha", description: "Paneer stuffed kulcha", price: 100 }
    ]
  },
  {
    category: "Sides",
    items: [
      { id: 703, name: "Chole", description: "Spicy Punjabi chole", price: 70 },
      { id: 704, name: "Boondi Raita", description: "Cool yogurt raita", price: 50 }
    ]
  }
]

},
// restaurant 8
{
 id:"restaurant8",
 name:"3 Cheers",
 image:"https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg",
 category:"Steam Momos",
 rating:4.2,
 reviews:"2435",
     time:"23-25",
menu: [
  {
    category: "Momos",
    items: [
      { id: 801, name: "Steam Veg Momos", description: "Steamed momos with chutney", price: 99 },
      { id: 802, name: "Fried Momos", description: "Crispy fried momos", price: 119 }
    ]
  },
  {
    category: "Snacks",
    items: [
      { id: 803, name: "Spring Rolls", description: "Crispy veg rolls", price: 109 },
      { id: 804, name: "Chilli Potato", description: "Spicy chilli tossed potatoes", price: 129 }
    ]
  }
]

},
// restaurant 9
{
 id:"restaurant9",
 name:"Vrindham Bhog",
 image:"https://i.pinimg.com/474x/b7/8b/65/b78b65d7f88b1930e339a3ca1a6d96cb.jpg",
 category:" North Indian Veg Thali",
 rating:4.2,
 reviews:"2435",
     time:"23-25",
menu: [
  {
    category: "Thali",
    items: [
      { id: 901, name: "Mini Veg Thali", description: "2 sabzi, dal, roti, rice", price: 149 },
      { id: 902, name: "Special Veg Thali", description: "3 sabzi, paneer, roti, rice, sweet", price: 199 }
    ]
  },
  {
    category: "Sweets",
    items: [
      { id: 903, name: "Gulab Jamun", description: "Soft sugar soaked sweet", price: 40 },
      { id: 904, name: "Rasgulla", description: "Spongy Bengali sweet", price: 40 }
    ]
  }
]

},

// restaurant 10
{
 id:"restaurant10",
 name:"Peddlers",
 image:"https://i.pinimg.com/1200x/7f/6d/3e/7f6d3ebdca842e61864b698a277c5418.jpg",
 category:"Crispy Dosa",
 rating:4.2,
 reviews:"2435",
     time:"23-25",
menu: [
  {
    category: "Dosa",
    items: [
      { id: 1001, name: "Plain Dosa", description: "Crispy dosa with sambhar", price: 99 },
      { id: 1002, name: "Masala Dosa", description: "Stuffed potato masala dosa", price: 129 }
    ]
  },
  {
    category: "Idli & Vada",
    items: [
      { id: 1003, name: "Idli Sambhar", description: "Soft idlis with sambhar", price: 79 },
      { id: 1004, name: "Medu Vada", description: "Crispy vada with chutney", price: 89 }
    ]
  }
]

},

];


//  export const foodItems = [
//   // 🍕 PIZZA
//   {
//     id:1,
//     category: "Pizza",
//     name: "Margherita Pizza",
//     image:"https://i.pinimg.com/736x/9d/5d/30/9d5d3011f7771054bbd01b72ab235c68.jpg",
//     description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
//     price: 249
//   },
//   {
//       id:2,
//     category: "Pizza",
//     name: "Farmhouse Pizza",
//     description: "Loaded with onions, capsicum, tomatoes, and mushrooms.",
//     price: 349
//   },
//   {
//       id:3,
//     category: "Pizza",
//     name: "Pepperoni Pizza",
//     description: "Crispy pepperoni slices with rich mozzarella cheese.",
//     price: 399
//   },

//   // 🍔 BURGER
//   {
//       id:4,
//     category: "Burger",
//     name: "Classic Veg Burger",
//     description: "Crispy veg patty with fresh lettuce and creamy mayo.",
//     price: 149
//   },
//   {
//       id:5,
//     category: "Burger",
//     name: "Cheese Burger",
//     description: "Juicy burger layered with melted cheese and soft buns.",
//     price: 179
//   },
//   {
//       id:6,
//     category: "Burger",
//     name: "Chicken Burger",
//     description: "Crispy chicken patty with spicy sauce and lettuce.",
//     price: 199
//   },

//   // 🍗 BIRYANI
//   {
//       id:7,
//     category: "Biryani",
//     name: "Chicken Biryani",
//     description: "Aromatic basmati rice cooked with tender chicken and spices.",
//     price: 299
//   },
//   {
//       id:8,
//     category: "Biryani",
//     name: "Veg Biryani",
//     description: "Flavorful rice cooked with fresh vegetables and herbs.",
//     price: 229
//   },
//   {
//       id:9,
//     category: "Biryani",
//     name: "Hyderabadi Biryani",
//     description: "Authentic spicy biryani with rich flavors.",
//     price: 349
//   },

//   // 🍜 CHINESE
//   {
//       id:10,
//     category: "Chinese",
//     name: "Hakka Noodles",
//     description: "Stir-fried noodles tossed with veggies and sauces.",
//     price: 199
//   },
//   {
//       id:11,
//     category: "Chinese",
//     name: "Manchurian",
//     description: "Crispy veggie balls tossed in spicy Indo-Chinese sauce.",
//     price: 219
//   },
//   {
//       id:12,
//     category: "Chinese",
//     name: "Fried Rice",
//     description: "Classic fried rice with vegetables and soy sauce.",
//     price: 189
//   },

//   // 🥞 SOUTH INDIAN
//   {
//       id:13,
//     category: "South Indian",
//     name: "Masala Dosa",
//     description: "Crispy dosa filled with spicy potato masala.",
//     price: 159
//   },
//   {
//       id:14,
//     category: "South Indian",
//     name: "Idli Sambhar",
//     description: "Soft idlis served with hot sambhar and chutney.",
//     price: 129
//   },
//   {
//       id:15,
//     category: "South Indian",
//     name: "Uttapam",
//     description: "Thick dosa topped with onions, tomatoes, and veggies.",
//     price: 169
//   },

//   // 🍰 DESSERTS
//   {
//       id:16,
//     category: "Dessert",
//     name: "Chocolate Brownie",
//     description: "Rich and fudgy chocolate brownie.",
//     price: 149
//   },
//   {
//       id:17,
//     category: "Dessert",
//     name: "Ice Cream Sundae",
//     description: "Vanilla ice cream topped with chocolate syrup and nuts.",
//     price: 129
//   },
//   {
//       id:18,
//     category: "Dessert",
//     name: "Gulab Jamun",
//     description: "Soft milk-solid dumplings soaked in sugar syrup.",
//     price: 99
//   },

//   // 🥤 BEVERAGES
//   {
//       id:19,
//     category: "Beverage",
//     name: "Cold Coffee",
//     description: "Chilled coffee blended with milk and ice.",
//     price: 119
//   },
//   {
//       id:20,
//     category: "Beverage",
//     name: "Fresh Lime Soda",
//     description: "Refreshing lime soda with mint flavor.",
//     price: 89
//   }
// ];



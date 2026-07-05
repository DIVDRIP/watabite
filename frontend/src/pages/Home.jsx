import { useContext } from "react";
import Hero from "../components/Hero";
import { assets } from "../assets/assets";
import RestaurantCards from "../components/RestaurantCards";
import { AppContext } from "../context/AppContext";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const { restaurantsDetails, navigate } = useContext(AppContext);

  const handleSelect = (restaurant) => {
    navigate("/restaurants", { state: { restaurantId: restaurant.id } });
  };

  return (
    <div>
      <Hero />

      {/* cards section */}
      <div className="px-6 md:px-20 py-16">
        <h1 className="text-xl md:text-3xl pb-4 font-semibold text-center md:text-left leading-tight lg:leading-16">
          Popular Restaurants Near You
        </h1>
        <RestaurantCards
          restaurants={restaurantsDetails.slice(0, 4)}
          onSelect={handleSelect}
        />
      </div>

      {/* How watabite works section */}
      <div
        className="px-6 mt-20 md:px-30 h-90 bg-cover flex flex-col items-center justify-center bg-blend-overlay bg-black/50 gap-8"
        style={{ backgroundImage: `url(${assets.webbanner1})` }}
      >
        <h1 className="text-xl md:text-3xl font-semibold text-center md:text-left">
          How Watabite Works
        </h1>

        <div className="flex flex-col md:flex-row gap-12">
          {/* CARD 1 */}
          <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/6 backdrop-blur-xl shadow-xl p-6 py-10">
            <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <h2 className="text-lg font-semibold">Browse Restaurants</h2>
            <p className="text-sm text-gray-400">
              Discover nearby restaurants with ratings, menus, and reviews to
              help you decide where to order food.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/6 backdrop-blur-xl shadow-xl p-6 py-10">
            <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <h2 className="text-lg font-semibold">Choose Food</h2>
            <p className="text-sm text-gray-400">
              Select your favorite dishes, customize your order easily, and add
              items to your cart in seconds.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/6 backdrop-blur-xl shadow-xl p-6 py-10">
            <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <h2 className="text-lg font-semibold">Fast Delivery</h2>
            <p className="text-sm text-gray-400">
              Enjoy quick and reliable delivery with real-time order tracking
              straight from the restaurant to your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Track your order in Real-Time section */}
      <div
        className="px-6 py-10 mt-20 md:px-30 bg-cover flex flex-col items-start justify-center gap-8 bg-blend-overlay bg-black/95"
        style={{ backgroundImage: `url(${assets.deliverybanner})` }}
      >
        <h1 className="text-xl md:text-3xl font-semibold text-center md:text-left">
          Track Your Order in Real-Time
        </h1>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-row rounded-2xl p-6 items-center max-1/2 gap-5 border border-white/20 backdrop-blur-xl shadow-xl shadow-white/5">
            <img
              src={assets.deliveryillust}
              className="h-100 bg-cover"
              alt=""
            />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row rounded-2xl p-6 justify-between items-center max-w-xl gap-5 border border-white/20 backdrop-blur-xl shadow-xl shadow-white/5">
              <div className="text-center">
                <h2 className="text-3xl text-primary font-bold">42k+</h2>
                <p className="text-sm text-gray-400 mt-1">Restaurants</p>
              </div>
              {/* <!-- Divider --> */}
              <div className="h-10 w-px bg-gray-700"></div>

              <div className="text-center">
                <h2 className="text-3xl text-primary font-bold">400k+</h2>
                <p className="text-sm text-gray-400 mt-1">Orders Delivered</p>
              </div>
              {/* <!-- Divider --> */}
              <div className="h-10 w-px bg-gray-700"></div>

              <div className="text-center">
                <h2 className="text-3xl text-primary font-bold">98%</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Satisfied Customers
                </p>
              </div>
            </div>
            <img src={assets.deliverygif} alt="" className="h-80 object-contain" />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;

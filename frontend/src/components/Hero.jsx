import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <img src={assets.herobanner} alt="" className="w-full" />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left max-w-160 md:max-w-45rem leading-tight lg:leading-16">
          Your Smart Food Ordering & Delivery Platform
        </h1>
        <span className="font-extralight text-[18px] max-w-125 text-center mt-5 md:text-left leading-tight md:leading-7 tracking-wide text-white/70">
          Order from your favorite restaurants in just a few taps with Watabite.
          Fast, easy, and always delicious.
        </span>
        <div className="flex flex-col items-center mt-6 font-medium gap-6">
          <Link
            to="/restaurants"
            className="flex group items-center gap-2 px-7 rounded text-whit py-3 bg-primary text-black font-bold cursor-pointer"
          >
            Order Now
            <img src="#arrow icon" alt="" className="md:hidden transition group-focus:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

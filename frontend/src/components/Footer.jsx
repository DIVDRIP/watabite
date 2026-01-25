import { assets } from "../assets/assets";

const Footer = () => {
  return (

      <footer className="flex flex-col items-center justify-around w-full py-16 text-sm bg-black text-white">
        <img src={assets.logo} alt="Watabite Logo" className="h-11 w-auto" />
        <p className="mt-4 text-center text-primary">
          Copyright © 2026 Watabite. All
          rights reservered.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <a
            href="#"
            className="font-medium text-white hover:text-primary transition-all"
          >
            Partner With Us
          </a>
          <div className="h-4 w-px bg-black/20"></div>
          <a
            href="#"
            className="font-medium text-white hover:text-primary transition-all"
          >
            Ride With Us
          </a>
        </div>
      </footer>
  );
};

export default Footer;

const ContactForm = () => {
  return (

    <section className="relative mt-20 bg-black flex flex-col md:flex-row justify-center items-start px-30 py-10 gap-20">

      {/* Glow background */}
      <div className="absolute inset-0 size-140 bg-green-500/35 rounded-full blur-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10"></div>

      <div className="text-center md:text-left mt-12">
        <div className="flex items-center  p-1.5 rounded-full border border-green-900 text-xs w-fit mx-auto md:mx-0">
          <div className="flex items-center">
            <img
              className="size-7 rounded-full border border-green-900"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage1"
            />
            <img
              className="size-7 rounded-full border border-green-900 -translate-x-2"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="userImage2"
            />
            <img
              className="size-7 rounded-full border border-green-900 -translate-x-4"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
              alt="userImage3"
            />
          </div>
          <p className="-translate-x-2 text-xs text-slate-200">
            Join community of 1M+ Happy Eaters
          </p>
        </div>
        <h1 className="font-medium text-3xl md:text-5xl/15 bg-linear-to-r from-white to-green-300 bg-clip-text text-transparent max-w-[470px] mt-4">
          Ready to Satisfy Your Cravings Faster?
        </h1>
        <p className="text-sm/6 text-white max-w-[345px] mt-4 mx-auto md:mx-0">
          Let Watabite connect you with top restaurants and deliver your favorite meals every time.
        </p>
      </div>

      <div className="w-full max-w-lg bg-[#00A63E]/0 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">Name</label>
            <input
              type="text"
              required
              placeholder="Eden Johnson"
              className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Email</label>
            <input
              type="email"
              required
              placeholder="Eden@example.com"
              className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="4"
              required
              className="w-full bg-[#00A63E]/5 border border-white/20 rounded-lg px-4 py-3 text-white/40 placeholder:text-white/40 placeholder:text-sm focus:outline-none focus:border-green-600 transition resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs md:text-sm text-white/60 max-w-3xs">
              By submitting, you agree to our{" "}
              <span className="text-white">Terms</span> and{" "}
              <span className="text-white">Privacy Policy</span>.
            </p>
            <button
              type="submit"
              className="bg-linear-to-r from-green-950 to-green-600 hover:from-green-600 hover:to-green-950 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

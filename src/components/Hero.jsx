import FORD from "../images/GT500.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0a0a0a]">
      {/* Red ambient underglow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/15 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#1a1a1a] border border-[#2e2e2e] px-3.5 py-1.5 rounded-full text-xs font-medium text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>Track Experience & Museum Open Daily</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Experience the Pinnacle of{" "}
              <span className="text-red-500 underline decoration-red-500/30 decoration-4">
                Modern Sports Cars
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Step into an electrifying temple of high-speed engineering. From roaring naturally aspirated V10s and twin-turbo V8s to cutting-edge hybrid hypercars, immerse yourself in pure automotive adrenaline.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#featured"
                className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Supercars
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-transparent hover:bg-zinc-800 text-gray-200 hover:text-white font-semibold px-8 py-3.5 rounded-lg border border-zinc-700 hover:border-zinc-500 transition-all duration-200"
              >
                Book Tickets
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#222222] text-left">
              <div>
                <p className="text-xs text-gray-400">Top Acceleration</p>
                <p className="text-sm font-bold text-white">0-60 in 2.1s</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Peak Power</p>
                <p className="text-sm font-bold text-white">986+ HP</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Top Speed</p>
                <p className="text-sm font-bold text-white">211+ MPH</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Sports Car Image */}
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-zinc-700 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#141414] shadow-2xl">
                <img
                      src={FORD}
                      alt=" sports car"
                      className="w-full h-80 sm:h-96 md:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                     loading="eager"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">
                        Flagship Showcase
                      </span>
                      <h3 className="text-xl font-bold text-white">Ford Mustang</h3>
                    </div>
                    <span className="text-xs bg-red-600 text-white font-medium px-3 py-1 rounded-full">
                      Track Pavilion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

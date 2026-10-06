import { museumStats } from "../data/cars";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Museum Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80"
                alt="Apex Sports Car Museum High-Tech Exhibition"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-red-500 text-xs font-semibold uppercase tracking-wider">
                  Aerodynamic Sanctuary
                </span>
                <p className="text-white text-base font-medium mt-1">
                  The Hypercar Pavilion showcasing active aero, telemetry simulators, and carbon monocoques.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Statistics */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
            <div>
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-2">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Celebrating Pure Speed, Aerodynamics & Extreme Performance
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed text-base">
              At <strong className="text-white">Apex Sports Car Museum</strong>, we celebrate the relentless pursuit of speed, downforce, and lap-record dominance. We showcase only high-performance sports cars, supercars, and hypercars that redefine what is mechanically possible.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm">
              From wind tunnel-tested active spoilers and carbon-ceramic brakes to hybrid hypercar powertrains producing four-digit horsepower, our exhibits provide an insider look into the bleeding edge of motorsport engineering.
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {museumStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#141414] border border-[#242424] rounded-xl p-4 text-center hover:border-red-600/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-red-500">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote / Highlight */}
            <div className="p-4 rounded-lg bg-[#141414] border-l-4 border-red-600">
              <p className="text-sm italic text-gray-300">
                &ldquo;Horsepower is how fast you hit the wall. Torque is how far you take the wall with you.&rdquo;
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

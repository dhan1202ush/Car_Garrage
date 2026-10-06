import CarCard from "./CarCard";
import { featuredCars } from "../data/cars";

export default function FeaturedCars({ onViewDetails }) {
  return (
    <section id="featured" className="py-20 bg-[#0e0e0e] border-t border-b border-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-2">
            High-Performance Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Sports Cars & Supercars
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Hand-picked contemporary engineering triumphs featuring active aerodynamics, carbon monocoques, and jaw-dropping acceleration.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

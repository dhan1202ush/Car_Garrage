export default function CarCard({ car, onViewDetails }) {
  const { name, year, brand, description, image, engine, horsepower, acceleration, topSpeed } = car;

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden flex flex-col hover:border-red-600/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 group">
      
      {/* Car Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Brand & Year Badges */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-zinc-700 text-xs font-semibold text-gray-200 px-2.5 py-1 rounded">
          {brand}
        </div>
        <div className="absolute top-3 right-3 bg-red-600 text-xs font-bold text-white px-2.5 py-1 rounded shadow">
          {year}
        </div>

        {/* Acceleration Tag */}
        {acceleration && (
          <div className="absolute bottom-3 left-3 bg-zinc-950/90 border border-zinc-800 text-[11px] font-semibold text-red-400 px-2.5 py-0.5 rounded backdrop-blur-sm">
            ⚡ {acceleration}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
            {name}
          </h3>

          {/* Performance Specifications */}
          <div className="flex flex-wrap items-center gap-2 mt-2.5 text-xs text-zinc-400">
            {horsepower && (
              <span className="inline-flex items-center gap-1 bg-[#1e1e1e] px-2 py-0.5 rounded border border-zinc-800 text-zinc-300 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                {horsepower}
              </span>
            )}
            {topSpeed && (
              <span className="inline-flex items-center gap-1 bg-[#1e1e1e] px-2 py-0.5 rounded border border-zinc-800 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                {topSpeed}
              </span>
            )}
          </div>

          {engine && (
            <p className="text-[11px] text-zinc-500 mt-2 font-mono">
              Engine: {engine}
            </p>
          )}

          <p className="text-sm text-gray-400 mt-2.5 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* View Details Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onViewDetails(car)}
            className="w-full bg-[#1e1e1e] hover:bg-red-600 text-gray-200 hover:text-white font-semibold text-sm py-2.5 px-4 rounded-lg border border-zinc-700 hover:border-red-600 transition-colors duration-200 cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>

    </div>
  );
}

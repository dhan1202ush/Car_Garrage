import { collectionCategories } from "../data/cars";

export default function Collection() {
  return (
    <section id="collection" className="py-20 bg-[#0e0e0e] border-t border-b border-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-2">
            The Speed Pavilions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore By Performance Category
          </h2>
          <p className="mt-3 text-base text-gray-400">
            From stripped-out GT3-class track weapons to multimillion-dollar hybrid hypercars, discover our dedicated speed zones.
          </p>
        </div>

        {/* 4 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden hover:border-red-600/70 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
            >
              {/* Image with overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">
                  {category.era}
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-red-500 font-semibold">
                  <span>Enter Pavilion</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

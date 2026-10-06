export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070707] border-t border-[#1f1f1f] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-extrabold text-base">
                ⚡
              </div>
              <span className="text-lg font-extrabold tracking-wider text-white">
                APEX SPORTS CAR MUSEUM
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              The premier destination dedicated to modern sports cars, track-proven supercars, hypercars, and high-velocity engineering.
            </p>
            <p className="text-xs text-red-400 font-medium">
              Open Daily | 9:00 AM – 7:00 PM
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-red-400 transition-colors">
                  Featured Supercars
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">
                  About Museum
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-red-400 transition-colors">
                  Performance Categories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  Book Tickets & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Links & Community */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Follow The Speed
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400 transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>Instagram</span>
                  <span className="text-[10px] text-zinc-500">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400 transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>YouTube</span>
                  <span className="text-[10px] text-zinc-500">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400 transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>Twitter / X</span>
                  <span className="text-[10px] text-zinc-500">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400 transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>TikTok</span>
                  <span className="text-[10px] text-zinc-500">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p> Apex Sports Car Museum. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-zinc-400">
            Powered by React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

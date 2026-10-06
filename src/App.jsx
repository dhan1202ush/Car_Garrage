import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import About from "./components/About";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Handler for viewing sports car details
  const handleViewDetails = (car) => {
    alert(
      `🏁 Sports Car Specification:\n` +
      `------------------------------------\n` +
      `Model: ${car.name} (${car.year})\n` +
      `Manufacturer: ${car.brand}\n` +
      `Power: ${car.horsepower || "N/A"}\n` +
      `Acceleration: ${car.acceleration || "N/A"}\n` +
      `Top Speed: ${car.topSpeed || "N/A"}\n` +
      `Engine: ${car.engine || "High Performance"}\n\n` +
      `Overview:\n${car.description}`
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 flex flex-col font-sans">
      {/* 1. Fixed Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Sports Cars / Supercars Grid */}
        <FeaturedCars onViewDetails={handleViewDetails} />

        {/* 4. About Museum, Aerodynamics & Stats */}
        <About />

        {/* 5. Performance Pavilions (Supercars, Hypercars, Track Weapons, GTs) */}
        <Collection />

        {/* 6. Contact & Ticket Booking Form */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default App;

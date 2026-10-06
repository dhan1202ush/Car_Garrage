// Data for Apex Sports Car Museum

import FORD from "../images/GT500.jpg";
import BENZ from "../images/AMG.jpg";
import PORSCHE from "../images/911.jpg";
import CHEVROLET from "../images/Chevrolet Camaro.jpg";
import LAMBO from "../images/Lamborghini.jpg";
import FERRARI from "../images/ferrari.jpg";
import NISSAN from "../images/GT-R.jpg";
import MCLAREN from "../images/McLaren.jpg";

export const featuredCars = [
  {
    id: 1,
    name: "Ferrari SF90 Stradale",
    year: 2024,
    brand: "Ferrari",
    description: "Ferrari's flagship plug-in hybrid supercar combining a twin-turbo V8 with three electric motors to unleash blistering track acceleration.",
    image: FERRARI,
    engine: "4.0L Twin-Turbo V8 Hybrid",
    horsepower: "986 HP",
    acceleration: "0-60 in 2.1s",
    topSpeed: "211 mph"
  },
  {
    id: 2,
    name: "Porsche 911 GT3 RS",
    year: 2023,
    brand: "Porsche",
    description: "The ultimate road-legal track weapon featuring active aerodynamics, drag reduction system (DRS), and a naturally aspirated flat-six scream.",
    image: PORSCHE,
    engine: "4.0L Naturally Aspirated Flat-6",
    horsepower: "518 HP",
    acceleration: "0-60 in 2.9s",
    topSpeed: "184 mph"
  },
  {
    id: 3,
    name: "Lamborghini Huracán STO",
    year: 2023,
    brand: "Lamborghini",
    description: "A super-sports car created with a single purpose: bringing the genuine thrill of Squadra Corse racetrack technology to the public road.",
    image: LAMBO,
    engine: "5.2L Naturally Aspirated V10",
    horsepower: "631 HP",
    acceleration: "0-60 in 3.0s",
    topSpeed: "193 mph"
  },
  {
    id: 4,
    name: "McLaren 720S",
    year: 2022,
    brand: "McLaren",
    description: "Engineered around an ultra-light carbon fiber Monocage II chassis with iconic dihedral doors and relentless twin-turbo acceleration.",
    image: MCLAREN,
    engine: "4.0L Twin-Turbo V8",
    horsepower: "710 HP",
    acceleration: "0-60 in 2.7s",
    topSpeed: "212 mph"
  },
  {
    id: 5,
    name: "Chevrolet Corvette C8 Z06",
    year: 2024,
    brand: "Chevrolet",
    description: "Mid-engine American masterpiece powered by the world's most powerful naturally aspirated production V8 with an 8,600 RPM redline.",
    image: CHEVROLET,
    engine: "5.5L Flat-Plane Crank V8",
    horsepower: "670 HP",
    acceleration: "0-60 in 2.6s",
    topSpeed: "195 mph"
  },
  {
    id: 6,
    name: "Nissan GT-R NISMO",
    year: 2023,
    brand: "Nissan",
    description: "Nicknamed 'Godzilla', this precision all-wheel-drive monster features turbochargers adapted directly from GT3 racing technology.",
    image: NISSAN,
    engine: "3.8L Twin-Turbo V6",
    horsepower: "600 HP",
    acceleration: "0-60 in 2.5s",
    topSpeed: "205 mph"
  }
];

export const collectionCategories = [
  {
    id: "supercars",
    title: "Modern Supercars",
    era: "Mid-Engine V8 & V10",
    description: "Aerodynamic carbon-composite icons engineered for exhilarating cornering g-forces and instant throttle response.",
    image: LAMBO
  },
  {
    id: "hypercars",
    title: "Hypercar Hall",
    era: "1,000+ HP Club",
    description: "Pinnacle engineering marvels pushing the limits of physics with active aero, quad-turbos, and hybrid propulsion.",
    image: FERRARI
  },
  {
    id: "track-weapons",
    title: "Track-Day Specials",
    era: "Road-Legal GT Racers",
    description: "Stripped-out cockpits, swan-neck carbon rear wings, roll cages, and Michelin Pilot Sport Cup 2 R rubber.",
    image: PORSCHE
  },
  {
    id: "grand-tourers",
    title: "Grand Tourers",
    era: "Luxury High-Speed Cruisers",
    description: "V12 grand tourers designed to cross continents at 200 mph in handcrafted leather luxury and effortless power.",
    image: MCLAREN
  }
];

export const museumStats = [
  { value: "80+", label: "Exotic Sports Cars" },
  { value: "15+", label: "World Speed Records" },
  { value: "10,000+", label: "Combined Horsepower" }
];

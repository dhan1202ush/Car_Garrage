# Apex Sports Car Museum Website (React.js + Tailwind CSS)

A clean, modern, and beginner-friendly **Sports Car & Supercar Museum** website built with React.js and Tailwind CSS. Specially crafted for students and developers to easily explain in technical interviews.

---

## 🏎️ Features

- **No Classic Cars**: Dedicated exclusively to modern sports cars, track weapons, and hypercars.
- **Sticky Responsive Navbar**: Smooth scrolling navigation (`#home`, `#featured`, `#about`, `#collection`, `#contact`) with mobile hamburger toggle (`useState`).
- **Hero Section**: High-impact modern supercar typography, 0-60 in 2.1s highlight, and Porsche 911 GT3 RS showcase.
- **Featured Fleet Grid**: Renders 6 modern sports cars and supercars mapped from `src/data/cars.js` using reusable `CarCard` components:
  - Ferrari SF90 Stradale (986 HP, 0-60 in 2.1s)
  - Porsche 911 GT3 RS (Active Aero DRS, 518 HP)
  - Lamborghini Huracán STO (Naturally aspirated V10, 631 HP)
  - McLaren 720S (Carbon Monocage II, 710 HP)
  - Chevrolet Corvette C8 Z06 (Flat-Plane Crank V8, 670 HP)
  - Nissan GT-R NISMO (Twin-Turbo V6 AWD, 600 HP)
- **Museum Story & Metrics**: Curated story on aerodynamics, carbon monocoques, and wind-tunnel testing.
- **Performance Pavilions**: 4 wings (Modern Supercars, Hypercar Hall, Track-Day Specials, Grand Tourers).
- **Interactive Reservation Form**: Controlled form handling (`e.preventDefault()`) with package selection and confirmation state.
- **Footer**: Brand summary, quick anchor links, social links, and copyright.

---

## 📁 Project Structure

```text
classic-car-museum/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile menu toggle
│   │   ├── Hero.jsx          # Hero banner with headlines and CTAs
│   │   ├── FeaturedCars.jsx  # Grid wrapper mapping over cars.js
│   │   ├── CarCard.jsx       # Reusable sports car card with specs
│   │   ├── About.jsx         # Supercar heritage and performance statistics
│   │   ├── Collection.jsx    # Categories (Supercars, Hypercars, Track, GT)
│   │   ├── Contact.jsx       # Booking form and paddock visiting details
│   │   └── Footer.jsx        # Links, socials, and copyright
│   ├── data/
│   │   └── cars.js           # Modern sports cars data source
│   ├── App.jsx               # Main layout orchestrator & alert handler
│   ├── main.jsx              # React DOM entry point
│   └── index.css             # Tailwind directives & base styles
```

---

## 🚀 How to Run the Project

1. Open your terminal in this project directory:
   ```bash
   cd C:\Users\DELL\.gemini\antigravity\scratch\classic-car-museum
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

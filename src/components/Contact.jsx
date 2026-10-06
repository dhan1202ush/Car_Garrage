import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: "2",
    date: "",
    experience: "admission",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please enter both your name and email address.");
      return;
    }
    // Show success message without backend
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      tickets: "2",
      date: "",
      experience: "admission",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-2">
            Plan Your Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Book Supercar Tickets & Inquiries
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Book admission, schedule a professional race simulator session, or inquire about private paddock track-day events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Museum Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-5">
              <h3 className="text-xl font-bold text-white border-b border-zinc-800 pb-3">
                Museum & Circuit Info
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Location</h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                    100 Apex Raceway Drive, Circuit Sector 4<br />
                    Silverstone Circuit Way, Las Vegas, NV 89115
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Phone</h4>
                  <p className="text-xs text-gray-400 mt-0.5">+1 (800) 773-APEX (2739)</p>
                  <p className="text-xs text-zinc-500">Mon-Sun: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email</h4>
                  <p className="text-xs text-gray-400 mt-0.5">supercars@apexmuseum.org</p>
                  <p className="text-xs text-zinc-500">Instant electronic ticket delivery</p>
                </div>
              </div>

              {/* Experience Admission Pricing */}
              <div className="mt-6 p-4 rounded-lg bg-[#0e0e0e] border border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                  Passes & Experiences
                </h4>
                <div className="flex justify-between text-xs py-1 border-b border-zinc-800 text-gray-300">
                  <span>General Supercar Museum Pass</span>
                  <span className="font-semibold text-white">$28.00</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-zinc-800 text-gray-300">
                  <span>F1 Motion Simulator Experience</span>
                  <span className="font-semibold text-white">$45.00</span>
                </div>
                <div className="flex justify-between text-xs py-1 text-gray-300">
                  <span>VIP Paddock & Cockpit Access</span>
                  <span className="font-semibold text-red-400">$85.00</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact & Ticket Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 sm:p-8">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-600/20 text-red-500 border border-red-600/40 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Pass Reserved, {formData.name}!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Your sports car museum ticket request has been logged. Confirmation and e-tickets are sent to{" "}
                    <span className="text-red-400 font-semibold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 inline-block bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold py-2 px-5 rounded-lg border border-zinc-600 transition cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white border-b border-zinc-800 pb-3">
                    Reserve Passes & Track Sessions
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#1c1c1e] border border-zinc-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@speed.com"
                        className="w-full bg-[#1c1c1e] border border-zinc-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Number of Tickets */}
                    <div>
                      <label htmlFor="tickets" className="block text-xs font-semibold text-gray-300 mb-1">
                        Number of Passes
                      </label>
                      <select
                        id="tickets"
                        name="tickets"
                        value={formData.tickets}
                        onChange={handleChange}
                        className="w-full bg-[#1c1c1e] border border-zinc-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5+">5+ Group Track Day</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="date" className="block text-xs font-semibold text-gray-300 mb-1">
                        Visit Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-[#1c1c1e] border border-zinc-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Experience Type */}
                  <div>
                    <label htmlFor="experience" className="block text-xs font-semibold text-gray-300 mb-1">
                      Experience Package
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-[#1c1c1e] border border-zinc-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition"
                    >
                      <option value="admission">General Supercar Exhibit ($28)</option>
                      <option value="simulator">Supercar + F1 Simulator Ride ($45)</option>
                      <option value="paddock">VIP All-Access Paddock & Cockpit Tour ($85)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1">
                      Questions or Special Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Let us know if you'd like a private supercar photo shoot, corporate hospitality, or track ride-along..."
                      className="w-full bg-[#1c1c1e] border border-zinc-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-200 hover:-translate-y-0.5 text-sm cursor-pointer"
                    >
                      Confirm Reservation Request
                    </button>
                    <p className="text-[11px] text-zinc-500 text-center mt-2">
                      Zero upfront charge. Pass payment completed on entry or via digital pass link.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

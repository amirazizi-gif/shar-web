// import Link from "next/link";

// export default function Home() {
//   const divisions = [
//     {
//       title: "Mechanical & Electrical Engineering",
//       icon: "⚡",
//       description:
//         "Comprehensive M&E services including power systems, HVAC, fire protection, and building automation with over 30 man-years of experience.",
//       services: [
//         "11KV Power Systems",
//         "HVAC Solutions",
//         "Fire Protection",
//         "Building Automation",
//       ],
//     },
//     {
//       title: "Civil & Structural Engineering",
//       icon: "🏗️",
//       description:
//         "Complete civil and construction services from design to finishing, delivered by skilled and experienced work crews.",
//       services: [
//         "Building Construction",
//         "Road Works",
//         "IBS Steel Frame",
//         "Waterproofing",
//       ],
//     },
//     {
//       title: "Event Management",
//       icon: "🎪",
//       description:
//         "Professional technical services for entertainment and events with premium sound, lighting, and staging equipment.",
//       services: [
//         "Stage & Trusses",
//         "Sound Systems",
//         "LED Displays",
//         "Event Production",
//       ],
//     },
//     {
//       title: "Engineering Support Services",
//       icon: "🛠️",
//       description:
//         "Advanced services including LiDAR mapping, condition monitoring, and solar PV solutions with cutting-edge technology.",
//       services: [
//         "LiDAR Mapping",
//         "Solar PV Systems",
//         "CBMM Services",
//         "Geospatial Solutions",
//       ],
//     },
//   ];

//   const stats = [
//     { number: "20+", label: "Years Experience" },
//     { number: "500+", label: "Projects Completed" },
//     { number: "G7", label: "CIDB Grade" },
//     { number: "4", label: "Core Divisions" },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white py-20">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/projects/home.jpg')",
//           }}
//         ></div>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black opacity-60"></div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               Building Tomorrow&apos;s Infrastructure Today
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-orange-50">
//               Multi-discipline engineering excellence across Civil, Mechanical,
//               Electrical, ICT Works and Event Management services in Sabah.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 href="/services"
//                 className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg"
//               >
//                 Our Services
//               </Link>
//               <Link
//                 href="/contact"
//                 className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition"
//               >
//                 Get In Touch
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-400 text-sm md:text-base">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Who We Are
//             </h2>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               SHAR Associates Sdn Bhd is a progressive and dynamic company
//               established in 2004, specializing in multi-discipline engineering
//               ventures with a commitment to excellence and innovation.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                 Our Vision
//               </h3>
//               <p className="text-lg text-gray-600 mb-6">
//                 To be the supplier and partner of choice to our clients both in
//                 domestic and regional markets.
//               </p>

//               <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                 Our Mission
//               </h3>
//               <p className="text-lg text-gray-600">
//                 To provide exceptional products and services that meet or exceed
//                 our clients expectations and create a conducive work environment
//                 for our employees.
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Why Choose SHAR?
//               </h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <span className="text-orange-600 text-2xl mr-3">✓</span>
//                   <span className="text-gray-700">
//                     Over 20 years of industry experience
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-600 text-2xl mr-3">✓</span>
//                   <span className="text-gray-700">
//                     CIDB G7 Grade certification
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-600 text-2xl mr-3">✓</span>
//                   <span className="text-gray-700">
//                     Multi-discipline engineering expertise
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-600 text-2xl mr-3">✓</span>
//                   <span className="text-gray-700">
//                     Proven track record with government and private sectors
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services/Divisions Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Our Core Divisions
//             </h2>
//             <p className="text-xl text-gray-600">
//               Comprehensive engineering solutions across multiple disciplines
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {divisions.map((division, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-8"
//               >
//                 <div className="text-5xl mb-4">{division.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {division.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">{division.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {division.services.map((service, idx) => (
//                     <span
//                       key={idx}
//                       className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
//                     >
//                       {service}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link
//               href="/services"
//               className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition"
//             >
//               View All Services
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-xl mb-8 text-orange-50 max-w-2xl mx-auto">
//             Let&apos;s discuss how SHAR Associates can bring your engineering
//             vision to life with our expertise and dedication.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg"
//           >
//             Contact Us Today
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for each service division
  const heroSlides = [
    {
      image: "/images/hero/mne.jpg", // Mechanical & Electrical
      alt: "Mechanical & Electrical Engineering",
    },
    {
      image: "/images/hero/civil.jpg", // Civil & Structural
      alt: "Civil & Structural Engineering",
    },
    {
      image: "/images/hero/event.jpg", // Event Management
      alt: "Event Management",
    },
    {
      image: "/images/hero/drone.jpg", // Engineering Support
      alt: "Engineering Support Services",
    },
    {
      image: "/images/hero/support.jpg", // Engineering Support
      alt: "Engineering Support Services",
    },
    {
      image: "/images/projects/home.jpg", // Engineering Support
      alt: "construction site",
    },
    {
      image: "/images/hero/ict.jpg", // Engineering Support
      alt: "ict works",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const divisions = [
    {
      title: "Mechanical & Electrical Engineering",
      icon: "⚡",
      description:
        "Comprehensive M&E services including power systems, HVAC, fire protection, and building automation with over 30 man-years of experience.",
      services: [
        "11KV Power Systems",
        "HVAC Solutions",
        "Fire Protection",
        "Building Automation",
      ],
    },
    {
      title: "Civil & Structural Engineering",
      icon: "🏗️",
      description:
        "Complete civil and construction services from design to finishing, delivered by skilled and experienced work crews.",
      services: [
        "Building Construction",
        "Road Works",
        "IBS Steel Frame",
        "Waterproofing",
      ],
    },
    {
      title: "Event Management",
      icon: "🎪",
      description:
        "Professional technical services for entertainment and events with premium sound, lighting, and staging equipment.",
      services: [
        "Stage & Trusses",
        "Sound Systems",
        "LED Displays",
        "Event Production",
      ],
    },
    {
      title: "Engineering Support Services",
      icon: "🛠️",
      description:
        "Advanced services including LiDAR mapping, condition monitoring, and solar PV solutions with cutting-edge technology.",
      services: [
        "LiDAR Mapping",
        "Solar PV Systems",
        "CBMM Services",
        "Geospatial Solutions",
      ],
    },
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "G7", label: "CIDB Grade" },
    { number: "4", label: "Core Divisions" },
  ];

  return (
    <div>
      {/* Hero Section with Sliding Background */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white py-20 overflow-hidden">
        {/* Sliding Background Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Tomorrow&apos;s Infrastructure Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-50">
              Multi-discipline engineering excellence across Civil, Mechanical,
              Electrical, ICT Works and Event Management services in Sabah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              SHAR Associates Sdn Bhd is a progressive and dynamic company
              established in 2004, specializing in multi-discipline engineering
              ventures with a commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                To be the supplier and partner of choice to our clients both in
                domestic and regional markets.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600">
                To provide exceptional products and services that meet or exceed
                our clients expectations and create a conducive work environment
                for our employees.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose SHAR?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Over 20 years of industry experience
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-700">
                    CIDB G7 Grade certification
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Multi-discipline engineering expertise
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Proven track record with government and private sectors
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Divisions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Divisions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive engineering solutions across multiple disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-8"
              >
                <div className="text-5xl mb-4">{division.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {division.title}
                </h3>
                <p className="text-gray-600 mb-6">{division.description}</p>
                <div className="flex flex-wrap gap-2">
                  {division.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-orange-50 max-w-2xl mx-auto">
            Let&apos;s discuss how SHAR Associates can bring your engineering
            vision to life with our expertise and dedication.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

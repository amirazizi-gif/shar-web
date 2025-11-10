import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Mechanical & Electrical Engineering",
      icon: "⚡",
      description:
        "Comprehensive M&E solutions for building systems, power distribution, and industrial applications",
      offerings: [
        {
          name: "Power Systems",
          details: [
            "11KV/415V Distribution",
            "Generator Installation",
            "UPS Systems",
            "Solar PV Installation",
          ],
        },
        {
          name: "Building Services",
          details: [
            "HVAC Systems",
            "Fire Protection & Alarm",
            "Building Automation",
            "Lightning Protection",
          ],
        },
        {
          name: "Medical M&E",
          details: [
            "Medical Grade UPS",
            "Isolated Power Systems",
            "Operation Theatre Equipment",
            "Medical Gas Systems",
          ],
        },
        {
          name: "Maintenance",
          details: [
            "Preventive Maintenance",
            "Condition Monitoring",
            "Thermography Survey",
            "Equipment Calibration",
          ],
        },
      ],
      sectors: [
        "Healthcare",
        "Education",
        "Commercial Buildings",
        "Industrial Plants",
        "Government Facilities",
      ],
    },
    {
      title: "Civil & Structural Engineering",
      icon: "🏗️",
      description:
        "Complete construction solutions from design to completion for various civil works",
      offerings: [
        {
          name: "Building Works",
          details: [
            "New Construction",
            "Renovation & Extension",
            "Structural Repairs",
            "IBS Steel Frame Installation",
          ],
        },
        {
          name: "Infrastructure",
          details: [
            "Road Construction",
            "Drainage Systems",
            "Water Reticulation",
            "Sewerage Systems",
          ],
        },
        {
          name: "Specialized Works",
          details: [
            "Waterproofing",
            "Concrete Surface Repairs",
            "PU Insulation",
            "Telecommunication Civil Works",
          ],
        },
      ],
      sectors: [
        "Residential",
        "Commercial",
        "Infrastructure",
        "Telecommunications",
        "Water & Utilities",
      ],
    },
    {
      title: "Event Management & Technical Support",
      icon: "🎪",
      description:
        "Professional event production with premium sound, lighting, and staging equipment",
      offerings: [
        {
          name: "Technical Production",
          details: [
            "Professional Sound Systems",
            "Stage Lighting Design",
            "LED Video Walls",
            "Staging & Trusses",
          ],
        },
        {
          name: "Event Services",
          details: [
            "Event Planning & Coordination",
            "Equipment Rental",
            "Technical Crew",
            "On-site Support",
          ],
        },
        {
          name: "Audio Visual",
          details: [
            "Full HD Projection",
            "PA Systems",
            "Broadcast Equipment",
            "Recording Services",
          ],
        },
      ],
      sectors: [
        "Corporate Events",
        "Festivals",
        "Government Functions",
        "Concerts",
        "Cultural Events",
      ],
    },
    {
      title: "Engineering Support Services",
      icon: "🛠️",
      description:
        "Advanced technical services including LiDAR mapping, solar solutions, and Non-Destructive Testing (NDT) monitoring",
      offerings: [
        {
          name: "Aerial(Drone) Services",
          details: [
            "Aerial Survey",
            "Topographic Mapping",
            "Drone Technology Services",
            "Geospatial Analysis",
          ],
        },
        {
          name: "Solar Solutions",
          details: [
            "Solar PV Design",
            "Installation & Commissioning",
            "Grid-Tie Systems",
            "Off-Grid Systems",
          ],
        },
        {
          name: " NDT Monitoring Services",
          details: [
            "Thermography Survey",
            "Ultrasound Testing",
            "Transformer Oil Analysis",
            "Vibration Analysis",
          ],
        },
      ],
      sectors: [
        "Oil & Gas",
        "Utilities",
        "Construction",
        "Property Development",
        "Renewable Energy",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-orange-50">
              Comprehensive engineering solutions across multiple disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to completion, we deliver integrated engineering
                solutions tailored to your project needs
              </p>
            </div>

            {/* Services Detail */}
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Service Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">{service.icon}</span>
                      <div>
                        <h3 className="text-3xl font-bold">{service.title}</h3>
                        <p className="text-orange-100 mt-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {service.offerings.map((offering, idx) => (
                        <div key={idx} className="bg-gray-50 p-5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">
                            {offering.name}
                          </h4>
                          <ul className="space-y-2">
                            {offering.details.map((detail, detailIdx) => (
                              <li
                                key={detailIdx}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <span className="text-orange-600 mr-2 mt-1">
                                  •
                                </span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Sectors Served */}
                    <div className="border-t pt-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Industry Sectors We Serve:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.sectors.map((sector, sectorIdx) => (
                          <span
                            key={sectorIdx}
                            className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose SHAR Associates
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Experienced Team
                </h3>
                <p className="text-gray-600">
                  Over 30 man-years of combined expertise across all engineering
                  disciplines
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Certified & Licensed
                </h3>
                <p className="text-gray-600">
                  CIDB G7 Grade, Suruhanjaya Tenaga Class A, and multiple
                  government registrations
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Proven Track Record
                </h3>
                <p className="text-gray-600">
                  500+ completed projects for government and private sectors
                  across Sabah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Contact us today to discuss your requirements and get a
              consultation
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-sm text-orange-100">088-430577</p>
                <p className="text-sm text-orange-100">012-8278939</p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-sm text-orange-100">shar_sb@yahoo.com</p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-sm text-orange-100">
                  Plaza Kingfisher, Block D
                </p>
                <p className="text-sm text-orange-100">Kota Kinabalu, Sabah</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

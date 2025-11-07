export default function Contact() {
  const offices = [
    {
      title: "Main Office",
      address: "Lot 76, Shop No: 5-2, Block D, Plaza Kingfisher",
      city: "88400 Kota Kinabalu, Sabah",
      phone: "088-430577",
      mobile: "012-8278939",
      fax: "088-434577",
      email: "shar_sb@yahoo.com",
    },
    {
      title: "Warehouse - Likas",
      address: "No. 33, Lorong Pari, Kg Likas",
      city: "Kota Kinabalu, Sabah",
      type: "Storage & Equipment",
    },
    {
      title: "Fabrication Yard - Papar",
      address: "No. 1, Jalan Kelanahan Takis",
      city: "Papar, Sabah",
      type: "Workshop & Fabrication",
    },
  ];

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone",
      details: ["088-430577", "012-8278939"],
      action: "Call us during business hours",
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["shar_sb@yahoo.com"],
      action: "Email us anytime",
    },
    {
      icon: "📠",
      title: "Fax",
      details: ["088-434577"],
      action: "Send documents via fax",
    },
    {
      icon: "📮",
      title: "Mail",
      details: ["P.O. Box 13111", "88835 Kota Kinabalu, Sabah"],
      action: "Send postal correspondence",
    },
  ];

  const departments = [
    {
      name: "General Inquiries",
      contact: "088-430577",
      email: "shar_sb@yahoo.com",
      description: "For general questions and information",
    },
    {
      name: "Project Quotations",
      contact: "012-8278939",
      email: "shar_sb@yahoo.com",
      description: "Request quotes for new projects",
    },
    {
      name: "M&E Services",
      contact: "012-8278939",
      email: "shar_sb@yahoo.com",
      description: "Mechanical & Electrical inquiries",
    },
    {
      name: "Event Management",
      contact: "012-8278939",
      email: "shar_sb@yahoo.com",
      description: "Event planning and equipment rental",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-orange-50">
              Get in touch with our team. We&apos;re here to help with your
              project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg text-center border-2 border-orange-100"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {method.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 text-sm font-medium"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">{method.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Contact by Department
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-orange-600 mb-3">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-700">
                      <span className="mr-2">📞</span>
                      <span className="font-semibold">{dept.contact}</span>
                    </p>
                    <p className="flex items-center text-gray-700">
                      <span className="mr-2">✉️</span>
                      <span className="font-semibold">{dept.email}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Locations
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border-2 border-orange-100"
                >
                  <h3 className="text-xl font-bold text-orange-600 mb-4">
                    {office.title}
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start">
                      <span className="mr-2 mt-1">📍</span>
                      <span>
                        {office.address}
                        <br />
                        {office.city}
                      </span>
                    </p>

                    {office.phone && (
                      <p className="flex items-center">
                        <span className="mr-2">📞</span>
                        <span>{office.phone}</span>
                      </p>
                    )}

                    {office.mobile && (
                      <p className="flex items-center">
                        <span className="mr-2">📱</span>
                        <span>{office.mobile}</span>
                      </p>
                    )}

                    {office.fax && (
                      <p className="flex items-center">
                        <span className="mr-2">📠</span>
                        <span>{office.fax}</span>
                      </p>
                    )}

                    {office.email && (
                      <p className="flex items-center">
                        <span className="mr-2">✉️</span>
                        <span>{office.email}</span>
                      </p>
                    )}

                    {office.type && (
                      <div className="pt-3 border-t border-orange-200">
                        <p className="text-sm text-gray-600 italic">
                          {office.type}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Postal Address */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold mb-3">Postal Address</h3>
                <p className="flex items-center justify-center">
                  <span className="mr-2">📮</span>
                  <span>P.O. Box 13111, 88835 Kota Kinabalu, Sabah</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Business Hours
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-100">
              {/* <div className="grid md:grid-cols-2 gap-8"> */}
              <div>
                <h3 className="font-bold text-orange-600 text-lg mb-4 flex items-center">
                  <span className="mr-2">🕐</span>
                  Office Hours
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold">Saturday:</span>
                    <span>8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold">Sunday:</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-semibold">Public Holidays:</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>
              </div>
              {/* <div>
                  <h3 className="font-bold text-orange-600 text-lg mb-4 flex items-center">
                    <span className="mr-2">🚨</span>
                    Emergency Contact
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg border-2 border-orange-200">
                    <p className="text-gray-700 mb-4">
                      For urgent matters outside business hours:
                    </p>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Mobile</p>
                      <p className="text-3xl font-bold text-orange-600 mb-1">
                        012-8278939
                      </p>
                      <p className="text-xs text-gray-500">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg font-semibold mb-2">
                  Google Maps Integration
                </p>
                <p className="text-sm mb-1">Plaza Kingfisher, Block D</p>
                <p className="text-sm">Kota Kinabalu, Sabah</p>
                <p className="text-xs mt-4 text-gray-500">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8451084247918!2d116.1206494744779!3d6.015993528853897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b6b5f159239d3%3A0x1429c19a804b0470!2sSHAR%20Associates%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1759889844162!5m2!1sen!2smy"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                Open in Google Maps →
              </a>
            </p>
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
            Contact us today via phone or email. Our team is ready to discuss
            your engineering needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:088430577"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg"
            >
              📞 Call Now
            </a>
            <a
              href="mailto:shar_sb@yahoo.com"
              className="inline-block bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-800 transition shadow-lg"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

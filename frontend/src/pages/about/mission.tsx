import Link from "next/link";

export default function About() {
  const milestones = [
    { year: '2004', event: 'Company Incorporation', description: 'SHAR Associates Sdn Bhd established with RM 1,000,000 authorized capital' },
    { year: '2003', event: 'Major Project Success', description: 'JPN Sabah project - 190 generator sets installed in rural schools in under 8 weeks' },
    { year: '2011-2017', event: 'Event Excellence', description: 'Successfully co-organized major events including Malaysia Day, Sabah Fest, and International Festivals' },
    { year: '2015', event: 'Business Expansion', description: 'Diversified into CBMM Services, Solar PV, and LiDAR & Aerial Mapping' },
    { year: '2025', event: 'Continued Growth', description: 'G7 CIDB Grade company serving government and private sectors across Sabah' }
  ];

  const management = [
    {
      name: 'Hj. Sharom A. Abdul Ghaffar',
      position: 'Managing Director',
      education: 'Institute Teknologi MARA - Accountancy',
      highlights: [
        'Former Account Officer at Lembaga Industri Getah Sabah',
        'Former Assistant General Manager at Pertubuhan Peladang Negeri Sabah',
        'Led numerous construction and infrastructure projects since 2002',
        'Expert in construction business and finance management'
      ]
    },
    {
      name: 'Rajas @ Razeis Ismail',
      position: 'Executive Director',
      education: 'University of Malaya - Electrical Engineering (Hons)',
      highlights: [
        'Former Electrical Engineer at Melawa 50MW Power Station',
        'Resident Engineer for UMS PH2 Development',
        '20+ years experience in M&E engineering',
        'Expert in HV systems, medical M&E, and building services'
      ]
    }
  ];

  const certifications = [
    { name: 'CIDB Registration', grade: 'G5 & G7', areas: 'Building, Civil & M&E Works' },
    { name: 'Suruhanjaya Tenaga', grade: 'Class A', areas: 'Electrical Contractor' },
    { name: 'PKK Bumiputera', status: 'Certified', areas: 'Bumiputera Status' },
    { name: 'Ministry of Finance', status: 'Registered', areas: 'Government Projects' },
    { name: 'PUKONSA', grade: 'Class B & IV', areas: 'Sabah State Projects' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About SHAR Associates</h1>
            <p className="text-xl text-orange-50">
              Building excellence in multi-discipline engineering since 2004
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-2xl shadow-lg">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To be the supplier and partner of choice to our clients both in a domestic and regional market.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-lg">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To provide exceptional products and services that meet or exceed our clients expectations and create a conducive work environment for our employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Company Background</h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <div className="text-gray-700 space-y-4">
                <p>
                  <strong>SHAR Associates Sdn Bhd</strong> was incorporated on 12th February 2004 with an 
                  authorized capital of RM 1,000,000 and a paid-up capital of RM 850,000.
                </p>
                <p>
                  SHAR is a progressive and dynamic company specializing in multi-discipline engineering ventures, 
                  including Civil and Construction Engineering, Mechanical and Electrical Engineering Services, 
                  Event Management and Professional System Support, and LiDAR and Aerial Mapping Services.
                </p>
                <p>
                  The company continuously moves forward to upgrade and access powerful sources of global information, 
                  and is renowned for its depth of experience and breadth of capability through project engagements 
                  with various private and government sectors.
                </p>
                <p>
                  The unique strength of SHAR lies in our outstanding expertise across all business activities. 
                  We pay particular attention to providing information and advice in a form which is easy to use, 
                  understand, and comprehend, avoiding problems associated with subsequent application and interpretation.
                </p>
              </div>
            </div>

            {/* Company Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Company Information</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Registration:</strong> 200401003465 (641968-A)</li>
                  <li><strong>Incorporation Date:</strong> 12 February 2004</li>
                  <li><strong>CIDB Grade:</strong> G5 (Building) and G7 (M&E)</li>
                  <li><strong>Status:</strong> Bumiputera Company</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Contact Details</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Office:</strong> Plaza Kingfisher, KK</li>
                  <li><strong>Tel:</strong> 088-430577 / 012-8278939</li>
                  <li><strong>Email:</strong> shar_sb@yahoo.com</li>
                  <li><strong>Banking:</strong> CIMB and Affin Islamic Bank</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-full bg-orange-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Senior Management</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {management.map((person, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      {person.name.charAt(0)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{person.name}</h3>
                    <p className="text-orange-600 font-semibold">{person.position}</p>
                    <p className="text-sm text-gray-600 mt-2">{person.education}</p>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {person.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-orange-600 mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Registrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications and Registrations</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
                  <div className="text-3xl mb-4">📜</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{cert.grade || cert.status}</p>
                  <p className="text-sm text-gray-600">{cert.areas}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-xl mb-8 text-orange-50 max-w-2xl mx-auto">
            Contact us to discuss how our expertise can help bring your project to life.
          </p>
          <Link href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
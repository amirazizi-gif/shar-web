export default function Background() {
  const companyHighlights = [
    {
      title: 'Established 2004',
      description: 'Incorporated on 12th February 2004 with authorized capital of RM 1,000,000',
      icon: '🏢'
    },
    {
      title: 'Bumiputera Status',
      description: 'Certified Bumiputera company with PKK Taraf Bumiputera registration',
      icon: '🎖️'
    },
    {
      title: 'CIDB G7 Grade',
      description: 'G5 for Building Works and G7 for Mechanical & Electrical Works',
      icon: '⭐'
    },
    {
      title: 'Multi-Discipline',
      description: 'Expertise across Civil, M&E, Event Management, and Engineering Support',
      icon: '🔧'
    }
  ];

  const divisions = [
    {
      name: 'Mechanical & Electrical Engineering Services',
      established: 'Core Division since 2004',
      description: 'Our main business venture with over 30 man-years of experience in installation, repairs, upgrading, operation and maintenance of Building Low Voltage Systems, Industrial Plant Control Systems, Building Automation, High Voltage Power Transmission and Distribution, Prime and Stand-By power generator sets, LED Street and Indoor Lighting, Lightning Protection Systems, Solar PV systems, Medical Grade UPS, Fire Protection systems, HVAC systems, and Water Pumping Systems.',
      capabilities: [
        '11KV/415V Power Distribution',
        'Building Automation Systems',
        'Fire Protection & Alarm Systems',
        'HVAC & Air Conditioning',
        'Medical Equipment Installation',
        'Solar PV Systems'
      ]
    },
    {
      name: 'Civil and Structural Engineering',
      established: 'Since 2004',
      description: 'Complete capacity to build, construct, and maintain various civil and construction engineering works. Services range from designing through to final finishing, delivered by skilled, efficient and experienced work crews.',
      capabilities: [
        'Building Construction',
        'Structural Repair Works',
        'IBS Steel Frame Installation',
        'Road Construction',
        'Water Main Reticulation',
        'Waterproofing & PU Insulation'
      ]
    },
    {
      name: 'Event Management & Professional System Support',
      established: 'Since 2011',
      description: 'Through affiliate company SR Events Sdn Bhd, we provide professional technical services for entertainment and events industry. One of the leading sound and lighting providers with high-end equipment pools including Sennheiser, Shure, YAMAHA, MIDAS, RCF Italy, Crest Audio USA, Clay Paky, and Avolites.',
      capabilities: [
        'Professional Staging & Trusses',
        'High-End Sound Systems',
        'LED Display Panels',
        'Professional Lighting',
        'Full HD Video Projection',
        'Event Production Management'
      ]
    },
    {
      name: 'Engineering Support Services',
      established: 'Since August 2015',
      description: 'Diversified business venture into Condition Based Monitoring Maintenance Services (CBMM), Solar PV Design and Installation, and LiDAR & Aerial Mapping services. Provides unmatched professional expertise with high technology and advance instrumentation.',
      capabilities: [
        'Thermography & Ultrasound Survey',
        'Transformer Oil Analysis',
        'LiDAR Mapping & Geospatial Solutions',
        'Solar PV Design & Installation',
        'Industrial Instrumentation Calibration',
        'Data Acquisition & Processing'
      ]
    }
  ];

  const majorEvents = [
    'Labuan Sea Festival',
    'Federal Territory Festival - Labuan 2011/12',
    'Sabah Fest 2011',
    'Sabah Mega Carnival 2011',
    'Prime Minister of Malaysia Programme',
    'Sabah International Folklore Festival 2013/14',
    'Sabah Games 2013',
    'Tawau International Cultural Festival 2013-2017',
    'Karnival TV Al-Hijrah 2014',
    'Malaysia Day - Kota Kinabalu 2017',
    'Malaysia Kaamatan Festival',
    'Majlis Tilawah Al-Quran Negeri 2016/17/18'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Company Background</h1>
            <p className="text-xl text-orange-50">
              Two decades of excellence in multi-discipline engineering ventures
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-2xl shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About SHAR Associates Sdn Bhd</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  SHAR Associates Sdn Bhd was incorporated on 12th February 2004 with an authorized capital 
                  of RM 1,000,000.00 and paid-up capital of RM 850,000.00. Our company registration number 
                  is 200401003465 (641968-A).
                </p>
                <p>
                  SHAR is a progressive and dynamic company specializing in multi-discipline engineering ventures, 
                  namely Civil and Construction Engineering, Mechanical and Electrical Engineering Services, 
                  Event Management and Professional System Support (Professional Staging, Trusses, Sound, Lighting 
                  and AV System Rental Services), and LiDAR and Aerial Mapping Services.
                </p>
                <p>
                  SHAR continuously moves forward to upgrade and access powerful sources of global information, 
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

            {/* Key Highlights Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {companyHighlights.map((highlight, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-orange-100">
                  <div className="text-4xl mb-3">{highlight.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Detail */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Business Divisions</h2>
            
            <div className="space-y-8">
              {divisions.map((division, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4">
                    <h3 className="text-2xl font-bold">{division.name}</h3>
                    <p className="text-sm text-orange-100">{division.established}</p>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">{division.description}</p>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Core Capabilities:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {division.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="text-orange-600 mr-2">▸</span>
                            <span className="text-gray-700">{capability}</span>
                          </div>
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

      {/* Major Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Major Events Organized</h2>
            <p className="text-center text-gray-600 mb-12">
              SHAR has successfully co-organized and provided technical support for numerous high-profile events
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {majorEvents.map((event, index) => (
                <div key={index} className="flex items-start bg-orange-50 p-4 rounded-lg">
                  <span className="text-orange-600 font-bold mr-3">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-gray-700">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Office Locations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Main Office</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start">
                    <span className="mr-2">📍</span>
                    <span>Lot 76, Shop No: 5-2, Block D, Plaza Kingfisher, 88400 Kota Kinabalu, Sabah</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span>088-430577</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📱</span>
                    <span>012-8278939</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📠</span>
                    <span>088-434577</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">✉️</span>
                    <span>shar_sb@yahoo.com</span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Warehouse & Yard</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">Likas Warehouse:</p>
                    <p className="flex items-start">
                      <span className="mr-2">📍</span>
                      <span>No. 33, Lorong Pari, Kg Likas, Kota Kinabalu, Sabah</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Papar Yard:</p>
                    <p className="flex items-start">
                      <span className="mr-2">📍</span>
                      <span>No. 1, Jalan Kelanahan Takis, Papar, Sabah</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Correspondence</h3>
              <p className="flex items-start text-gray-700">
                <span className="mr-2">📮</span>
                <span>P.O. Box 13111, 88835, Kota Kinabalu, Sabah</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl mb-8 text-orange-50 max-w-2xl mx-auto">
            Experience two decades of engineering excellence. Contact us to discuss your next project.
          </p>
          <a href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition shadow-lg">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
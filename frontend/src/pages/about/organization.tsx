import Image from "next/image";

export default function OrganizationChart() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Organization Chart
            </h1>
            <p className="text-xl text-orange-50">
              Our leadership structure and team organization
            </p>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Level 1: Managing Director */}
            <div className="flex justify-center mb-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-600 to-orange-500 text-white px-8 py-6 rounded-lg shadow-lg inline-block min-w-[200px]">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-3 overflow-hidden border-4 border-orange-200">
                    <Image
                      src="https://via.placeholder.com/150/ea580c/ffffff?text=MD"
                      alt="Managing Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-sm">Hj. Sharom Bin Abd</div>
                  <div className="font-bold text-sm">Ghaffar</div>
                  <div className="text-xs mt-2 text-orange-100">
                    Managing Director
                  </div>
                </div>
                <div className="w-0.5 h-16 bg-orange-300 mx-auto"></div>
              </div>
            </div>

            {/* Level 2: Executive Director */}
            <div className="flex justify-center mb-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white px-8 py-6 rounded-lg shadow-lg inline-block min-w-[200px]">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-3 overflow-hidden border-4 border-orange-200">
                    <Image
                      src="https://via.placeholder.com/150/f97316/ffffff?text=ED"
                      alt="Executive Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-sm">Rajas@Razeis Bin</div>
                  <div className="font-bold text-sm">Ismail</div>
                  <div className="text-xs mt-2 text-orange-100">
                    Executive Director
                  </div>
                </div>
                <div className="w-0.5 h-16 bg-orange-300 mx-auto"></div>
              </div>
            </div>

            {/* Level 3: Department Heads - Horizontal Line */}
            <div className="relative mb-16">
              <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-orange-300"></div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 pt-8">
                {/* Event Management */}
                <div className="text-center">
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mb-4"></div>
                  <div className="bg-orange-400 text-white px-4 py-3 rounded-lg shadow-md">
                    <div className="font-semibold text-xs">Event</div>
                    <div className="font-semibold text-xs">Management</div>
                  </div>
                </div>

                {/* Admin & Finance */}
                <div className="text-center">
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mb-4"></div>
                  <div className="bg-orange-400 text-white px-4 py-3 rounded-lg shadow-md">
                    <div className="font-semibold text-xs">Admin &</div>
                    <div className="font-semibold text-xs">Finance</div>
                  </div>
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mt-4"></div>
                </div>

                {/* M&E Engineering */}
                <div className="text-center">
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mb-4"></div>
                  <div className="bg-orange-400 text-white px-4 py-3 rounded-lg shadow-md">
                    <div className="font-semibold text-xs">M&E</div>
                    <div className="font-semibold text-xs">Engineering</div>
                  </div>
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mt-4"></div>
                </div>

                {/* Building Construction */}
                <div className="text-center">
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mb-4"></div>
                  <div className="bg-orange-400 text-white px-4 py-3 rounded-lg shadow-md">
                    <div className="font-semibold text-xs">Building</div>
                    <div className="font-semibold text-xs">Construction</div>
                  </div>
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mt-4"></div>
                </div>

                {/* Engineering Support */}
                <div className="text-center">
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mb-4"></div>
                  <div className="bg-orange-400 text-white px-4 py-3 rounded-lg shadow-md">
                    <div className="font-semibold text-xs">Engineering</div>
                    <div className="font-semibold text-xs">Support</div>
                  </div>
                  <div className="w-0.5 h-8 bg-orange-300 mx-auto mt-4"></div>
                </div>
              </div>
            </div>

            {/* Level 4: Managers/Senior Executives */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
              {/* Empty for Event Management */}
              <div></div>

              {/* Admin & Finance - Senior Executive */}
              <div className="text-center">
                <div className="bg-orange-500 text-white px-4 py-3 rounded-lg shadow-md inline-block">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 overflow-hidden border-3 border-orange-200">
                    <Image
                      src="/images/rosnah.jpg"
                      alt="Rosnah Binti Rakiah"
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="font-semibold text-xs">Rosnah Binti</div>
                  <div className="font-semibold text-xs">Rakiah</div>
                  <div className="text-xs mt-1 text-orange-100">
                    Senior Executive
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-orange-200 mx-auto mt-4"></div>
              </div>

              {/* M&E - Vacant Project Manager */}
              <div className="text-center">
                <div className="bg-orange-500 text-white px-4 py-3 rounded-lg shadow-md inline-block">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center border-3 border-orange-200">
                    <span className="text-xs text-gray-600">Photo</span>
                  </div>
                  <div className="font-semibold text-xs">Vacant</div>
                  <div className="text-xs mt-1 text-orange-100">
                    Project Manager
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-orange-200 mx-auto mt-4"></div>
              </div>

              {/* Building - Vacant Project Manager */}
              <div className="text-center">
                <div className="bg-orange-500 text-white px-4 py-3 rounded-lg shadow-md inline-block">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center border-3 border-orange-200">
                    <span className="text-xs text-gray-600">Photo</span>
                  </div>
                  <div className="font-semibold text-xs">Vacant</div>
                  <div className="text-xs mt-1 text-orange-100">
                    Project Manager
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-orange-200 mx-auto mt-4"></div>
              </div>

              {/* Engineering Support - Vacant Project Manager */}
              <div className="text-center">
                <div className="bg-orange-500 text-white px-4 py-3 rounded-lg shadow-md inline-block">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center border-3 border-orange-200">
                    <span className="text-xs text-gray-600">Photo</span>
                  </div>
                  <div className="font-semibold text-xs">Vacant</div>
                  <div className="text-xs mt-1 text-orange-100">
                    Project Manager
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-orange-200 mx-auto mt-4"></div>
              </div>
            </div>

            {/* Level 5: Staff Level */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Empty for Event Management */}
              <div></div>

              {/* Admin & Finance Staff */}
              <div className="space-y-3">
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Vacant</div>
                  {/* <div className="text-xs font-semibold">Ismail</div> */}
                  <div className="text-xs text-gray-700">Account Asst.</div>
                </div>
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Vacant</div>
                  {/* <div className="text-xs font-semibold">Ismail</div> */}
                  <div className="text-xs text-gray-700">Admin Asst.</div>
                </div>
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Vacant</div>
                  <div className="text-xs text-gray-700">Driver</div>
                </div>
              </div>

              {/* M&E Engineering Staff */}
              <div className="space-y-3">
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Rusli Bin Denis</div>
                  <div className="text-xs text-gray-700">Site Supervisor</div>
                </div>
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Electrician</div>
                </div>
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Technician</div>
                </div>
              </div>

              {/* Building Construction Staff */}
              <div className="space-y-3">
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Rusdi Bin Salleh</div>
                  <div className="text-xs text-gray-700">Site Supervisor</div>
                </div>
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Machine Operator</div>
                </div>
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Workshop</div>
                </div>
              </div>

              {/* Engineering Support Staff */}
              <div className="space-y-3">
                <div className="bg-orange-300 text-gray-900 px-3 py-2 rounded-lg shadow-sm text-center">
                  <div className="text-xs font-semibold">Vacant</div>
                  <div className="text-xs text-gray-700">Site Supervisor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Organizational Hierarchy
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg"></div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Executive Level
                  </div>
                  <div className="text-xs text-gray-600">Directors</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-400 rounded-lg"></div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Department
                  </div>
                  <div className="text-xs text-gray-600">Divisions</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500 rounded-lg"></div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Management
                  </div>
                  <div className="text-xs text-gray-600">Managers</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-300 rounded-lg"></div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Staff Level
                  </div>
                  <div className="text-xs text-gray-600">Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

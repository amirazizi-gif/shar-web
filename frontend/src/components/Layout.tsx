import { useState, ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">
                SHAR ASSOCIATES SDN BHD
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-orange-200 transition font-medium"
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button className="text-white hover:text-orange-200 transition font-medium flex items-center">
                  About Us
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-56 bg-white rounded-lg shadow-xl py-2">
                      <Link
                        href="/about/mission"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                      >
                        Mission & Vision
                      </Link>
                      <Link
                        href="/about/organization"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                      >
                        Organization Chart
                      </Link>
                      <Link
                        href="/about/background"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                      >
                        Background
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/services"
                className="text-white hover:text-orange-200 transition font-medium"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-orange-200 transition font-medium"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-orange-200 transition font-medium"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <Link
                href="/"
                className="block text-white hover:text-orange-200 py-2"
              >
                Home
              </Link>
              <Link
                href="/about/mission"
                className="block text-white hover:text-orange-200 py-2 pl-4"
              >
                Mission & Vision
              </Link>
              <Link
                href="/about/organization"
                className="block text-white hover:text-orange-200 py-2 pl-4"
              >
                Organization Chart
              </Link>
              <Link
                href="/about/background"
                className="block text-white hover:text-orange-200 py-2 pl-4"
              >
                Background
              </Link>
              <Link
                href="/services"
                className="block text-white hover:text-orange-200 py-2"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="block text-white hover:text-orange-200 py-2"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-orange-200 py-2"
              >
                Contact Us
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                SHAR ASSOCIATES SDN BHD
              </h3>
              <p className="text-gray-400 mb-4">
                A progressive and dynamic company specializing in
                multi-discipline engineering ventures.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/mission"
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                Contact Us
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>
                    Lot 76, Shop No: 5-2 Block D, Plaza Kingfisher, 88400 Kota
                    Kinabalu, Sabah
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>088-430577 / 012-8278939</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <span>shar_sb@yahoo.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} SHAR Associates Sdn Bhd. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

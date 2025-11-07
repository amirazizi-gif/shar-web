import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-orange-600 text-white px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-300 rounded"></div>
        <span className="font-bold text-lg">SHAR ASSOCIATES SDN BHD</span>
      </div>
      <ul className="flex space-x-6 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

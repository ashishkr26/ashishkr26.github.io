export default function Navbar() {
  return (
    <nav className="bg-[#0b0b0f]/90 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-xl font-semibold tracking-wide text-white hover:text-indigo-400 transition"
        >
          Ashish Kumar
        </a>

        {/* Navigation */}
        <ul className="flex space-x-8 text-sm font-medium text-gray-300">
          <li>
            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

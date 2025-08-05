export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-600 hover:scale-105 transition-all ease-in-out">
           <a href="#hero" className="cursor-pointer   ">Ashish Kumar</a>
          </h1>
          <ul className="flex space-x-6 text-gray-700">
          <li className="hover:scale-105 transition-all ease-in-out"><a href="#about" className="hover:text-blue-600">About</a></li>
          <li className="hover:scale-105 transition-all ease-in-out"><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li className="hover:scale-105 transition-all ease-in-out"><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

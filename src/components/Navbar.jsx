export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Karthikeyan</h1>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <div className="nav w-full">
      <a className="max-sm:hidden">About</a>
      <a className="max-sm:hidden">Projects</a>
      <a className="max-sm:hidden">Services</a>
      <a className="max-sm:hidden">Resume</a>
      <a href="#contact" className="border border-gray-300 rounded-md px-4 py-2 sm:ml-6 hover:bg-gray-300 hover:text-slate-700 clickable">Contact me</a>
    </div>
  );
}

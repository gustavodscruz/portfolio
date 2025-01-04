export default function Navbar() {
  return (
    <div className="nav">
      <a>Home</a>
      <a>About</a>
      <a>Projects</a>
      <a>Services</a>
      <a>Resume</a>
      <button className="border border-gray-300 rounded-md px-4 py-2 ml-6 hover:bg-gray-300 hover:text-slate-700 clickable">Contact me</button>
    </div>
  );
}

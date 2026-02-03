import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 flex gap-6">
      <Link to="/">Dashboard</Link>
      <Link to="/requests">Requests</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

import { NavLink } from "react-router-dom";

const navClass =
  "block px-4 py-2 rounded-lg transition hover:bg-slate-800";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-200 h-screen p-6 fixed">
      <h1 className="text-xl font-bold mb-8">CRM Lite</h1>

      <nav className="space-y-2">
        <NavLink to="/" className={navClass}>
          📊 Dashboard
        </NavLink>
        <NavLink to="/requests" className={navClass}>
          📥 Requests
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          🚀 Projects
        </NavLink>
      </nav>
    </aside>
  );
}

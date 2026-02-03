import { useCRM } from "../context/CRMContext";

export default function Projects() {
  const { projects } = useCRM();

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl">Projects</h1>

      {projects.map(p => {
        const done = p.tasks.filter(t => t.status === "done").length;
        const progress = p.tasks.length
          ? Math.round((done / p.tasks.length) * 100)
          : 0;

        return (
          <div className="bg-white rounded-2xl shadow-sm p-6">
  <h2 className="font-semibold text-lg">{p.name}</h2>

  <div className="mt-3">
    <div className="w-full bg-slate-200 h-2 rounded-full">
      <div
        className="bg-slate-900 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
    <p className="text-sm text-slate-500 mt-1">{progress}% completed</p>
  </div>
</div>
        );
      })}
    </div>
  );
}

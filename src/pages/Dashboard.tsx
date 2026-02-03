import { useCRM } from "../context/CRMContext";

export default function Dashboard() {
  const { requests, projects } = useCRM();
  const completedTasks = projects.flatMap(p => p.tasks)
    .filter(t => t.status === "done").length;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Total Requests: {requests.length}</p>
      <p>Active Projects: {projects.length}</p>
      <p>Completed Tasks: {completedTasks}</p>
    </div>
  );
}

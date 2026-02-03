import { useParams } from "react-router-dom";
import { useCRM } from "../context/CRMContext";
import TaskItem from "../components/TaskItem";

export default function ProjectDetail() {
  const { id } = useParams();
  const { projects, addTask, updateTaskStatus } = useCRM();
  const project = projects.find(p => p.id === id);

  if (!project) return null;

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl">{project.name}</h1>

      <button
        onClick={() =>
          addTask(project.id, {
            id: crypto.randomUUID(),
            title: "New Task",
            description: "Task description",
            status: "todo",
            priority: "medium",
          })
        }
        className="bg-blue-600 text-white px-3 py-1 rounded my-3"
      >
        Add Task
      </button>

      <div className="grid gap-2">
        {project.tasks.map(t => (
          <TaskItem
            key={t.id}
            task={t}
            onChange={status =>
              updateTaskStatus(project.id, t.id, status)
            }
          />
        ))}
      </div>
    </div>
  );
}

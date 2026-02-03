
export default function TaskItem({ task, onChange }: any) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h4 className="font-semibold">{task.title}</h4>
      <p className="text-sm text-slate-500 mt-1">
        {task.description}
      </p>

      <select
        value={task.status}
        onChange={e => onChange(e.target.value)}
        className="mt-3 border rounded-lg p-2 w-full"
      >
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}


import type { ClientRequest } from "../types";
import { useCRM } from "../context/CRMContext";

export default function RequestCard({ r }: { r: ClientRequest }) {
  const { approveRequest } = useCRM();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{r.clientName}</h3>
          <p className="text-sm text-slate-500">{r.industry}</p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs ${
            r.status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {r.status}
        </span>
      </div>

      <p className="mt-4 text-slate-700">{r.requirements}</p>
      <p className="mt-2 text-sm text-slate-500">¥ {r.budget}</p>

      {r.status === "pending" && (
        <button
          onClick={() => approveRequest(r.id)}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
        >
          Approve
        </button>
      )}
    </div>
  );
}


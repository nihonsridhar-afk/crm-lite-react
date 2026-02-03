import { useState } from "react";
import { useCRM } from "../context/CRMContext";
import RequestCard from "../components/RequestCard";

export default function Requests() {
  const { requests, addRequest } = useCRM();
  const [clientName, setClientName] = useState("");
  const [req, setReq] = useState("");
  const [budget, setBudget] = useState(0);

  const submit = () => {
    addRequest({
      id: crypto.randomUUID(),
      clientName,
      industry: "IT",
      requirements: req,
      budget,
      status: "pending",
      createdAt: new Date().toISOString(),
    });
    setClientName("");
    setReq("");
    setBudget(0);
  };

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl">Requests</h1>

      <input
        placeholder="Client"
        className="border p-2 w-full"
        value={clientName}
        onChange={e => setClientName(e.target.value)}
      />
      <textarea
        placeholder="Requirements"
        className="border p-2 w-full mt-2"
        value={req}
        onChange={e => setReq(e.target.value)}
      />
      <input
        type="number"
        placeholder="Budget"
        className="border p-2 w-full mt-2"
        value={budget}
        onChange={e => setBudget(+e.target.value)}
      />
      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
      >
        Add Request
      </button>

      <div className="grid gap-4 mt-4">
        {requests.map(r => (
          <RequestCard key={r.id} r={r} />
        ))}
      </div>
    </div>
  );
}

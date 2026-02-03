import { createContext, useContext, useEffect, useState } from "react";
import type { ClientRequest, Project, Task } from "../types";
import { load, save } from "../utils/storage";

interface CRMContextType {
  requests: ClientRequest[];
  projects: Project[];
  addRequest: (r: ClientRequest) => void;
  approveRequest: (id: string) => void;
  addTask: (projectId: string, task: Task) => void;
  updateTaskStatus: (
    projectId: string,
    taskId: string,
    status: Task["status"]
  ) => void;
}

const CRMContext = createContext<CRMContextType | undefined>(undefined);

export const CRMProvider = ({ children }: { children: React.ReactNode }) => {
  const [requests, setRequests] = useState<ClientRequest[]>(
    load("requests", [])
  );
  const [projects, setProjects] = useState<Project[]>(
    load("projects", [])
  );

  useEffect(() => {
    save("requests", requests);
    save("projects", projects);
  }, [requests, projects]);

  const addRequest = (r: ClientRequest) => {
    setRequests(prev => [...prev, r]);
  };

  const approveRequest = (id: string) => {
    const req = requests.find(r => r.id === id);
    if (!req) return;

    setRequests(prev =>
      prev.map(r =>
        r.id === id ? { ...r, status: "approved" } : r
      )
    );

    setProjects(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: `${req.clientName} Project`,
        clientName: req.clientName,
        techStack: ["React", "TypeScript", "AWS"],
        deadline: new Date(
          Date.now() + 30 * 86400000
        ).toISOString(),
        tasks: [],
      },
    ]);
  };

  const addTask = (projectId: string, task: Task) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? { ...p, tasks: [...p.tasks, task] }
          : p
      )
    );
  };

  const updateTaskStatus = (
    projectId: string,
    taskId: string,
    status: Task["status"]
  ) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map(t =>
                t.id === taskId ? { ...t, status } : t
              ),
            }
          : p
      )
    );
  };

  return (
    <CRMContext.Provider
      value={{
        requests,
        projects,
        addRequest,
        approveRequest,
        addTask,
        updateTaskStatus,
      }}
    >
      {children}
    </CRMContext.Provider>
  );
};

export const useCRM = () => {
  const ctx = useContext(CRMContext);
  if (!ctx) throw new Error("CRMContext error");
  return ctx;
};

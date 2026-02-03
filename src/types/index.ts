// types/index.ts

export type RequestStatus = "pending" | "approved" | "rejected";

export interface ClientRequest {
  id: string;
  clientName: string;
  industry: string;
  requirements: string;
  budget: number;
  status: RequestStatus;
  createdAt: string;
}

export type TaskStatus = "todo" | "in-progress" | "done";
export type Priority = "high" | "medium" | "low";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
}

export interface Project {
  id: string;
  name: string;
  clientName: string;
  techStack: string[];
  deadline: string;
  tasks: Task[];
}

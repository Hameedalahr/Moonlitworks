import { type InsertMessage, type Message, type Project } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getProjects(): Promise<Project[]>;
  createProject(project: Omit<Project, "id">): Promise<Project>;
}

// Lightweight in-memory storage for development without a database.
export class InMemoryStorage implements IStorage {
  private messages: Message[] = [];
  private projects: Project[] = [];
  private messageId = 1;
  private projectId = 1;

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const newMessage: Message = {
      id: this.messageId++,
      name: insertMessage.name,
      email: insertMessage.email,
      projectType: insertMessage.projectType,
      message: insertMessage.message,
      createdAt: new Date(),
    } as unknown as Message;

    this.messages.push(newMessage);
    return newMessage;
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async createProject(project: Omit<Project, "id">): Promise<Project> {
    const newProject: Project = {
      id: this.projectId++,
      title: project.title,
      category: project.category,
      videoUrl: project.videoUrl,
      thumbnail: project.thumbnail,
      description: project.description,
    } as unknown as Project;

    this.projects.push(newProject);
    return newProject;
  }
}

export const storage = new InMemoryStorage();

import { TaskEntity } from "../entities/task.entiy";

export interface TaskRepository {
    getAll: () => Promise<TaskEntity[]>
    getById: (id: string) => Promise<TaskEntity | null>
    create: (task: TaskEntity) => Promise<TaskEntity>
    update: (task: TaskEntity) => Promise<TaskEntity>
    deleteById: (id: string) => Promise<void>
}
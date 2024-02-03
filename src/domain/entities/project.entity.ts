import { TaskEntity } from "./task.entiy";

export interface ProjectEntity {
    id: string,
    name: string,
    description: string,
    tasks: TaskEntity[]
}
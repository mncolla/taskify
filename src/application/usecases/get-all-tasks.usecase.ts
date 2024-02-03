import { TaskEntity } from "../../domain/entities/task.entiy";
import { TaskRepository } from "../../domain/repositories/task.repository";

export class GetAllTasksUsecase {
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(): Promise<TaskEntity[]>{
        const allTasks = await this.taskRepository.getAll()
        return allTasks
    }
}
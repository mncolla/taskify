import { TaskEntity } from "../../domain/entities/task.entiy";
import { TaskRepository } from "../../domain/repositories/task.repository";

export class GetTaskByIdUsecase {
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(id: string): Promise<TaskEntity|null>{
        const task = await this.taskRepository.getById(id)
        return task
    }
}
import { TaskEntity } from "../../domain/entities/task.entiy";
import { TaskRepository } from "../../domain/repositories/task.repository";

export class DeleteTaskUsecase {
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(id: string): Promise<void>{
        const deletedTask = await this.taskRepository.deleteById(id)
        return 
    }
}
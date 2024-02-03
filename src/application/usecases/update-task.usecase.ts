import { TaskEntity } from "../../domain/entities/task.entiy";
import { TaskRepository } from "../../domain/repositories/task.repository";
import { UpdateTaskDTO } from "../dtos/update-task.dto";

export class UpdateTaskUsecase {
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(id:string, updatedTask: UpdateTaskDTO): Promise<TaskEntity|null>{
        const taskFound = await this.taskRepository.getById(id)
        if (!taskFound) throw new Error('Task not found!')

        const task = await this.taskRepository.update({
            ...taskFound,
            ...updatedTask,
            id,
        })

        return task
    }
}
import { TaskEntity } from "../../domain/entities/task.entiy";
import { TaskRepository } from "../../domain/repositories/task.repository";
import { UIDGenerator } from "../../domain/utils/uid-generator";
import { CreateTaskDTO } from "../dtos/create-task-dto";

export class CreateTaskUsecase {
    constructor(
        private readonly taskRepository: TaskRepository,
        private readonly uidGenerator: UIDGenerator
    ){}

    async execute(createTaskDTO: CreateTaskDTO): Promise<TaskEntity>{
        const newTask = await this.taskRepository.create({
            id: this.uidGenerator.generate(),
            description: createTaskDTO.description,
            startDate: new Date(),
            title: createTaskDTO.title,
            status: "BACKLOG",
            endDate: createTaskDTO.endDate
        })

        return newTask
    }
}
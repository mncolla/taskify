import { ProjectEntity } from "../../domain/entities/project.entity";
import { ProjectRepository } from "../../domain/repositories/project.repository";
import { UIDGenerator } from "../../domain/utils/uid-generator";
import { CreateProjectDTO } from "../dtos/create-project.dto";

export class CreateProjectUsecase {
    constructor(
        private readonly projectRepository: ProjectRepository,
        private readonly uidGenerator: UIDGenerator
    ){}

    async execute(createProjectDTO: CreateProjectDTO): Promise<ProjectEntity>{
        const newProject = this.projectRepository.create({
            id: this.uidGenerator.generate(),
            description: createProjectDTO.description,
            name: createProjectDTO.name,
            tasks: [],
        })

        return newProject
    }
}
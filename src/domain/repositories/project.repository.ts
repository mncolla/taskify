import { ProjectEntity } from "../entities/project.entity"

export interface ProjectRepository {
    getAll: () => Promise<ProjectEntity[]>
    getById: (id: string) => Promise<ProjectEntity | null>
    create: (project: ProjectEntity) => Promise<ProjectEntity>
    update: (project: ProjectEntity) => Promise<ProjectEntity>
    deleteById: (id: string) => Promise<void>
}
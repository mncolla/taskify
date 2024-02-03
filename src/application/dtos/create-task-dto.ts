export interface CreateTaskDTO {
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    projectId: string,
}
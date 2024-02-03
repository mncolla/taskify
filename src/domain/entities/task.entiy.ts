export type TaskStatusType = "BACKLOG" | "ON GOING" | "FINISHED"

export interface TaskEntity {
    id: string,
    title: string,
    description: string,
    status: TaskStatusType,
    startDate: Date,
    endDate: Date,
}
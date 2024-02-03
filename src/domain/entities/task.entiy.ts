type TaskStatus = "BACKLOG" | "ON GOING" | "FINISHED"

export interface TaskEntity {
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
    startDate: Date,
    endDate: Date,
}
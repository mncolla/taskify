import { eq } from "drizzle-orm"
import { TaskEntity, type TaskStatusType } from "../../domain/entities/task.entiy"
import { TaskRepository } from "../../domain/repositories/task.repository"
import { db } from "../db/client"
import { tasks } from '../db/schema'

export class TaskSqliteDAO implements TaskRepository {

    constructor() { }

    async getAll(): Promise<TaskEntity[]> {
        const tasksResponse = await db.select().from(tasks)
        const taskData: TaskEntity[] = tasksResponse.map(({id, title, description, status, startDate, endDate}) => {
            return {
                id,
                title,
                description,
                status: status as TaskStatusType,
                startDate: new Date(startDate),
                endDate: new Date(endDate)
            }
        })

        return taskData
    }

    async create(task: TaskEntity): Promise<TaskEntity> {

        const { id, description, startDate, endDate, status, title } = task

        await db.insert(tasks).values({
            id,
            description,
            startDate: new Date(startDate).toString(),
            endDate: new Date(endDate).toString(),
            status,
            title
        })

        return task
    }

    async getById(id: string): Promise<TaskEntity|null> {
        const foundTask = await db.select().from(tasks).where(eq(tasks.id,id))
        
        console.log("found", foundTask)
        
        if (!foundTask) return null
        return null
    }

    async update(task: TaskEntity): Promise<TaskEntity> {

        return task
    }

    async deleteById(id: string): Promise<void> {

        return 
    }


    // deleteById: (id: string) => Promise<void>;

}
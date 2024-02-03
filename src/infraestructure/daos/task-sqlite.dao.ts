import { TaskEntity } from "../../domain/entities/task.entiy"
import { TaskRepository } from "../../domain/repositories/task.repository"
import db from "../db/client"

export class TaskSqliteDAO implements TaskRepository{

    constructor(){
        const seed = db.prepare("CREATE TABLE IF NOT EXISTS Tasks(id text, title text, description text)")
        seed.run()
    }

    async getAll(): Promise<TaskEntity[]> {
        // const tasks = await db.select().from(tasksDB)
        console.log("get all")
        return []
    }

    async create(task: TaskEntity): Promise<TaskEntity> {
        const getTasks = db.prepare("SELECT * FROM tasks")
        const response = getTasks.run()
        console.log("tasks", response)
        // const newTask = await db.insert(tasksDB).values({
        //     title: task.title,
        //     description: task.description,
        // })

        // console.log("nueva tarea", newTask) 

        return task
    }


    // getAll: () => Promise<TaskEntity[]>;
    // getById: (id: string) => Promise<TaskEntity | null>;
    // create: (task: TaskEntity) => Promise<TaskEntity>;
    // update: (task: TaskEntity) => Promise<TaskEntity>;
    // deleteById: (id: string) => Promise<void>;
    
}
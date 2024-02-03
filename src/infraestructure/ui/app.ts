// import { prompt } from 'enquirer'

import { CreateTaskUsecase } from "../../application/usecases/create-task.usecase"
import { TaskSqliteDAO } from "../daos/task-sqlite.dao"
import { UIDGeneratorImplementation } from "../utils/uuidv4"

(async () => {
    // const response = await prompt({
    //     type: 'input',
    //     name: 'username',
    //     message: 'What is your username?'
    // });

    const taskCreator = new CreateTaskUsecase(new TaskSqliteDAO(), new UIDGeneratorImplementation())

    const newTask = await taskCreator.execute({
        title: 'tarea 1',
        description: 'hacer la tarea',
        endDate: new Date(),
        startDate: new Date(),
        projectId: "",
    })

    console.log('SUCCESS!!!',newTask)
    
})()
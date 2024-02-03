import { CreateTaskUsecase, GetAllTasksUsecase, GetTaskByIdUsecase } from "../../application/usecases"
import { TaskSqliteDAO } from "../daos/task-sqlite.dao"
import { UIDGeneratorImplementation } from "../utils/uuidv4"

(async () => {
    
    const taskCreator = new CreateTaskUsecase(new TaskSqliteDAO(), new UIDGeneratorImplementation())

    const newTask = await taskCreator.execute({
        title: 'tarea 3',
        description: 'hacer la tarea sin dormirse',
        endDate: new Date(),
        startDate: new Date(),
        projectId: "",
    })
    
    /* const taskCreator = new CreateTaskUsecase(new TaskSqliteDAO(), new UIDGeneratorImplementation())

    const newTask = await taskCreator.execute({
        title: 'tarea 3',
        description: 'hacer la tarea sin dormirse',
        endDate: new Date(),
        startDate: new Date(),
        projectId: "",
    })

    console.log('SUCCESS!!!',newTask)


    const tasksGetter = new GetAllTasksUsecase(new TaskSqliteDAO())
    
    const allTasks = await tasksGetter.execute()

    console.log('todas las tasks', allTasks) 

    const taskGetterById = new GetTaskByIdUsecase(new TaskSqliteDAO())

    const taskFound = await taskGetterById.execute('db5493a3-0d6a-497f-9ba8-3a9a6604e1ea')

    console.log("encontre", taskFound)¨*/

    const tasksGetter = new GetAllTasksUsecase(new TaskSqliteDAO())
    
    const allTasks = await tasksGetter.execute()

    console.log("all tasks", allTasks)

})()
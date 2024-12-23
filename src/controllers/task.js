import Tasks from "../models/tasks.js";
import { taskSchema } from "../utils/zodSchema.js";

export const getAllTasks = async (req, res) => {
    const { page = 1, limit = 10} = req.query;

    const { _id } = req;

    try {

        let query = Tasks.find({ isDeleted: false });

        const offset = ( page - 1 ) * limit;
        const totalTasks = await Tasks.countDocuments({ userId: _id, isDeleted: false });

        query.skip(offset).limit(limit);

        const paginatedTasks = await query.select("_id userId task createdAt updatedAt");
        
        const totalPages = Math.ceil( totalTasks / limit );
        
        res.status(200).json({
            tasks: paginatedTasks,
            metadata: {
                totalCount: totalTasks,
                currentPage: page,
                totalPages,
                limit
            }
        });

    } catch (error) {
        console.error(`error in get all tasks controller ${error}`);
        res.status(500).send({ message: 'Something went wrong try again or Internal Server Error' });
    }

}

export const getById = async (req, res) => {
    
    const { id } = req.params;
    const userId = req._id

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ 
            message: 'Invalid task ID' 
        });
    }

    try {

        const task = await Tasks.findOne({
            _id: id,
            userId: userId,
            isDeleted: false
        })

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({
            task
        });

    } catch (error) {
        console.error(`error in get a task by taskId controller ${error}`);
        res.status(500).send({ message: 'Something went wrong try again or Internal Server Error' });
    }
}

export const createNewTask = async (req, res) => {
        
    const { task } = req.body;
    const { _id } = req;

    try {
        
        const { success, error } = taskSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({
                message: "Invalid input",
                errors: error.issues
            });
        }

        const newTask = {
            userId: _id,
            task: task
        };

        const createdTask = await Tasks.create(newTask);

        res.status(201).json({
            success: true,
            assignmentId: createdTask._id,
            message: "Task created successfully"
        });
        
    } catch (error) {
        console.error(`error in user create task controller ${error}`);
        res.status(500).send({ message: 'Something went wrong try again or Internal Server Error' });
    }
}

export const updateTaskById = async (req, res) => {

    const { id } = req.params;
    const task = req.body;
    const userId = req._id;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ 
            message: 'Invalid task ID' 
        });
    }

    try {

        const { success, error } = taskSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({
                message: "Invalid input",
                errors: error.issues
            });
        }

        const existingTask = await Tasks.findOne({
            _id: id,
            isDeleted: false,
        });

        if (!existingTask) {
            return res.status(404).json({ message: 'task not found' });
        }

        // console.log(existingTask.userId, " ", _id);
        if(existingTask.userId.toString() !== userId){
            return res.status(403).json({
                success: false,
                message: "Unauthorised to perform this task"
            });
        }

        const updatedTask = await Tasks.findByIdAndUpdate(id, task, { new: true });


        if (!success.modifiedCount) {
            return res.status(400).json({
                message: "Error: Task could not be updated. Try again later."
            });
        }

        res.status(200).json({ 
            success: true, 
            message: 'Task updated successfully',
            data: updatedTask 
        });

    } catch (error) {
        console.error(`error in update task controller ${error}`);
        res.status(500).send({ message: 'Something went wrong try again or Internal Server Error' });
    }
}

export const deleteTaskById = async (req, res) => {
    
    const { id } = req.params;
    const userId = req._id;

    try {

        const task = await Tasks.findOne({
            _id: id,
            isDeleted: false,
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // console.log(task.userId, " ", _id);
        if(task.userId.toString() !== userId){
            return res.status(403).json({
                success: false,
                message: "Unauthorised to perform this task"
            });
        }

        const success = await Tasks.updateOne({
            _id: id,
            isDeleted: false
        }, {
            isDeleted: true
        });

        if (!success.modifiedCount) {
            return res.status(400).json({
                message: "Error Task Can't be deleted try again later"
            });
        }

        res.status(200).json({ 
            success: true, 
            message: 'Task deleted successfully' 
        });

    } catch (error) {
        console.error(`error in delete task controller ${error}`);
        res.status(500).send({ message: 'Something went wrong try again or Internal Server Error' });
    }
}
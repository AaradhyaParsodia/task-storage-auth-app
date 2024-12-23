import Tasks from "../models/tasks.js";

export const getAllTasks = async (req, res) => {
    const { page = 1, limit = 10} = req.query;

    try {

        let query = Tasks.find({ isDeleted: false });

        const offset = ( page - 1 ) * limit;
        const totalTasks = await Tasks.countDocuments({ isDeleted: false });

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

}

export const createNewTask = async (req, res) => {

}

export const updateTaskById = async (req, res) => {

}

export const deleteTaskById = async (req, res) => {

}
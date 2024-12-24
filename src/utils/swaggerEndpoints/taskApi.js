/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks for a user present in the database
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *       
 *     responses:
 *       200:
 *         description: Successfully Got All the tasks data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetAllTasksResponse'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Something went wrong. Try again or Internal Server Error'
 */

// ============================================================================================


// ============================================================================================
/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a task by its id for a user present in the database
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *       
 *     responses:
 *       200:
 *         description: Successfully Got the task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetTaskByIdResponse'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Invalid input
 *                   description: Invalid task ID
 *                   example: 'Invalid task ID'
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Not Found
 *                   description: Error message
 *                   example: 'Task not found'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Something went wrong. Try again or Internal Server Error'
 */

// ============================================================================================


// ============================================================================================
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: create a new task 
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTasksRequest'
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateTasksResponse'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Invalid input
 *                   description: Please provide valid task's input
 *                   example: 'Invalid input'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: 'Something went wrong try again or Internal Server Error'
*/

// ============================================================================================


// ============================================================================================
/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a task by its id 
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTasksRequest'
 *     responses:
 *       201:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateTasksResponse'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Invalid input
 *                   description: Invalid task ID
 *                   example: 'Invalid task ID'
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: 'Unauthorised to perform this task'
 *       409:
 *         description: Unable to perform the operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: 'Error: The task could not be updated. Please try again later.'
 *                   description: 'An error message indicating that the task update operation failed.'
 *                   example: 'Error: The task could not be updated. Please try again later.'
 *       422:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Invalid input
 *                   description: Please provide valid task's input
 *                   example: 'Invalid task request body input'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: 'Something went wrong try again or Internal Server Error'
 */ 

// ============================================================================================


// ============================================================================================
/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task by its id 
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *  
 *     responses:
 *       201:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeleteTasksResponse'
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   default: false
 *                   description: Success status
 *                   example: 'false'
 *                 message:
 *                   type: string
 *                   default: Error
 *                   description: Error message
 *                   example: 'Unauthorised to perform this task'
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Not Found
 *                   description: Error message
 *                   example: 'Task not found'
 *       409:
 *         description: Unable to perform the operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: 'Error: The task could not be updated. Please try again later.'
 *                   description: 'An error message indicating that the task update operation failed.'
 *                   example: 'Error: The task could not be updated. Please try again later.'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: 'Something went wrong try again or Internal Server Error'
 */ 

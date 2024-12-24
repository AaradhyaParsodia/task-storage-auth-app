import swaggerJSDoc from "swagger-jsdoc";

const port = process.env.PORT || 3000

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User Tasks Managing Appilcations's with Auth API",
            version: "1.0.0",
            description: "API for managing resources (tasks) of user",
            contact: {
                name: "API Support",
                email: "aaradhyaparsodia.d@gmail.com",
            },
        },
        servers: [
            {
                url: `https://task-storage-auth-app.onrender.com/api/v1`,
            },
        ],
        tags: [
            {
                name: "Auth",
                description: "User Authentication, Authorisation and Management"
            },
            {
                name: "Tasks",
                description: "Performing Managing operation on the tasks and its details"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
            schemas: {
                UserRegisterBody: {
                    type: 'object',
                properties: {
                        name: { type: 'string', example: 'jane' },
                        username: { type: 'string', example: 'jane_pane_' },
                        email: { type: 'string', format: 'email', example: 'jane@pane.com' },
                        password: { type: 'string', example: 'asdfg1234' }
                    },
                    required: ['email', 'password', 'username']
                },
                SuccessRegisterUser: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean', example: 'true' },
                        message: { type: 'string', example: 'User registered successfully' },
                        userId: { type: 'string', example: '66e141cb6828d8e26178f5b6' },
                        token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }
                    }
                },
                LoginUser: {
                    type: 'object',
                    properties: {
                        email: { type: 'string', format: 'email', example: 'temp@temp.com' },
                        password: { type: 'string', example: 'asdfg1234' }
                    },
                    required: ['email', 'password']
                },
                LoginSuccessResponse: {
                    type: 'object',
                    properties: {
                        token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' },
                        user: {
                            type: 'object',
                            properties: {
                                id: { type: 'string', example: '66e141cb6828d8e26178f5b6' },
                                username: { type: 'string', example: 'temp_temp' },
                                email: { type: 'string', format: 'email', example: 'temp@temp.com' }
                            }
                        }
                    }
                },
                GetAllTasksResponse: {
                    type: 'object',
                    properties: {
                        tasks: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    _id: { type: 'string', example: '66e141cb6828d8e26178f5b6' },
                                    task: { type: 'string', example: '100 coding problems' },
                                    createdAt: { type: 'string', format: 'date-time', example: '2024-12-01T18:05:52.060Z' },
                                    updatedAt: { type: 'string', format: 'date-time', example: '2024-12-01T18:05:52.060Z' },
                                }
                            }
                        },
                        metadata: {
                            type: 'object',
                            properties: {
                                totalCount: { type: 'string', example: '10' },
                                currentPage: { type: 'string', example: '1' },
                                totalPages: { type: 'string', example: '1' },
                                limit: { type: 'string', example: '10' }
                            }
                        }
                    }
                },
                GetTaskByIdResponse: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean', example: 'true'},
                        task: {
                            type: 'object',
                            properties: {
                                _id: { type: 'string', example: '66e141cb6828d8e26178f5b6' },
                                userId: { type: 'string', example: '6828d8e26178f5b666e141cb' },
                                task: { type: 'string', example: '150 coding problems' },                         
                                createdAt: { type: 'string', example: '2024-12-01T18:59:45.711+00:00' },
                                updatedAt: { type: 'string', example: '2024-12-01T19:35:59.891+00:00' }
                            }
                        }             
                    },
                },
                CreateTasksRequest: {
                    type: 'object',
                    properties: {
                        task: { type: 'string', example: '100 coding problems' },
                    },
                    required: ['task']
                },
                CreateTasksResponse: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean', example: 'true' },
                        taskId: { type: 'string', example: '66e141cb6828d8e26178f5b6' },
                        message: { type: 'string', example: 'Task created successfully' },
                    }
                },
                UpdateTasksRequest: {
                    type: 'object',
                    properties: {
                        task: { type: 'string', example: '100 coding problems' },
                    },
                    required: ['task']
                },
                UpdateTasksResponse: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean', example: 'true'},
                        message: { type: 'string', example: 'Task updated successfully'},
                        updateTask: {
                            type: 'object',
                            properties: {
                                _id: { type: 'string', example: '66e141cb6828d8e26178f5b6' },
                                userId: { type: 'string', example: '6828d8e26178f5b666e141cb' },
                                task: { type: 'string', example: '150 coding problems' },                         
                                createdAt: { type: 'string', example: '2024-12-01T18:59:45.711+00:00' },
                                updatedAt: { type: 'string', example: '2024-12-01T19:35:59.891+00:00' }
                            }
                        }             
                    },
                },
                DeleteTasksResponse: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean', example: 'true' },
                        message: { type: 'string', example: 'Task deleted successfully' },
                    }
                }
            },
            Error: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    details: { type: 'array', items: { type: 'string' } }
                }
            },
        }
    },
apis: ["./src/utils/swaggerEndpoints/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
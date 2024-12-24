# Task Storage Auth Application
Looking for an excellent option for an effective backend application to serve as a prototype for a user task storage application where a user can save their tasks and an user can keep track of the tasks? Then this is an ideal place to stop. <br>
Yes, this is a secure and scalable Node.js (JavaScript) backend that does have solid documentation by leveraging the robust mechanism of Swagger API documents.

## Description
It is a well-defined, structured program for making an interactive tasks storage application that contains in-house/in-build user authentication using JWT (jsonwebtoken), and passwords are secured and stored by hashing them after several iterations of hash generation using a solid salt; additionally, validation is made using the Zod library to ensure there are no error input requests.

<br>
<h3>So what does it do?</h3>
<div>
Getting to the main point This application is mostly based on and focuses on a solid backend understanding by creating production-grade API endpoints as prototypes and documenting them using the Swagger API documentation. The task storage feature in this application allows an authenticated user to persist the data in the db.
In simple terms, a user can save a task and store those tasks in the DB, and the user can update these tasks as time passes by, and the entire process will be tracked using MongoDB.
</div>

<br>
<h3>Where will it be useful?</h3>
To expand and utilise the power of the internet by connecting a user and an online database, for example, so that in the current world, tasks can be stored digitally and eliminate the need for physical copies by staying ahead of this activity and making the appropriate changes for a green environment.

## Getting Started

### Requirement
Please, before going ahead, make sure you have Node.js installed on your device, and you do have a MongoDB URL instance for storing the data.

### Get started
<u>Note:-</u><span> Please GO to the <b>localhost:3000/v1/api-docs</b> or whichever port you have manually configured in the .env file in order to find all the endpoints.

### Installation
To install this tool, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/AaradhyaParsodia/task-storage-auth-app.git
    ```
2. Navigate into the cloned directory:
   ```sh
   cd task-storage-auth-app
   ```

Just follow the below commands after cloning this repo into your local environment, and you are good to go.

3. Install dependencies:

    ```sh
    npm install
    ```
This command will install all the dependencies.

4. Create .env
    ```sh
    touch .env && cp .env.example .env
    ```
    Please make sure to put every details and key upfront in the .env file.

## Usage

```sh
node index.js
```
At the root directory, run that command and make sure again you are at the right directory level. After running it, <b>Please go to localhost:3000/v1/api-docs</b> to check which endpoints are there. One more thing: remember to provide the bearer token for authenticated requests.
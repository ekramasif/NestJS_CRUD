<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## User Management System (CRUD)

This is a NestJS-based application that provides a user management system with CRUD operations, authentication using JSON Web Tokens (JWT), and integration with a third-party API.

### Prerequisites

- Node.js (v12 or higher)
- MySQL (or any other compatible database)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ekramasif/NestJS_CRUD.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd NestJS_CRUD
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up the database:**
   
   - Create a new database in MySQL.
   - Update the `databaseConfig` in `src/config/database.config.ts` with your MySQL credentials and database name.

5. **Start the application:**

    ```bash
    npm run start:dev
    ```

    The application should now be running at [http://localhost:3000](http://localhost:3000).

### API Endpoints

#### Users

- **GET /users:** Get a list of all users.
- **GET /users/:id:** Get a specific user by ID.
- **POST /users:** Create a new user.
- **PUT /users/:id:** Update an existing user.
- **DELETE /users/:id:** Delete a user.

#### Authentication

- **POST /auth/login:** Authenticate a user and obtain a JWT token.

#### Third-Party API Integration

- **GET /comments:** Fetch data from a third-party API.

### Authentication

The application uses JWT for authentication. To authenticate a user, send a POST request to `/auth/login` with the user's email and password in the request body. If the credentials are valid, the server will respond with a JWT token. Include the JWT token in the `Authorization` header for authenticated routes (e.g., GET `/users`).

### Third-Party API Integration

The application integrates with a third-party API to fetch data. The specific API endpoint is configurable in the `CommentsService`. By default, it fetches data from [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments).

### Database

The application uses TypeORM with MySQL as the database. The database connection is configured in `src/config/database.config.ts`. User data is stored in the `user` table.

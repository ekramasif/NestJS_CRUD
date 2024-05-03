<p align="center">
  <b>NestJS CRUD</b>
</p>


This is a NestJS-based application that provides CRUD operations, authentication using JSON Web Tokens (JWT), managing entity relationships, and integration with a third-party API.

### Prerequisites

- Node.js
- MySQL

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

- **POST /auth/register:** Register a new user.
  - Request Body:
    - `name`: User's name
    - `email`: User's email address
    - `password`: User's password
- **POST /auth/login:** Authenticate a user and obtain a JWT token.
  - Request Body:
    - `email`: User's email address
    - `password`: User's password
- **GET /auth/get-user:** Get user details using JWT token stored in cookies.
- **POST /auth/logout:** Log out the user and clear the JWT token stored in cookies.

#### Bookings

- **GET /bookings:** Get a list of all bookings.
- **GET /bookings/:id:** Get a specific booking by ID.
- **POST /bookings:** Create a new booking.
- **PUT /bookings/:id:** Update an existing booking.
- **DELETE /bookings/:id:** Delete a booking.

#### Passengers

- **GET /passengers:** Get a list of all passengers.
- **GET /passengers/:id:** Get a specific passenger by ID.
- **POST /passengers:** Create a new passenger.
- **PUT /passengers/:id:** Update an existing passenger.
- **DELETE /passengers/:id:** Delete a passenger.

#### Tickets

- **GET /tickets:** Get a list of all tickets.
- **GET /tickets/:id:** Get a specific ticket by ID.
- **POST /tickets:** Create a new ticket.
- **PUT /tickets/:id:** Update an existing ticket.
- **DELETE /tickets/:id:** Delete a ticket.

#### Third-Party API Integration

- **GET /comments:** Fetch data from a third-party API.

### Authentication

The application uses JWT for authentication. To register a new user, send a POST request to `/auth/register` with the user's name, email, and password in the request body. To authenticate a user, send a POST request to `/auth/login` with the user's email and password. Upon successful authentication, the server will respond with a JWT token, which should be included in the `Authorization` header for authenticated routes.

To access authenticated routes, such as getting user details (`/auth/get-user`), the JWT token must be stored in cookies. The user's details can be retrieved by sending a GET request to `/auth/get-user`, which will validate the JWT token stored in cookies and return the user's details.

To log out the user, send a POST request to `/auth/logout`, which will clear the JWT token stored in cookies and log the user out.

### Third-Party API Integration

The application integrates with a third-party API to fetch data. The specific API endpoint is configurable in the `CommentsService`. By default, it fetches data from [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments).

### Database

The application uses TypeORM with MySQL as the database. The database connection is configured in `src/config/database.config.ts`. User data is stored in the `user` table.

#### Entity Relationships

- **Booking:** Each booking belongs to a user and can have multiple passengers and tickets associated with it.
- **Passenger:** Each passenger belongs to a booking.
- **Ticket:** Each ticket belongs to a booking.
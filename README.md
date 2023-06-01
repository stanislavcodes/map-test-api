# map-test REST API

The map-test API is a RESTful web service that provides functionalities for managing places. It allows users to perform CRUD (Create, Read, Update, Delete) operations on place entities. The API is built using Node.js, Nest.js, Prisma and PostgreSQL (or any other database of your choice).

### Key Features:
- **Get All Places**: Retrieve a list of all places.
- **Get Place by ID**: Retrieve a specific place by their unique ID.
- **Create Place**: Create a new place by providing their name, description, latitude, longitude.
- **Update Place**: Update the information of an existing place identified by their ID.
- **Delete Place**: Delete a place from the database based on their ID.

## Using the map-test API

Endpoints of map-test API:

1. `GET /place`: Retrieves a list of all places.
2. `GET /place/:id`: Retrieves a specific place by their unique ID.
3. `POST /place`: Creates a new place with provided data in the request body.
4. `PUT /place/:id`: Updates the information of an existing place identified by their ID.
5. `DELETE /place/:id`: Deletes a place from the database based on their ID.
7. `GET /healthcheck`: Returns a 200 status to indicate that the API is running and healthy.

The endpoints are designed to be intuitive and follow RESTful conventions, allowing developers to easily interact with the API and perform the necessary operations for place management.

## How to run locally

### 1. Clone repo and install dependencies

Clone the repository:

```bash
git clone https://github.com/stanislavcodes/map-test-api.git
```

Install the dependencies:

```bash
cd map-test-api
npm install
```

Set `.env` file (see .env.example):

- Add URL to your PostgreSQL Database (for other db's check out the [Prisma docs](https://www.prisma.io/docs))

### 2. Create and seed the database

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.


### 3. Start the server

```
npm run dev
```

The server is now running on `http://localhost:3000`!

### *4. Testing

Run the following command run tests

```
npm run test
```

## Author

[@stanislavcodes](https://github.com/stanislavcodes) | Stanislav Korchevskyi 
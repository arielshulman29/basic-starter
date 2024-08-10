# Restaurant Picker

We need to build a micro-app of a restaurant picker.
Feel free to use any external library you like, but you would be asked to explain your choices

## The Starter

you will receive a pre-configured Full Stack starter (in TypeScript) that contains the following:

- client - React Vite App that preforms an api call to the server
- server - Nodejs Express App with a route "/api" that returns 10 restaurants from the db.
- database - Mongo docker populated with a sample restaurants db.


## Tasks
- Build a search dropdown component that uses the existing api and allows the user to select a restaurant
- Add the ability to search a restaurant by name (both client and server)
- Add pagination to the api- get 10 at a time. (no need to remove data from the client)

## Bonus
- Add caching

## Getting started
to run client on port 5173
```sh
cd client
pnpm i
pnpm run dev
```

to run server on port 3000
```sh
cd server
pnpm i
pnpm run dev
```

to initialize a mongoDB instance on port 27017
```sh
cd server
pnpm run database
```

> Note: Make sure that you're using the TypeScript version installed in the project (or newer), because the starter uses new TypeScript features (like "using")

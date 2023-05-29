# Hackathon Starter Project

Welcome to the Hackathon Starter Project! This project is designed to give you a comprehensive set of templates to kickstart your coding journey, whether you're participating in a hackathon or just exploring on your own. It features a variety of backends and a frontend template, plus a gateway and Docker compose examples to tie everything together.

## Directory Structure

The project is divided into various directories, each corresponding to a distinct part of the application. Here's a quick breakdown:

- [`./fastapi-backend`](./fastapi-backend): This is a backend service built using FastAPI, a high-performance Python framework for building APIs.

- [`./graphene-backend`](./graphene-backend): This is another backend service built with Flask and Graphene. Flask is a lightweight web application framework for Python, while Graphene is a Python library for building GraphQL APIs in Python.

- [`./go-graphql-backend`](./go-graphql-backend): This directory contains a backend service implemented in Go with the help of gqlgen, a Go library for building GraphQL servers. It includes support for subscriptions.

- [`./react-frontend`](./react-frontend): This is a frontend application built with React and TypeScript. React is a JavaScript library for building user interfaces, and TypeScript is a statically typed superset of JavaScript that adds optional types.

- [`./gateway`](./gateway): This directory contains a sample setup that combines multiple backend services. 

- [`./docker-compose-samples`](./docker-compose-samples): This directory contains examples of `docker-compose.yml` files showing how to configure Docker Compose to run the various components of this project together.

Each directory contains a `README.md` file with more detailed information about that part of the project. 

## Getting Started

To get started with this project, first make sure you have Docker installed, as most of the project runs within Docker containers.

Then, choose which backend you'd like to start with (`fastapi-backend`, `graphene-backend`, or `go-graphql-backend`) and follow the instructions in the corresponding `README.md` file to build and run the backend.

Next, follow the instructions in the [`react-frontend/README.md`](./react-frontend/README.md) to start the frontend application.

Finally, you can explore the `gateway` and `docker-compose-samples` directories to see examples of how to combine the different parts of the project.

## Further Reading

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Graphene Documentation](https://docs.graphene-python.org/)
- [Gqlgen Documentation](https://gqlgen.com/)
- [React Documentation](https://reactjs.org/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

We hope this gives you a good introduction to the Hackathon Starter Project. Happy coding!

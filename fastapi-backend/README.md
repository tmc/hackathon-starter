# Hackathon Template - FastAPI Backend

This repository provides a starter template to help you quickly get going with a FastAPI backend at a hackathon.

## Introduction

FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed to be easy to use and to provide high throughput and low latency.

This starter kit provides a basic project scaffold that you can use to start building your own FastAPI-based application.

## Dependencies

This template assumes that you have the following tools installed on your system:

- Python 3.7+
- pipenv

## Installation

1. Clone this repository to your local machine.
2. Navigate to the `fastapi-backend` directory.
3. Install dependencies with `pipenv install`.

## Usage

1. Run the server with `make run`.
2. Visit `http://localhost:8000` in your browser.

For more detailed instructions on deploying and using your application, please refer to the documentation for each file in this repository.

## Running locally

To start the server locally, run the following command:

```
make run
```

This will start the server at `http://localhost:8000`.

## Docker usage

This template includes a Dockerfile that you can use to build and run the application in a Docker container. To build and run the container, follow these steps:

1. Install Docker on your system.
2. Build the image with `make docker-build`.
3. Run the container with `make docker-run`.

## Contributing

If you find any issues with this starter kit or have suggestions for how to improve it, please open an issue or submit a pull request on the [GitHub repository](https://github.com/example/hackathon-templates).

## License

This project is licensed under the ISC License - see the [LICENSE](../LICENSE) file for details.

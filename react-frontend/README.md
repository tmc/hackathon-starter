# React Frontend Template

This is a minimal [React](https://reactjs.org/) frontend template, built with [TypeScript](https://www.typescriptlang.org/).

## Introduction

This template provides a basic structure to build a React frontend application with TypeScript.

## Dependencies

- Node.js (v18 or later)
- Yarn (or npm)

## Installation

Firstly, clone this repository and navigate to the `react-frontend` directory:

```
git clone https://github.com/example/hackathon-templates.git
cd hackathon-templates/react-frontend
```

Then install the dependencies using Yarn:

```
yarn install
```

Or using npm:

```
npm install
```

## Usage

### Running locally

You can start a development server by running:

```
yarn start
```

Or:

```
npm run start
```

This will start a local development server at `localhost:1234`. Any changes you make to the code will automatically trigger a reload of the page.

### Building for production

To create a production build, you can run:

```
yarn build
```

Or:

```
npm run build
```

This will create an optimized build in the `dist` directory.

### Docker usage

To create a Docker image, run:

```
docker build -t react-frontend .
```

And to run the container:

```
docker run -p 80:80 react-frontend
```

This will start a containerized version of the application.

## Contributing

Please feel free to submit issues, fork the repository and send pull requests!

## License

This project is licensed under the ISC License - see the [LICENSE](../LICENSE) file for details.

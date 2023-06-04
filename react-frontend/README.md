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
git clone https://github.com/<user>/hackathon-starter.git
cd hackathon-starter/react-frontend
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

### Deving with codegen
You can run the codegen cli with the make target
```
make watch-codegen
```

or underlying command:
```
yarn graphql-codegen --watch
```

This will watch your files for any queries/mutations/subscriptions authored and copy them into
`src/gql-gen/gql.ts` and `src/gql-gen/graphql.tx` so the return values can be typed. It will also pick up any
changes to the overall schema defined in `../gateway/supergraph.graphql`. This helps ensure the typing is
consistent across the stack and eliminates the need to manually define types in multiple places

### Running locally

You can start a development server by running:

```
yarn start
```

Or:

```
npm run start
```

This will start a local development server at `localhost:3000`. Any changes you make to the code will automatically trigger a reload of the page.

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

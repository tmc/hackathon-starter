import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

import App from './App';
import GraphQLSandbox from './GraphQLSandbox'

import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "sandbox",
    element: <GraphQLSandbox />
  },
]);



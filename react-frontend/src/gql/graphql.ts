/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  join__FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};

export type NewTodo = {
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export enum Join__Graph {
  BackendA = 'BACKEND_A',
  BackendB = 'BACKEND_B'
}

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string }> };

export type GetTodos2QueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodos2Query = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, done: boolean }> };


export const GetTodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetTodosQuery, GetTodosQueryVariables>;
export const GetTodos2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodos2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"done"}}]}}]}}]} as unknown as DocumentNode<GetTodos2Query, GetTodos2QueryVariables>;
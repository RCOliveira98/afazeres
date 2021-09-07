import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { criarTodo } from './todo.actions';

export const estadoInicial: Todo[] = [];

const _todoReducer = createReducer(
  estadoInicial,
  on(criarTodo, (state, newTodo: Todo) => [...state, newTodo])
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
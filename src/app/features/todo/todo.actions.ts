import { createAction, props } from "@ngrx/store";
import { Todo } from "./models/todo.model";

export const criarTodo = createAction('[TODO] Criar todo', props<Todo>())
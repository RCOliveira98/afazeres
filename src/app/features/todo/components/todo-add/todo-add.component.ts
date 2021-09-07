import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoState } from '../../models/todo-state.model';
import { Todo } from '../../models/todo.model';
import { criarTodo } from '../../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public formulario: FormGroup = this.fb.group({
    texto: ['', Validators.required]
  });

  constructor(private store: Store<TodoState>, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public adicionarTarefa(): void {
    if (this.formulario.invalid) return;

    this.store.dispatch(criarTodo(this.mapearAtividade()));

    this.limparTexto();

    this._notificarCadastroRealizado();
  }

  private mapearAtividade(): Todo {
    let newTodo: Todo = {
      id: new Date().getTime(),
      texto: this.formulario.get('texto')?.value,
      completada: false
    };

    return newTodo;
  }

  public limparTexto(): void {
    this.formulario.reset();
  }

  private _notificarCadastroRealizado(): void {
    alert('Atividade cadastrada com sucesso!');
  }

}

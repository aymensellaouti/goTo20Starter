import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from '../../services/logger.service';
import { UUIDInjectionToken } from 'src/app/tokens/uuid.injection-token';

let n = 1;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: WritableSignal<Todo[]> = signal<Todo[]>([]);
  uuid = inject(UUIDInjectionToken);
  loggerService = inject(LoggerService);
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.todos.asReadonly();
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    // Todo: Créer un id unique et l'ajouter
    todo.id = this.uuid();
    this.todos.update((myTodos) => [...myTodos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos().indexOf(todo);
    if (index > -1) {
       this.todos.update((myTodos) => myTodos.filter((actualTodo) => todo.id != actualTodo.id ));
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {
    this.loggerService.logger(this.todos());
  }
}

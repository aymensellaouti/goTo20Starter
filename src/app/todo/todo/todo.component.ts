import { Component, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

import { FormsModule } from '@angular/forms';
import { CvComponent } from "src/app/cv/cv/cv.component";
import { CanLeave } from 'src/app/guard/can-leave.interface';

// export class Julie {}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
  imports: [FormsModule],
})
export default class TodoComponent implements CanLeave {
  private todoService = inject(TodoService);

  todos: Todo[] = [];
  /**
   * Le todo qui rerésente le formulaire d'ajout d'un todo
   */
  todo = new Todo();

  constructor() {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  canLeave() {
    if (this.todo.name.trim() || this.todo.content.trim()) {
      return false;
    }
    return true;
  }
}

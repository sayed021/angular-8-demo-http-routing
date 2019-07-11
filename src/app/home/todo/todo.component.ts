import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/share/todo.service';
import { Todo } from 'src/app/share/class/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe(data => this.todos = data);
  }

}

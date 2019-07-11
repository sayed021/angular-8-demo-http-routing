import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './class/todo';

const headers = new HttpHeaders({
  'content-type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.url);
  }

  saveTodo(todo: Todo) {
    this.http.post(this.url, Todo, { headers } );
  }

  deleteTodo(id: number) {
    this.http.delete(this.url + '/' + id );
  }

}

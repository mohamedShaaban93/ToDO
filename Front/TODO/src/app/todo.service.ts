import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = 'https://todopayme.herokuapp.com/api/';
  todoList: Todo[];
  constructor(
    private Http: HttpClient,
  ) { }

  getall(id: string) {
    return this.Http.post <[Todo]> (this.baseUrl + 'todo/you' , {user: id});
  }

  addnew(todo: Todo) {
    return this.Http.post <Todo> (this.baseUrl + 'todo/new' , todo);
  }

  updateTodoStatus(todo: Todo ) {
    return this.Http.put(this.baseUrl + 'todo', todo );
  }

  getone(id) {
    return this.Http.get<Todo>(this.baseUrl + 'todo/' + id);
  }

  delete(id) {
    return this.Http.delete(this.baseUrl + 'todo/' + id);
  }
}


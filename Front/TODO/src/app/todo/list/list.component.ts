import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {User} from '../../user';
import {AuthserviceService} from '../../authservice.service';
import {Router} from '@angular/router';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  TodoList: Todo[] = [];
  user: User = new User('', '', '');
  constructor(
    private auth: AuthserviceService,
    private router: Router,
    private todoSer: TodoService
  ) { this.getAll(); }

  ngOnInit() {
    if ( !this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      console.log('useeeeeeeer[----' , this.auth.CurrentUser);
      this.user = this.auth.CurrentUser;
    }
  }

  getAll() {
    console.log(this.auth.CurrentUser._id , "-----------------------")
    this.todoSer.getall(this.auth.CurrentUser._id).subscribe(
      res => {
        console.log("res ::;;;;;;;;; ", res);
        this.TodoList = this.todoSer.todoList = res; } ) } ;

  updateTodoStatus(todo: Todo ) {
    this.todoSer.updateTodoStatus(todo).subscribe(
      res => {
        this.getAll();
      }
    )
  }

  delete(id) {
    this.todoSer.delete(id).subscribe(
      res => {
        this.getAll();
      }
    )
  }


}

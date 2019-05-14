import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {AuthserviceService} from "../../authservice.service";
import {Router} from "@angular/router";
import {TodoService} from "../../todo.service";
import {User} from "../../user";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private auth: AuthserviceService,
    private router: Router,
    private todoSer: TodoService
  ) { }
  user: User = new User('', '', '');
  newTodo: Todo = {name: '' , note: '', _id: '' , done: false, user: this.auth.CurrentUser._id};
  ngOnInit() {
    if ( !this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.user = this.auth.CurrentUser;
    }
  }

  addnew(){
    this.todoSer.addnew(this.newTodo).subscribe(
      res => {
            this.router.navigate(['/TodoList']);
      } ) }

}

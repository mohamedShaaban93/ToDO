import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {AuthserviceService} from "../../authservice.service";
import {Router} from "@angular/router";
import {TodoService} from "../../todo.service";
import {User} from "../../user";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private auth: AuthserviceService,
    private router: Router,
    private todoSer: TodoService
  ) { }
  user: User = new User('', '', '');
  currentTOdo: Todo = {name: '' , note: '' , _id: '' , done: false , user: ''};
  ngOnInit() {
    if ( !this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.user = this.auth.CurrentUser;
    }
    this.getOne(this.currentTOdo._id);
  }

  updateTodoStatus(todo: Todo)
  {
    this.todoSer.updateTodoStatus(todo).subscribe(
      res => {
        this.getOne(todo._id);
      }
    )
  }

  getOne(id: string ) {
    this.todoSer.getone(id).subscribe(
      res => {
        this.currentTOdo = res;
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {AuthserviceService} from "../../authservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private auth: AuthserviceService,
    private router: Router
  ) { }
  user: User = {name: '' , password: '' , _id: ''};

  ngOnInit() {
    if ( !this.auth.isAuthenticated()) {
      this.router.navigate(['/rigster']);
    } else {
      this.user = this.auth.CurrentUser;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {AuthserviceService} from '../../authservice.service';
import {_iterableDiffersFactory} from "@angular/core/src/application_module";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthserviceService,
    private router: Router
  ) { }
  error: string [] = [];
  currentUser: User = new User( '' , '', '');


  login() {
      this.auth.login(this.currentUser).subscribe(
        res => {
          if ( res._id ) {
              this.auth.setToken(res._id);
              this.auth.CurrentUser = res;
              console.log(this.auth.CurrentUser);
              console.log(this.auth.getToken());
              this.router.navigate(['/profile']);
          } else {

            this.error.push("password or username wrong");
          }

        }
      )
  }
  ngOnInit() {
    if ( this.auth.isAuthenticated()) {
      this.router.navigate(['/profile']);
    }
  }

}

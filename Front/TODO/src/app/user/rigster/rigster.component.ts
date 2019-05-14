import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {AuthserviceService} from '../../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rigster',
  templateUrl: './rigster.component.html',
  styleUrls: ['./rigster.component.css']
})
export class RigsterComponent implements OnInit {



  error: string[] = [];
  constructor(private auth: AuthserviceService,
              private router: Router) { }

  user: User = new User('', '', '');
  confirm: string = '';

  rigster() {
    if(this.user.password === this.confirm){
      this.auth.register(this.user).subscribe(
        res => {
          if(res._id) {
            this.router.navigate(['/login']);
          }else {
            this.error.push('username is already found before ');
          }
        }
      )
    }else {
      // error in handling password
      this.error.push('confirm password is not equal password');
    }
  }
  ngOnInit() {
    if ( this.auth.isAuthenticated()) {
      this.router.navigate(['/profile']);
    }
  }

}

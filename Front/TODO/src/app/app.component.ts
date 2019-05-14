import { Component } from '@angular/core';
import {AuthserviceService} from './authservice.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {





 constructor(public auth: AuthserviceService,
             public http: HttpClient,
             public router: Router ) { }


logout() {
  this.auth.removeToken();
  this.router.navigate(['/login']);
}
}

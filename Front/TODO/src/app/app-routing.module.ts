
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {ProfileComponent} from './user/profile/profile.component';
import {RigsterComponent} from './user/rigster/rigster.component';
import {CreateComponent} from './todo/create/create.component';
import {ListComponent} from './todo/list/list.component';
import {DetailsComponent} from './todo/details/details.component';

export const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'rigster', component: RigsterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'TodoList', component: ListComponent},
  {path: 'Todolist/new', component: CreateComponent},
  {path: 'todo/:id' , component: DetailsComponent},
];

// export const routes : Routes ;





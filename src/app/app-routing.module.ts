import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {CreateComponent} from './create/create.component'
import {UsersComponent} from './users/users.component'
import {UserComponent} from './user/user.component'




const routes: Routes = [
  { path: 'users', component: UsersComponent }, 
  { path: 'user/:idUser', component: UserComponent }, 
  { path: 'create', component: CreateComponent },
   { path: '',   redirectTo: '/create', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

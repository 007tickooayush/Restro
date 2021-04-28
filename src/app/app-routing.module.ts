import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestroComponent} from './add-restro/add-restro.component';
import {ListRestroComponent} from './list-restro/list-restro.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'add', component: AddRestroComponent
  },
  {
    path: 'list', component: ListRestroComponent
  },
  {
    path: 'update', component: UpdateRestroComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

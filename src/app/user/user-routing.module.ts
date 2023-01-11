import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [{ path: 'new', component: NewUserComponent },
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  redirectTo: 'new',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

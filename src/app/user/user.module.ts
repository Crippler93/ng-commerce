import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { UserMaterialModule } from './user-material.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    UserMaterialModule
  ]
})
export class UserModule { }

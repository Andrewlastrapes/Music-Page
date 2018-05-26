import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContractComponent } from './user-contract/user-contract.component';
import {  UserFormComponent } from "./user-form/user-form.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "user-form", component:  UserFormComponent },
  { path: 'user-contract', component: UserContractComponent },
  { path: "home", component: HomeComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})



export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserContractComponent } from './user-contract/user-contract.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormDataService } from "./form-data.service";


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserContractComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})


export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserContractComponent } from './user-contract/user-contract.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormDataService } from "./form-data.service";
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';





@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserContractComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,


   
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})


export class AppModule { }

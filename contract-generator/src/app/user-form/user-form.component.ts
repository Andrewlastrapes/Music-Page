import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from "../form-data.service";
 
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})


export class UserFormComponent implements OnInit {
  @Output() redirect:EventEmitter<any> = new EventEmitter();

  firstName: String;
  lastName: String;
  weddingVenue: String;
  date: String;
  startTime: String;
  finishTime: String
  pType: String; 

  data:any = {};




  constructor(private router:Router,
              private dataServ: FormDataService) { 
    this.data = {
      firstName: this.firstName,
      lastName: this.lastName,
      weddingVenue: this.weddingVenue,
      date: this.date,
      startTime: this.startTime,
      finishTime: this.finishTime,
      pType: this.pType
    }
 
 
  }

  changeComponent(url:string){
    this.dataServ.setData(this.data);
    this.router.navigate([url]);//redirects url to new component
}


  ngOnInit() {
  }

}

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

  name: String;
  tele: number;
  email: String;
  weddingVenue: String;
  date: String;
  startTime: String;
  finishTime: String
  pType = {
    ceremony: Boolean,
    reception: Boolean,
    other: Boolean
  }

  data:any = {};




  constructor(private router:Router,
              private dataServ: FormDataService) { 
    this.data = {
      name: this.name,
      tele: this.tele,
      email: this.email,
      weddingVenue: this.weddingVenue,
      date: this.date,
      startTime: this.startTime,
      finishTime: this.finishTime,
      pType: {
        ceremony: this.pType.ceremony,
        reception: this.pType.reception,
        other: this.pType.other
      }
    }
 
 
  }

  changeComponent(url:string){
    this.dataServ.setData(this.data);
    this.router.navigate([url]);//redirects url to new component
}



  ngOnInit() {
  }

}

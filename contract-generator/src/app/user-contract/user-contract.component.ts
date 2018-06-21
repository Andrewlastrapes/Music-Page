import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from "../form-data.service";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';





@Component({
  selector: 'app-user-contract',
  templateUrl: './user-contract.component.html',
  styleUrls: ['./user-contract.component.css']
})
export class UserContractComponent implements OnInit {
  @Input() data:any;
 




  constructor(private router:Router,
              private dataServ:FormDataService,
              private db: AngularFireDatabase
            ) { 
     
}

  ngOnInit() {
    this.data = this.dataServ.getData();    
  }

  pType(){
    let c = this.data.pType.ceremony;
    let r = this.data.pType.reception;
    let o = this.data.pType.other;

    if(c !== false && r === false && o === false){
      return "Ceremony.";
    } else if(r !== false && c === false && o === false) {
      return "Reception.";
    } else if(o !== false && c === false && r === false){
      return "Other.";
    } else if(c !== false && r !== false && o === false ){
      return "Ceremony and Reception.";
    } else if(c !== false && r === false && o !== false ){
      return "Ceremony and Other.";
    } else if(c === false && r !== false && o !== false ){
      return "Reception and Other.";
    } else if(c !== false && r !== false && o !== false ){
      return "Ceremony, Reception, and Other."
    }
    
  } 

  calculateCancelDate(){
  
    let d = this.data.date;
    let d1 = this.data.date[5].toString() + this.data.date[6].toString()
    let d2 = (parseInt(d1) - 1).toString()

    if(d2 === "0"){
      d2 = "-12";
      d1 = "-01"
     d = d.toString().replace(d1, d2)
    } else if(d2 === "11" || d2 === "10"){
     d = d.toString().replace(d1, d2);
    } else {
      d2 = "0" + d2
     d = d.toString().replace(d1, d2)
    }
    
    return d
    
  }

  displayDate(){
    return new Date().toDateString();
  }

  submit(){
  console.log(this.data)
   const obj = this.db.database.ref('/contract');
   obj.push({
     name: this.data.name,
     email: this.data.email,
     finishTime: this.data.finishTime,
     date: this.data.date,
    //  ceremony: this.data.pType.ceremony,
    //  reception: this.data.pType.reception,
    //  other: this.data.pType.other,
     startTime: this.data.startTime,
     phone: this.data.tele,
     venue: this.data.weddingVenue
    })

  }


}

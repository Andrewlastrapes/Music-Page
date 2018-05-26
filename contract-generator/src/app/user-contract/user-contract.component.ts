import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from "../form-data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-contract',
  templateUrl: './user-contract.component.html',
  styleUrls: ['./user-contract.component.css']
})
export class UserContractComponent implements OnInit {
  @Input() data:any;

  contract: string;

  constructor(private router:Router,
               private dataServ:FormDataService) { 


  }

  ngOnInit() {
    this.data = this.dataServ.getData();
    console.log(this.data);
  }

}

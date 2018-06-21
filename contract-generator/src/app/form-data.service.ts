import { Injectable } from '@angular/core';



@Injectable()
export class FormDataService {
  private data:any


  setData(data:any){
    this.data = data
  }

  getData():any {
    return this.data;
  }


  

  constructor() { }

}

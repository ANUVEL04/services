import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[]=["Anu",'E354','anu@gmail.com']
  info2: string[]=["bala",'E355','bhuja@gmail.com']
  info3: string[]=["bhuja",'E356','abala@gmail.com']
  getInfo1(){
    return this.info1
  }
  getInfo2(){
    return this.info2
  }
  getInfo3(){
    return this.info3
  }
  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
  }
  constructor() { }
}

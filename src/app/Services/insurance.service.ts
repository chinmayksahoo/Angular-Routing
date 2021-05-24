import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import Insurance from '../Insurance';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  //Hot Observable
  inss:Array<Insurance> = [];
  subject:BehaviorSubject<Array<Insurance>> = new BehaviorSubject(this.inss);

  constructor(private client:HttpClient,) { 
    this.client.get<Array<Insurance>>("http://localhost:3001/InsuranceData").subscribe(
      data => {this.inss = data;
      this.subject.next(this.inss)
      }
    )
  }

  getInsurance():Observable<Array<Insurance>>{
    //Hot Observable
    return this.subject

    //Observable
    // return this.client.get<Array<Insurance>>("http://localhost:3001/InsuranceData")
  }
  
  addInsurance(ins:Insurance):Observable<Insurance>{
    //Hot Observable
    return this.client.post<Insurance>("http://localhost:3001/InsuranceData",ins).pipe(tap(item => {
      this.inss.push(item)
      this.subject.next(this.inss)
    }))
    //Observable
    // return this.client.post<Insurance>("http://localhost:3001/InsuranceData",ins)
  }

  updateInsurance(ins:Insurance):Observable<Insurance>{
    // console.log(ins.id)
    // console.log(`http://localhost:3001/InsuranceData/${Number(ins.id)}`)
    return this.client.put<Insurance>(`http://localhost:3001/InsuranceData/${Number(ins.id)}`,ins)
  }

}

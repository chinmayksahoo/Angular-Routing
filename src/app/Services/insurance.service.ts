import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Insurance from '../Insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private client:HttpClient) { 

  }

  getInsurance():Observable<Array<Insurance>>{
    return this.client.get<Array<Insurance>>("http://localhost:3001/InsuranceData")
  }
  
  addInsurance(ins:Insurance):Observable<Insurance>{
    return this.client.post<Insurance>("http://localhost:3001/InsuranceData",ins)
  }

}

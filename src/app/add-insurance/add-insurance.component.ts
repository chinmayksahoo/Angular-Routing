import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../Services/insurance.service'
import Insurance from '../Insurance';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})

export class AddInsuranceComponent implements OnInit {

  ins:Insurance = new Insurance();
  insurances:Array<Insurance> = [];

  constructor(private ser:InsuranceService) { 

  }

  ngOnInit(): void {
  }

  addIns(){
    this.ser.addInsurance(this.ins).subscribe(
      item=>{console.log(item)},
      error=>{console.log(error)}
    );
    this.insurances.push(this.ins)
    this.ins = new Insurance()
  }

}

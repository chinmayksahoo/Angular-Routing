import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../Services/insurance.service';
import Insurance from '../Insurance';

@Component({
  selector: 'app-show-insurance',
  templateUrl: './show-insurance.component.html',
  styleUrls: ['./show-insurance.component.css']
})
export class ShowInsuranceComponent implements OnInit {

  insurance:Insurance = new Insurance()
  insurances:Array<Insurance> = [];
  displayedColumns = ['ID', 'Name', 'Plan', 'Duration'];
  constructor(private ser:InsuranceService) { 
    this.ser.getInsurance().subscribe(item=>{
      this.insurances = item
    },error=>console.error(error)
    );
  }

  ngOnInit(): void {
  }

}

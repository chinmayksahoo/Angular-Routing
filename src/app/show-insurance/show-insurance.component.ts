import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
  constructor(private ser:InsuranceService, private route:Router) { 
    this.ser.getInsurance().subscribe(item=>{
      this.insurances = item
    },error=>console.error(error)
    );
  }

  ngOnInit(): void {
  }

  clickCard(ins:Insurance){
    let path:NavigationExtras = {
      queryParams:{"Id":ins.id, "Name":ins.Name, "Plan":ins.Plan, "Duration":ins.Duration}
      // queryParams:{"Id":ins.id}
    }
    this.route.navigate(['dashboard','show-ins','edit-ins'],path)
  }

}

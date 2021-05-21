import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InsuranceService } from '../Services/insurance.service';
import Insurance from '../Insurance'

@Component({
  selector: 'app-edit-ins',
  templateUrl: './edit-ins.component.html',
  styleUrls: ['./edit-ins.component.css']
})
export class EditInsComponent implements OnInit {

  name:string;
  id:number;
  plan:string;
  dur:number;

  color:string = "purple";
  oColor:string = "red";

  ins:Insurance;
  insurances:Array<Insurance> = [];

  constructor(private currentRoute:ActivatedRoute, private ser:InsuranceService) { 
    // this.name = this.currentRoute.snapshot.paramMap.get('Name')
    // this.currentRoute.params.subscribe((p:Params)=>{
    //   this.name = p.Name
    // })
    this.currentRoute.queryParams.subscribe((p:Params)=>{
      this.name = p["Name"]
      this.id = p["Id"]
      this.plan = p["Plan"]
      this.dur = p["Duration"]
      console.log(this.name + this.id + this.plan + this.dur)
    })
  }

  ngOnInit(): void {
    
  }

  // getNoteById(insId): Insurance {
  //   const ins = this.insurances.find(insValue => insValue.id === insId);
  //   return Object.assign({}, ins);
  // }

  editInsurance(){
    this.ser.getInsurance().subscribe(item=>{
      this.insurances = item
    },error=>console.error(error)
    );
    
    // for (let i of this.insurances){
    //   if(i.id === Number(this.id) && i.Name !== this.name){
    //     console.log("Inside If")
    //     i.Name = this.name
    //     this.ins = i;
    //     console.log(this.ins)
    //     // this.ins.id = Number(i.id)
    //     break
    //   }
    //   else{
    //     console.log("Inside Else")
    //   }
    // }
    this.ins = {id:this.id, Name:this.name, Plan:this.plan, Duration:this.dur}

    // console.log(this.ins)
    // console.log(this.insurances)
    this.ser.updateInsurance(this.ins).subscribe(editedInsurance=>{
      let existingInsurance = this.insurances.find(insuranceValue => insuranceValue.id === editedInsurance.id);
      Object.assign(existingInsurance, editedInsurance);
      // Object.assign(this.ins, editedInsurance);
      // console.log(this.editInsurance)
    },error=>console.log(error))
  }

}

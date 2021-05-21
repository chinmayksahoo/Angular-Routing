import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPlanPipe'
})
export class MyPlanPipePipe implements PipeTransform {

  validPlans = ['HMO', 'PPO', 'POS']
  i:number
  transform(value: string): string {
    for(this.i=0; this.i < this.validPlans.length; this.i++){
      if (this.validPlans[this.i] === value) {
        return "Valid";
      } 
      else {
        return "InValid"
      }
    }
  }
}

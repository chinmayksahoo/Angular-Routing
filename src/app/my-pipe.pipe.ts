import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, length:number): string {
    return value.substr(0, length);
    // return "Mr. " + value
  }

}

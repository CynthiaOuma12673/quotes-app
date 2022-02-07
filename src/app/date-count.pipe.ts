import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):number {
    let today:Date = new Date(); // get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value) //returns value in milliseconds
    const secondInDay =86400; //60seconds* 60mins in an hour*24hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts milliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondInDay;

    if (dateCounter >=1 && value < todayWithNoTime){
      return dateCounter;

    }
    else {
      return 0;
    }
  }
}

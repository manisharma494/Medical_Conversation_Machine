import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit {

  dateLeft: any;
  companyJoined ="";
  href=window.location.href;
  constructor() {
    // One day Time in ms (milliseconds)
    let one_day = 1000 * 60 * 60 * 24
    let present_date = new Date();
    let christmas_day = new Date(present_date.getFullYear(), 5, 1)
    if (present_date.getMonth() >= 5  && present_date.getDate() > 1) {
        christmas_day.setFullYear(christmas_day.getFullYear() + 1);
    }else{ 
      let Result = Math.round(christmas_day.getTime() - present_date.getTime()) / (one_day);
      let Final_Result = Result.toFixed(0);
      this.dateLeft = Final_Result + " Days Left ";
    }

  }

  ngOnInit(): void {
  }

}

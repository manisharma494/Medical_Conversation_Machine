import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  displayedColumns: string[] = ['type', 'value'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any;

  ngOnInit(){}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ;
  }
}
export interface PeriodicElement {
  type:string;
  value:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {type:'Name',value:'Bhupender'} , 
  {type:'Years of Experience',value:'6 Years'},
  {type:'Technology',value:'Java,Microservice, Angular, Spring, Spring Boot, ELK, Python, Web Service'},
  {type:'Specialization',value:'Full Stack Development'},
  {type:'Area of Expertise',value:'Backend'},
  {type:'Current CTC',value:'Private Variable'},
  {type:'Expected CTC',value:'Minimal'},
  {type:'Notice Period ',value:'Currently Serving'},
  {type:'Availability',value:'Yes'},
  {type:'Require more Information?',value:"Please send email to sharmakbhupender@gmail.com"}
];
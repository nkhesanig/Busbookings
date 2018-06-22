import { Component, OnInit } from '@angular/core';
import {Route } from '@angular/router';
import {Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fullname;
  dateofbirth;
  age;
  from;
  to;
  date;
  time;
  phoneno;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

this.route.queryParams.subscribe(params =>{
      this.fullname=params["fullname"];
     
      this.dateofbirth=params["dateofbirth"];
      this.age=params["age"];
      this.date=params["date"];
      this.from=params["from"];
      this.to=params["to"];
      this.phoneno=params["phoneno"];})

      console.log(this.fullname);
    console.log(this.dateofbirth);
    console.log(this.age);
    console.log(this.date);
    console.log(this.from);
    console.log(this.to);
    console.log(this.time);
    console.log(this.phoneno);

  }



}

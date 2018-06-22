import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  
  fullnames;
  dateofbirth;
  age;
  from;
  to;
  date;
  time;
  phoneno;

  

  constructor(private route: ActivatedRoute,private approute: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{
      this.fullnames=params["fullnames"];
     
      this.dateofbirth=params["dateofbirth"];
      this.age=params["age"];
      this.date=params["date"];
      this.time=params["time"]
      this.from=params["from"];
      this.to=params["to"];
      this.phoneno=params["phoneno"];

      
      console.log(this.fullnames);
     
      console.log(this.dateofbirth);
      console.log(this.age);
      console.log(this.date);
      console.log(this.time);
      console.log(this.from);
      console.log(this.to);
      console.log(this.phoneno);
     

    })}

    booking(){
    
      this.approute.navigate(['/confirmed']),{queryparams: {fullnames: this.fullnames, dateofbirth:this. age,age:this.dateofbirth , from:this.from, to:this.to, date:this.date, time:this.time, phoneno:this.phoneno}}
    }
  
  }
  
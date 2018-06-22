import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullnames;
  dateofbirth;
  age;
  from;
  to;
  date;
  time;
  phoneno;

  constructor(private router: Router,) { }

  ngOnInit() {
  }
  

  booking(){
    console.log(this.fullnames);
    console.log(this.dateofbirth);
    console.log(this.age);
    console.log(this.date);
    console.log(this.from);
    console.log(this.to);
    console.log(this.time);
    console.log(this.phoneno);
    this.router.navigate(['booking']), {fullnames: this.fullnames, dateofbirth:this. age,age:this.dateofbirth , from:this.from, to:this.to, date:this.date, time:this.time, phoneno:this.phoneno}
  }

}

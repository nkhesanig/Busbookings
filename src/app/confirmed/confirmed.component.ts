import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {

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
 


      }
    )
}
}
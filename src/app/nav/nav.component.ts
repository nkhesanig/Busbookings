import { Component, OnInit, Input } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() name;
  @Input() page;

  @Input() fullnames;
  @Input() dateofbirth;
  @Input() age;
  @Input()from;
  @Input() to;
  @Input() phoneno;
  @Input() date;
  @Input() time;



  constructor(private router: Router) { }

  ngOnInit() {

  }
  navigator(){

    if (name === 'About'){
      this.router.navigate(['booking/contact']);
    
    } else if (this.name ==='contact'){

      this.router.navigate(['booking/contact'],{queryParams:{fullnames:this.fullnames, dateofbirth:this.dateofbirth, age:this.age, date:this.date, from:this.from,to:this.to, phoneno:this.phoneno, time:this.time}});

}
  }
}

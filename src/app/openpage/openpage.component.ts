import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-openpage',
  templateUrl: './openpage.component.html',
  styleUrls: ['./openpage.component.css']
})
export class OpenpageComponent implements OnInit {
  loading:boolean=true;
  constructor(private route:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false;
    }, 1500);
  }
  handleopenmainpage(){
    this.route.navigate(['/main']);

  }

}

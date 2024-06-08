import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  loading:boolean=true;

  constructor(private route:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false;
    }, 1000);
  }
  handleopenmainpage(){
    this.route.navigate(['/main']);

  }

}

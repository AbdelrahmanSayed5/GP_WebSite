import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loading:boolean=true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false;
    }, 1000);
  }

}

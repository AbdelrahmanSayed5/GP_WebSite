import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  loading:boolean=true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false;
    }, 1000);
  }

}

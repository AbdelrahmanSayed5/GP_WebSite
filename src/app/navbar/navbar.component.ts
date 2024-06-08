import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input() type:string="none";
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  handleopenlogin(){
    this.route.navigate(["login"])
  }
  handlelopensignup(){
    this.route.navigate(["signup"])
  }
  openfeatures(){
    this.route.navigate(["features"])
  }
  openmainpage(){
    this.route.navigate([""])
  }
  aboutpage(){
    this.route.navigate(["about"])
  }
  teampage(){
    this.route.navigate(["team"])
  }

}

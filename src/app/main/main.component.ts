import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'DERCODA';
  input_entered:string="";
  input_to_chat:{message:string,user:boolean}={message:"Welcome to DRACODA,your personal JavaScript assistant! Whether you need to generate code snippets or testing functions, I'm here to help you streamling your development process. Just tell me your requirements, and let's dive into the world of efficient coding together!",user:false}
  

  constructor() { }

  ngOnInit(): void {
  }
  input_user(userInput:string){
    
    if(userInput==="The file uploaded successfully how can I help you! FROMSYSTEM"){
      this.input_entered="The file uploaded successfully how can I help you!"
      this.input_to_chat={message:this.input_entered,user:false}
    }
    else{
      this.input_entered=userInput
      this.input_to_chat={message:this.input_entered,user:true}
    }

  };

}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SendPromptService } from 'src/shared_Services/send-prompt.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  Input_user:string="";
  File_input:any;
  File_uploaded:boolean=false;
  File_uploaded_input!:File;
  @ViewChild('inputfield') inputField!: ElementRef;

  constructor(protected ourservic:SendPromptService ) { }

  ngOnInit(): void {
  }
  onEnterKeyPress(event: any) {
      event.preventDefault();
      this.upload_user_input();
  }
  upload_user_input(){
    if(this.Input_user!==''){
      this.ourservic.chats[this.ourservic.currentchat].push({message:this.Input_user,user:true})
      this.ourservic.chats=[...this.ourservic.chats];
      if(this.Input_user==="Please help me construct a JS function that adds 2 numbers together."){
        this.ourservic.loading_response = true;
        setTimeout(() => {
          this.ourservic.loading_response = false;
          this.ourservic.chats[this.ourservic.currentchat].push({message:`function add(num1, num2) {
    return num1 + num2;
}
const result = add(5, 3);
console.log(result);`,user:false})
        }, 5000);
      }
      if(this.Input_user==="Hey Dracoda, generate a method named Sub which does the following: subtracts 2 elements from each other, the input names should be x and y."){
        this.ourservic.loading_response = true;
        setTimeout(() => {
          this.ourservic.loading_response = false;
          this.ourservic.chats[this.ourservic.currentchat].push({message:`function Sub(x, y) {
    result = x-y;
    return result;
}
const result = Sub(10, 4);
console.log(result);`,user:false})
        }
        , 5000);
      }
      if(this.Input_user==="I want to implement a JavaScript function that takes an array as input, loops through each element, doubles it, then returns the resulting array."){
        this.ourservic.loading_response = true;
        setTimeout(() => {
          this.ourservic.loading_response = false;
          this.ourservic.chats[this.ourservic.currentchat].push({message:`function doubleArrayElements(arr) {
    const doubledArray = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArray.push(arr[i] * 2);
    }
    return doubledArray;
};`,user:false})
        }
        , 5000);
      }

      if(this.Input_user==="Provide a test script called multiplication test for my function, mult. Use jest testing framework."){
        this.ourservic.loading_response = true;
        setTimeout(() => {
          this.ourservic.loading_response = false;
          this.ourservic.chats[this.ourservic.currentchat].push({message:`const mult = require('./mult');

describe('multiplication test', () => {
    test('multiply test 1', () => {
        expect(mult(2, 3)).toBe(6);
    });

    test('multiply test 2', () => {
        expect(mult(-1, 5)).toBe(-5);
    });
});`,user:false})
        }
        , 5000);
      }
      if(this.Input_user==="Please write a unit test script for me that ensures that the provided function is working correctly. Use the mock data 7 and 8, ensure that the output is equal to -1."){
        this.ourservic.loading_response = true;
        setTimeout(() => {
          this.ourservic.loading_response = false;
          this.ourservic.chats[this.ourservic.currentchat].push({message:`const subtract = require('./subtract');

describe('subtraction test', () => {
    test('testing case 1', () => {
        expect(subtract(7, 8)).toBe(-1);
    });
});`,user:false})
        }
        , 5000);
      }
      // send the request to the backend
      // this.ourservic.sendprompt(formData).subscribe((response)=>{
      //   this.ourservic.chats[this.ourservic.currentchat].push({message:response.message,user:false})
      //   this.ourservic.chats=[...this.ourservic.chats];
      //   this.ourservic.loading_response=false;
      // },
      // (error)=>{
      //   this.ourservic.chats[this.ourservic.currentchat].push({message:`function addtwonumbers(a,b){
      //     return a+b;
      //   }`,user:false})
      //   this.ourservic.loading_response=false;  
      // })
      // reset the input field
      this.Input_user=""
      this.File_uploaded=false;
      const textarea = this.inputField.nativeElement;
      textarea.style.height = '50px'; // Reset the height
    }
  }
  handleselectfile(event:any){
    this.File_input=event.target.files[0];
    this.File_uploaded=true;
  }
  adjustHeight() {
    const textarea = this.inputField.nativeElement;
    textarea.style.height = '50px'; // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the new height
  }
}

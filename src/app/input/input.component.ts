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
    if(this.Input_user!=='' && this.File_uploaded){
      this.ourservic.chats[this.ourservic.currentchat].push({message:this.Input_user,user:true})
      const formData = new FormData();
      formData.append('prompt',this.Input_user);
      formData.append('file',this.File_input);
      this.ourservic.loading_response=true;
      // send the request to the backend
      this.ourservic.sendprompt(formData).subscribe((response)=>{
        this.ourservic.chats[this.ourservic.currentchat].push({message:response.message,user:false})
        this.ourservic.chats=[...this.ourservic.chats];
        this.ourservic.loading_response=false;
      },
      (error)=>{
        this.ourservic.chats[this.ourservic.currentchat].push({message:"Server is Down now try again later",user:false})
        this.ourservic.loading_response=false;  
      })
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

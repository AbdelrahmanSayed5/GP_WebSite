import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  Input_user:string="";
  File_input:any;
  File_uploaded:boolean=false;
  @Output() Input_user_out=new EventEmitter<string>();
  @ViewChild('inputfield') inputField!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onEnterKeyPress(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log("Enter key pressed");
      console.log(this.Input_user);
      this.emitInputUser();
      this.Input_user=""
      this.File_uploaded=false;
      const textarea = this.inputField.nativeElement;
      textarea.style.height = '50px'; // Reset the height
    }
  }
  emitInputUser() {
    this.Input_user_out.emit(this.Input_user);
  }
  upload_user_input(){
    if(this.Input_user!==''){
      this.emitInputUser();
      this.Input_user=""
      this.File_uploaded=false;
    }
  }
  handleselectfile(event:any){
    this.File_input=event.target.files[0];
    this.File_uploaded=true;
    // this.Input_user_out.emit("The file uploaded successfully how can I help you! FROMSYSTEM")
  }
  adjustHeight() {
    const textarea = this.inputField.nativeElement;
    textarea.style.height = '50px'; // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the new height
  }
}

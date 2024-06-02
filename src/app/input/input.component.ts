import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  
  onEnterKeyPress(event: any) {
    if (event.key === 'Enter') {
      this.emitInputUser();
      this.Input_user=""
    }
  }

  emitInputUser() {
    this.Input_user_out.emit(this.Input_user);
  }
  upload_user_input(){
    if(this.Input_user!==''){
      this.emitInputUser();
      this.Input_user=""
    }
  }
  handleselectfile(event:any){
    this.File_input=event.target.files[0];
    this.File_uploaded=true;
    // this.Input_user_out.emit("The file uploaded successfully how can I help you! FROMSYSTEM")
  }
}

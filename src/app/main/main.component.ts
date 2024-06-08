import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SendPromptService } from 'src/shared_Services/send-prompt.service';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'DERCODA';
  input_entered:string="";
  loading_response:boolean=false;
  statusmodal:boolean=true;
  showText: boolean = false;
  loading:boolean=true;

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  // @ViewChild('chatComponent', { static: true }) chatComponent!: ChatComponent;
  constructor(protected ourservic:SendPromptService) {
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false;
    }, 3000);
  }
  handleScroll(event: any): void {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default action of the enter key
      this.scrollToBottom();
    }
  }
  private scrollToBottom(): void {
    console.log(this.scrollContainer.nativeElement.last)
    const scrollEl = this.scrollContainer.nativeElement;
    if (scrollEl.scrollHeight > scrollEl.clientHeight) {
      // Only scrolls if the content is larger than the container
      scrollEl.scrollTop = scrollEl.scrollHeight;
    }
  }
  handlestatusmodal(){
    this.statusmodal=!this.statusmodal;
  }
  handlecreatenewchat(){
    this.ourservic.chats.push([]);
    this.ourservic.currentchat=this.ourservic.chats.length-1;
    this.ourservic.chats[this.ourservic.currentchat]=[{message:"Welcome to DRACODA,your personal JavaScript assistant! Whether you need to generate code snippets or testing functions, I'm here to help you streamling your development process. Just tell me your requirements, and let's dive into the world of efficient coding together!",user:false}]
  }
  openchosedchat(i:number)
  {
    this.ourservic.currentchat=i;

  }
}

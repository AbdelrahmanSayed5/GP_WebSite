import { Component, OnInit,Input, OnChanges,ViewChildren,QueryList,ElementRef ,AfterViewInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnChanges,AfterViewInit  {
  @Input() instanceofchat:{message:string,user:boolean}={message:"",user:false}
  @ViewChildren('systemResponses') systemResponseElements!: QueryList<ElementRef>;
  @ViewChild('chatContainer') chatContainerRef!: ElementRef;
  chats:{message:string,user:boolean}[]=[]
  isTypewriterApplied:boolean=false;
  constructor() { 
  }

  ngOnInit(): void {
    this.isTypewriterApplied=false
  }
  ngOnChanges():void{
    if(this.instanceofchat.message!=""){
      this.chats.push(this.instanceofchat);
      if(this.instanceofchat.user==true){
        this.chats.push({message:"this is my response",user:false});
        this.isTypewriterApplied = false;
        this.applyTypewriterEffect();
      }
     
      this.scrollToBottom();
    }
    if (this.instanceofchat.message!="" && !this.instanceofchat.user){
      this.scrollToBottom();
      this.isTypewriterApplied = false;
      this.applyTypewriterEffect();
    }
  }
  ngAfterViewInit() {
    this.triggerTypewriterEffect(this.systemResponseElements.last.nativeElement);
    this.isTypewriterApplied = true;
  }
  applyTypewriterEffect() {
      this.systemResponseElements.changes.subscribe(() => {
        if ((!this.isTypewriterApplied && this.systemResponseElements.length >= 0)) {
          const lastSystemResponse = this.systemResponseElements.last.nativeElement;
          this.triggerTypewriterEffect(lastSystemResponse);
          this.isTypewriterApplied = true;
        }
      });
  }

  triggerTypewriterEffect(systemResponse: HTMLElement) {
    const text = systemResponse.innerHTML;
    systemResponse.innerHTML = '';
    let i = 0;
    const speed = 15; // Adjust speed as needed
    const typeWriter = () => {
      if (i < text.length) {
        systemResponse.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter();
  }
  scrollToBottom() {
    console.log("i am hereeeeeeeeeeeeeeee")
    setTimeout(() => {
      const chatContainer = this.chatContainerRef.nativeElement;
      console.log(chatContainer);
      if (chatContainer) {
        console.log(chatContainer.height);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    },100);
  }
}

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
  chats:{message:string,user:boolean,isLoading?:boolean}[]=[]
  isTypewriterApplied:boolean=false;
  loading:boolean=false;
  constructor() { 
  }

  ngOnInit(): void {
    this.isTypewriterApplied=false
  }


  
  ngOnChanges():void{
    if (this.instanceofchat.message != "") {
      this.chats.push({...this.instanceofchat}); // Add user chat
      if (this.instanceofchat.user) {
        // Simulate loading for system response
        let newIndex = this.chats.length; // Position where system response will appear
        this.chats.push({ message: "Loading...", user: false, isLoading: true }); // Placeholder for loading
        setTimeout(() => {
          if(this.instanceofchat.message===`Please design a function calculateTotal to compute the total of two given numbers, x and y.`){
            this.chats[newIndex] = { message: `function calculateTotal(x, y) \n{\n   return x + y;\n}`, user: false, isLoading: false };
          }
          else if(this.instanceofchat.message===`Write tests to verify the accuracy of the function 'multiplyMatrices' for multiplying two matrices.`)
            {
              this.chats[newIndex] = { message: `const assert = require('assert');\nconst { multiplyMatrices } = require('./your-module-name');\ntest('test',()=>{\n  let result = multiplyMatrices([[1, 2], [3, 4]], [[1, 2, 3], [4, 5, 6]]);\n  assert.deepStrictEqual(result, [[9, 12, 15], [19, 26, 33]], 'Matrix multiplication failed');\n});`, user: false, isLoading: false };
            }
          else{
            this.chats[newIndex] = { message: "Sorry, I don't understand your requirment. Please try again", user: false, isLoading: false };
          }
          // Update with actual message
          this.isTypewriterApplied = false;
          this.applyTypewriterEffect();
        }, 3000);
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

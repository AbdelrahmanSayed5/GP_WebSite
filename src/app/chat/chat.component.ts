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
          if(this.instanceofchat.message===`Write a function that takes a string as input and returns the number of unique words in the string. The function should ignore punctuation and be case-insensitive. For example, the input string "Hello, hello! How are you?" should return 4 (unique words: "hello", "how", "are", "you").`){
            this.chats[newIndex] = { message: `import string 

            def count_unique_words(input_string):
                # Remove punctuation
                translator = str.maketrans('', '', string.punctuation)
                cleaned_string = input_string.translate(translator)
                
                # Convert to lower case and split into words
                words = cleaned_string.lower().split()
                
                # Use a set to store unique words
                unique_words = set(words)
                
                # Return the number of unique words
                return len(unique_words)
            
            # Example usage
            input_string = "Hello, hello! How are you?"
            print(count_unique_words(input_string))`, user: false, isLoading: false };
          }
          else{
            this.chats[newIndex] = { message: "this is my response", user: false, isLoading: false };
          }
          // Update with actual message
          this.isTypewriterApplied = false;
          this.applyTypewriterEffect();
        }, 1000);
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

import { Component, OnInit,Input, OnChanges,ViewChildren,QueryList,ElementRef ,AfterViewInit ,ViewChild} from '@angular/core';
import { SendPromptService } from 'src/shared_Services/send-prompt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit  {
  @ViewChildren('systemResponse') systemResponses!: QueryList<ElementRef>;

  constructor(public services: SendPromptService) {}

  ngAfterViewInit() {
    this.applyTypewriterEffectToLastMessage(); // Apply effect on initial messages

    this.systemResponses.changes.subscribe(() => {
      this.applyTypewriterEffectToLastMessage(); // Apply effect on each change
    });
  }
  applyTypewriterEffectToLastMessage() {
    const elements = this.systemResponses.toArray();
    if (elements.length > 0) {
      const lastElement = elements[elements.length - 1].nativeElement;
      this.triggerTypewriterEffect(lastElement);
    }
  }
  triggerTypewriterEffect(systemResponse: HTMLElement) {
    const text = systemResponse.innerText;
    systemResponse.innerHTML = ''; // Clear the current text
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
  handlecopycode(index:number){
    console.log(`${this.services.chats[this.services.currentchat][index].message}`)
    navigator.clipboard.writeText(this.services.chats[this.services.currentchat][index].message).then(() => {
      console.log('Index copied to clipboard');
    }).catch((error) => {
      console.error('Error copying index to clipboard: ', error);
    });
  }
}

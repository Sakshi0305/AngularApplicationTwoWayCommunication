import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div>
    <h2>Child Component</h2>
    <button (click)="sendMessageToParent()">Send Message to Parent</button>
    <p>{{ messageFromParent }}</p>
  </div>
`,

  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() messageFromChildEvent = new EventEmitter<string>();
  messageFromParent: string = '';

  sendMessageToParent() {
    const message = 'Hello from Child';
    console.log('Message from Parent:', message);
    this.messageFromChildEvent.emit(message);
    this.messageFromParent = message;
  }
}

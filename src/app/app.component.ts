import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      <h1>App Component</h1>
      <p>{{ messageFromChild }}</p>
      <app-child (messageFromChildEvent)="handleMessageFromChild($event)"></app-child>
    </div>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A8-Question2';
  messageFromChild: string = '';

  handleMessageFromChild(message: string) {
    console.log('Message from Child:', message);
    this.messageFromChild = message;
  }
}

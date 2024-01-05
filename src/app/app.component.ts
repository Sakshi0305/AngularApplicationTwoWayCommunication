import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A8-Question4';
  public ilen :any;
 
  public sLength(no:any):any
  {
    this.ilen = no;
    return this.ilen;

  }

}

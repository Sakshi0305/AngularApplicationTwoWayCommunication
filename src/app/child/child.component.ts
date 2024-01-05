import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public Name :string = "";
  @Output() public LaserLight = new EventEmitter();

  public Send()
  {
    this.LaserLight.emit(this.Name);
  }

}

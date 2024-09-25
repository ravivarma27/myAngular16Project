import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {


@Input() public pPostman: any


@Output() public cData = new EventEmitter()

onClick(){
  this.cData.emit("This is child Data")
}
 
}

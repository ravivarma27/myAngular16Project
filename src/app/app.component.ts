import { Component } from '@angular/core';
import { increment } from './Store/counterActons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ravivarmaProject';

  name: any;

  private myNumber: number = 25;
  isVisible: boolean = true;
  get counter(){
    return this.myNumber;
  }
  set counter(value){
    this.myNumber = value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

  switchVisibility(){
    this.isVisible = !this.isVisible;
  }

}

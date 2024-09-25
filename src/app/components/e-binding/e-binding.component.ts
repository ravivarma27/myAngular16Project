import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.scss']
})
export class EBindingComponent {

  onClick(){
  console.log("you clicked this button")
}

onDblClick(){
  console.log("you double clicked this button")
}

onOver(){
  console.log("on Mouse Over")
}


}

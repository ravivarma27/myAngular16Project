import { Component } from '@angular/core';

@Component({
  selector: 'app-c-binding',
  templateUrl: './c-binding.component.html',
  styleUrls: ['./c-binding.component.scss']
})
export class CBindingComponent {

public myText = "textSize"

public myClassGroup = {
  "textColor": true,
  "textSize": true
}

public isRequired: boolean = true

}

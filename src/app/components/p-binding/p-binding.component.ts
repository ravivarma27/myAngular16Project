import { Component } from '@angular/core';

@Component({
  selector: 'app-p-binding',
  templateUrl: './p-binding.component.html',
  styleUrls: ['./p-binding.component.scss']
})
export class PBindingComponent {
  public name: string = "ravi varma"

  public isDisabled : boolean = false

}

import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-s-binding',
  templateUrl: './s-binding.component.html',
  styleUrls: ['./s-binding.component.scss']
})
export class SBindingComponent {

  public myColor = "blue"

  public isRequired: boolean = true

  public myStyleGroup = {
    color: 'orange',
    fontSize: '40px',
    fontWeight: 'bold'
  }

}

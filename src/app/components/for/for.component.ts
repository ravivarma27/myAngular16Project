import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent {

public names = ['ravi', 'varma', 'danduprolu', 'anand']

public emp = {
  id: 123,
  name: 'ravi',
  age: 35
}

}

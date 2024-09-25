import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent {
  public name: string = 'Ravi varma';

  public getMyName() {
    return this.name;
  }

  emp = {
    name: 'Ravi varma Danduprolu',
    lname: null,
    age: 35,
  };

  empArray = [
    {
      name: 'Ravi Danduprolu',
      age: 35,
    },
    {
      name: 'Ravi varma Danduprolu',
      age: 30,
    },
  ];
}

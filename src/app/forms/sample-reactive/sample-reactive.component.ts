import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample-reactive',
  templateUrl: './sample-reactive.component.html',
  styleUrls: ['./sample-reactive.component.scss']
})
export class SampleReactiveComponent {

  constructor(private _FB: FormBuilder){}

  name = new FormControl('');

  updataName(){
    this.name.setValue('ravi')
  }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // })
  
  profileForm = this._FB.group({
    firstName: [''],
    lastName: ['']
  })

  onSubmit(){
    // console.log(this.profileForm.value)
    console.warn(this.profileForm.value)
  }

}

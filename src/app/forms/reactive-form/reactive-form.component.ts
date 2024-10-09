import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormRegisterService } from 'src/app/services/form-register.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  // registrationForm = new FormGroup({
  //   userName : new FormControl('ravi'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     state : new FormControl(''),
  //     city : new FormControl(''),
  //     pincode : new FormControl('')
  //   })
  // });

  constructor(private _myFB: FormBuilder, private _regService: FormRegisterService){}

  registrationForm = this._myFB.group({
    userName: ['varam', Validators.required],
    password: [''],
    confirmPassword: [''],
    address: this._myFB.group({
      state: [''],
      city: [''],
      pincode: ['']
    })
  })

  displayValues(){
    // this.registrationForm.setValue({
      this.registrationForm.patchValue({
      userName: 'testUser',
      password: 'testpassword',
      confirmPassword: 'confirmpassword',
      address: {
        state: 'testState',
        city: 'testCity',
        pincode: 'testcode'
      }
    })
  }

  // onSubmit(registrationForm){
  //   console.log(registrationForm.value);
  //   this._regService.enroll(this.registrationForm.value)
  //   .subscribe(
  //     data => console.log('Success:', data)
  //   )
  // }
 

}

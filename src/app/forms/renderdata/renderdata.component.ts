import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-renderdata',
  templateUrl: './renderdata.component.html',
  styleUrls: ['./renderdata.component.scss']
})
export class RenderdataComponent {


  constructor(private _FB: FormBuilder){}

  jsonData = {
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
      { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
      { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
      { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
      { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
      { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
      { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
    ],
    "support": {
      "url": "https://reqres.in/#support-heading",
      "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  };


  // registrationForm = this._myFB.group({
  //   userName: ['varam', Validators.required],
  //   password: [''],
  //   confirmPassword: [''],
  //   address: this._myFB.group({
  //     state: [''],
  //     city: [''],
  //     pincode: ['']
  //   })
  // })


  // renderFormData = this._FB.group({
  //   id: [user.id],
  //   email: [user.email],
  //   first_name: [user.first_name],
  //   last_name: [user.last_name],
  //   avatar: [user.avatar]
  // })

  userForm!: FormGroup;

  // ngOnInit(){
    // this.userForm = this._FB.group({
      // data: this._FB.array(this.jsonData.data.map(user => 
        // this.createUserGroup(user)
      // ))
    // })
  // }

  // createUserGroup(user): FormGroup {
  //   return this._FB.group({
  //     id: [user.id],
  //     email: [user.email],
  //     first_name: [user.first_name],
  //     last_name: [user.last_name],
  //     avatar: [user.avatar]
  //   })
  // }

  get users(){
    return this.userForm.get('data') as FormArray;
  }

}

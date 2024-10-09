import { Component } from '@angular/core';
import { FormRegisterService } from 'src/app/services/form-register.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {

  constructor(private _regService: FormRegisterService){}


  course = ['Angular', 'React', 'Vue', 'Bootstrap', 'MongoDB']

  userModel = new User('','ravi@gmail.com',89089780,'male','',true);

  onSubmit(){
    // console.log(this.userModel);
    this._regService.enroll(this.userModel).subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    );
  }


}

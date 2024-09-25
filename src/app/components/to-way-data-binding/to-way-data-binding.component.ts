import { Component } from '@angular/core';

@Component({
  selector: 'app-to-way-data-binding',
  templateUrl: './to-way-data-binding.component.html',
  styleUrls: ['./to-way-data-binding.component.scss']
})
export class ToWayDataBindingComponent {

  public myName : string = ''
  public myCourse : string = ''
  public myFee : number = 0
  public myText: string = ""

  OnClick(name: any){
    console.log("welcome:" , name)
    this.myName= name
  }

  OnClick1(course: any){
    console.log("welcome:" , course)
    this.myCourse= course
  }

  OnClick2(fee: any){
    console.log("welcome:" , fee)
    this.myFee= fee
  }

}

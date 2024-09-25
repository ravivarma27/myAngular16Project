import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss']
})
export class SelectedItemComponent {

  public courseId: any;
  currentID: any;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router){
    // this.courseId = this._activatedRoute.snapshot.paramMap.get('id')
    this._activatedRoute.paramMap.subscribe((p: ParamMap) => {
      return this.courseId = p.get('id');
    })

  }

  goPrevious(){
    let currentID = this.courseId - 1
    // this.courseId = this.courseId - 1
    this._router.navigate(['/selectedItem', currentID])
  }

  goNext(){
    let currentID = this.courseId  + 1
    // this.courseId = this.courseId + 1
    this._router.navigate(['/selectedItem', currentID])
  }

  goBack(){
    this._router.navigate(['/courseDetails', {id: this.courseId}])
  }

}

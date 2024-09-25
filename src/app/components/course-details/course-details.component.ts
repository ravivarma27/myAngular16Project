import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {

  public course: any[] = [];
  public errMsg = ''
  constructor(private _courseService: CourseService, private _router: Router, private _activatedroute: ActivatedRoute) { 
    // this.course = _courseService.getCourseInfo()
    this._courseService.getCourseInfo()
    .subscribe(res => this.course = res,
      err => this.errMsg = err
    )
  }

  onSelect(x: any){
    this._router.navigate(['/selectedItem', x.id])
  }

  public returningID: any
  isSelected(x: any){
    this._activatedroute.paramMap.subscribe((p: ParamMap) => {
      this.returningID = p.get('id')
    })
    return x.id === this.returningID
  }

}

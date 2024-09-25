import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.scss']
})
export class CourseNameComponent {
  static getCourseInfo(): never[] {
    throw new Error('Method not implemented.');
  }
  public course: any[] = [];

  public errMsg = ''
  constructor(private _courseService : CourseService){
    // this.course = _courseService.getCourseInfo()
    this._courseService.getCourseInfo()
    .subscribe(res => this.course = res,
      err => this.errMsg = err
    )
  }

}

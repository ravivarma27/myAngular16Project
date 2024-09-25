import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _http: HttpClient) { }
  private _url = '../../assets/Data/courseData.json'
  getCourseInfo(): Observable<any> {
    return this._http.get<any>(this._url)
    .pipe(catchError(this.incomingError))
  }

  incomingError(err: HttpErrorResponse){
    return throwError(err.message)
  }
}

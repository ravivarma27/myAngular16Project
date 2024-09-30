import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeAPIService {

    private _apiUrl = "https://reqres.in/api/users?page=1"
    constructor(private _http: HttpClient){}
    getConsumeData(): Observable<any>{
      return this._http.get(this._apiUrl)
    }
 
}

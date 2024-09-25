import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowApiDataService {

  private _apiUrl = 'https://reqres.in/api/users?page=1';
  constructor(private _http: HttpClient) { }
  getUsersData(): Observable<any>{
    return this._http.get(this._apiUrl)
  }

}

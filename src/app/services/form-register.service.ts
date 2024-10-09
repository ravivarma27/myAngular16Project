import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

  _Url = '';
  constructor(private _http: HttpClient) { }
  enroll(user: User){
    return this._http.post<any>(this._Url, user)
  }
}

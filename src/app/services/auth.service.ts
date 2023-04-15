import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  httpClient: HttpClient) { }








register(formData:object ):Observable<any>{
 return  this.httpClient.post(`https://route-egypt-api.herokuapp.com/signup`,formData)
}



login(formData:object ):Observable<any>{
  return  this.httpClient.post(`https://route-egypt-api.herokuapp.com/login`,formData)
 }




}

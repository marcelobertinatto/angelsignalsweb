import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:60464/';
  private baseURLProd = 'https://angel-signals-web.herokuapp.com/';

constructor(private httpClient: HttpClient) { }

get headers(): HttpHeaders {
  return new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8;' 
    ,'Accept':'*/*'
  });
}

public registerUser(u: User) {
  return this.httpClient.post(this.baseURLProd + 'api/user/registeruser', JSON.stringify(u), {headers: this.headers});
}

public sendTelegramMessage(user: User){
  return this.httpClient.post(this.baseURLProd + 'api/user/telegrammessagetouser', JSON.stringify(user), {headers: this.headers});
}

}

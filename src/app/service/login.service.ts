import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

/*const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};*/
const base_url ='https://173.212.235.56:';
const port = 3001;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   //httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json', Authorization: 'my-auth-token'})};

  constructor(private httpClient: HttpClient) {
  }

  login(login: any): Observable<any>{
   
    return this.httpClient.post<any>(base_url+port+'/login', login );
  }
}

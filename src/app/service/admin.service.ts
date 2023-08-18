import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { UserModel } from '../components/model/user.mode';
const base_url ='https://173.212.235.56:';
const port = 3001;
@Injectable({
  providedIn: 'root'
})
export class AdminService {
   httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json', Authorization: localStorage.getItem('accessToken') + ""})};


  constructor(private httpClient: HttpClient) {
  }

  getListeAdministrateur(): Observable<any> {
    return this.httpClient.get<any>( base_url+port+'/listeAdministrateur');
  }

  statUser(): Observable<any> {
    return this.httpClient.get<any>( base_url+port+'/api/statUser');
  }

  getListeUsers(): Observable<any> {
    return this.httpClient.get<any>( base_url+port+'/listeUsers');
  }

  getUsersById(idUser: string): Observable<any> {
    return this.httpClient.get<any>( base_url+port+'/getUSerByid/' + idUser);
  }

  saveAdmin(user: UserModel): Observable<any> {
    user.id_pointCadeaux = 4;
    return this.httpClient.post<any>( base_url+port+'/api/signup_admin', user);
  }

  updateUser(user: UserModel): Observable<any> {
    user.id_pointCadeaux = 4;
    return this.httpClient.post<any>( base_url+port+'/api/update', user);
  }
  
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { GroupeModel } from '../components/model/groupe.model';
import {GroupUserModel} from "../components/model/group.user.model";



@Injectable({
  providedIn: 'root'
})
export class GroupeService {
 
  httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json', Authorization: localStorage.getItem('accessToken') + ""})};

  constructor(private httpClient: HttpClient) {
  }

  statGroup(): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8081/api/statGroup');
  }

  getListeGroupe(): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8081/api/listGroupes');
  }

  acceptUserGroup(id_group_user: string): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8081/api/acceptUserGroup/' + id_group_user);
  }

  saveGroupe(groupe: GroupeModel): Observable<any> {
    return this.httpClient.post<any>( 'http://localhost:8081/api/addGroupe', groupe);
  }

  delete(id_groupe: string): Observable<any> {
    return this.httpClient.delete("http://localhost:8081/api/deleteGroupe/"+ id_groupe);
  }
  
  update(groupe: GroupeModel): Observable<any> {  
    return this.httpClient.put('http://localhost:8081/api/updateGroupe', groupe);  
  }

  rejoindreGroupe(groupUser: GroupUserModel): Observable<any> {
    return this.httpClient.post('http://localhost:8081/api/rejoindre', groupUser);
  }

  listGroupeUser(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8081/api/listGroupUser');
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MaisonModel} from "../components/model/maison.model";
const base_url ='https://173.212.235.56:';
const port = 3001;
@Injectable({
  providedIn: 'root'
})
export class MaisonJeunesService {
  //httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json', Authorization: localStorage.getItem('accessToken') + ""})};
 
  constructor(private httpClient: HttpClient) {
  }

  getMaisonJeunesByIdUser(id: string): Observable<any> {
    return this.httpClient.get<any>( base_url+port+'/getMaisonJeunesByIdUser/'+id);
  }

  statMaison(): Observable<any> {
    return this.httpClient.get<any>( base_url+port+'/api/statMaison');
  }

  getListMaisons(): Observable<any> {
    return this.httpClient.get<any>( base_url+port+'/listMaisonJeunes');
  }

  addMaisons(maison: MaisonModel): Observable<any> {
    return this.httpClient.post( base_url+port+'/addMaisonJeunes', maison);
  }
}

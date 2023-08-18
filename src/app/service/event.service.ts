import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import { EventModel } from '../components/model/event.model';
const base_url ='https://173.212.235.56:';
const port = 3001;
@Injectable({
  providedIn: 'root'
})

export class EventService {
  httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json', Authorization: localStorage.getItem('accessToken') + ""})};

  constructor(private httpClient: HttpClient) {
  }

addEvent (event: EventModel): Observable<any>{
//    const formData : FormData = new FormData ( ) ;
//    formData.append ('file', file ) ;
//    formData.append ('titre', titre ) ;
//    formData.append ('description', description ) ;
//    formData.append ('id_maisonjeunes', id_maisonjeunes) ;
//    //return this.httpClient.post<any>( 'http://localhost:8081/api/addGroupe', formData);
//    const req = new HttpRequest ( 'POST' ,'http://localhost:8081/api/uploadEvent', formData ,
// {
//    reportProgress: true,
//     responseType: 'json',
// });
  return this.httpClient.post('http://localhost:8081/event/addEvent', event);

}

getListEvents (): Observable<any>{
    return this.httpClient.get<any>(base_url+port+'event/list');
  }

  statEvent(): Observable<any>{
    return this.httpClient.get<any>('http://localhost:8081/event/statEvent');
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarteModel} from "../components/model/carte.model.";

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json', Authorization: 'my-auth-token'})};


  constructor(private httpClient: HttpClient) { }

  demandeCarte(carte: CarteModel): Observable<any> {
    return this.httpClient.post( 'http://localhost:8081/api/addCarte', carte);
  }

  getCarteByIdUser(idUser: string): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8081/api/getCarteByIdUser/' + idUser);
  }

  getListeCart(idUser: string): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8081/api/listeCartes');
  }


  getListCartes(): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8081/api/listeCartes');
  }

  acceptCarte(idCarte: string): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8081/api/acceptCarte/' + idCarte);
  }

}

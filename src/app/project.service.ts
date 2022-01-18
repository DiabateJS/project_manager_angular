import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Projet} from "./model/projet";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  urlBase = '';
  constructor(private httpClient: HttpClient) {
    this.urlBase = environment.urlBack;
  }

  getProjets(): Observable<Projet[]>{
    const url = this.urlBase + 'method=get&type=projets';
    return this.httpClient.get<Projet[]>(url);
  }

  getProjet(idProjet: number): Observable<Projet> {
    const url = this.urlBase + 'method=get&type=projet&idProjet=' + idProjet;
    return this.httpClient.get<Projet>(url);
  }
}

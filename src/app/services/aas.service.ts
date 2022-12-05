import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AasService {

  constructor(private httpClient: HttpClient) { }

  selectedAas: string = "";
  private _selectedAasSource = new BehaviorSubject<string>("");
  selectedAas$ = this._selectedAasSource.asObservable();
  baseUrl = 'http://162.55.178.76:6100/';

  public getAas(): Observable<any> {
    console.log("Api call getAas");
    return this.httpClient.get(this.baseUrl + 'server/listaas');
  }

  public getSubmodels(aasName: string): Observable<any> {
    console.log("Api call getSubmodels");
    var url = this.baseUrl  + "aas/" + aasName.trim() ;
    return this.httpClient.get(url);
  }

  public getSubmodelDetails(aasName: string, submodelName: string): Observable<any> {
    console.log("Api call getSubmodelDetails");
    var url = this.baseUrl + "aas/" + aasName.trim() + "/submodels/" + submodelName.trim() + "/table";
    console.log(url);
    return this.httpClient.get(url);
  }

  public setAas(aas: string) {
    this.selectedAas = aas;
    this._selectedAasSource.next(aas);
  }

  public getSelectedAas(): string {
    return this.selectedAas;
  }

}


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


  public getAas(): Observable<any> {
    console.log("Api call getAas");
    return this.httpClient.get('http://localhost:5095/server/listaas');
  }

  public getSubmodels(aasName: string): Observable<any> {
    console.log("Api call getAas");
    console.log("TesT"+aasName.trim()+"Test")
    var url = "http://localhost:5095/aas/" + aasName.trim() ;
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


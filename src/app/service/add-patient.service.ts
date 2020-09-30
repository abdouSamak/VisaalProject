import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{patients} from '../model/patients'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddPatientService {

  constructor(private _http: HttpClient) { }

  public ajouterPatient(patient: patients):Observable<any>{
    return this._http.post<any>("http://localhost:8080/ajouterpatient",patient);
   }
}

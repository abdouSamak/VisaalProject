import { Injectable } from '@angular/core';
import{Soignant} from 'src/app/model/soignant';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {

  constructor(private _http: HttpClient) { }

  public loginSoignant(soignant: Soignant):Observable<any>{
   return this._http.post<any>("http://localhost:8080/login",soignant);
  }
  
}




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{patients} from 'src/app/model/patients';


@Injectable({
  providedIn: 'root'
})
export class HttpClientPatientsService {

  constructor( private httpClient:HttpClient) { }

  getPatients()
  {
    console.log("test call");
    return this.httpClient.get<patients[]>('http://localhost:8080/patients');
  }
}

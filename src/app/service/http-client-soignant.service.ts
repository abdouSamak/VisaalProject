import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// export class Soignant{
//   constructor(
//     public email:string,
//     public motDePasse:string,
    
//   ) {}
//   }
@Injectable({
  providedIn: 'root'
})
export class HttpClientSoignantService {
//private httpClient:HttpClient
  constructor() { }

  // getAccueil()
  // {
  //   let email:string;
  //    let motDePasse:string;
  
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email+ ':' + motDePasse) });
  //   return this.httpClient.get<Soignant[]>('http://localhost:8080',{headers});
  // }
}

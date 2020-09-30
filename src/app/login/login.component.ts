import { Component, OnInit } from '@angular/core';
import{NgForm } from '@angular/forms'
import { AuthentificationServiceService } from '../service/authentification-service.service';
import { Soignant } from '../model/soignant';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
//import { AuthentificationServiceService } from '../service/authentification-service.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  soignant = new Soignant;
  constructor(private service: AuthentificationServiceService, private router: Router){}
  ngOnInit() {
  }


  loginUser(){
   this.service.loginSoignant(this.soignant).subscribe(
     data =>{
       console.log("connecter");
      this.router.navigate(['list-patients'])},
      error => {console.log("erreur")}


   );
  }


}

 // @ts-ignore
 import { Component, OnInit } from '@angular/core';
import { patients } from '../model/patients';
import { AddPatientService } from '../service/add-patient.service';
// @ts-ignore
 import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  [x: string]: any;
  patient = new patients;
  constructor(private service:AddPatientService,private router: Router) { }

  ngOnInit(): void {
  }
  onBack() {
    this.router.navigate(['/ajouterpatient']);
  }

  addPatient(){
    this.service.ajouterPatient(this.patient).subscribe(
      data =>{
        console.log("Ajouter");
       this.router.navigate(['\Accueil'])},
       error => {console.log("ERROR");}


    );
   }

  }


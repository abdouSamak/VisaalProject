import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table/table-data-source';
import {HttpClientPatientsService} from '../service/http-client-patients.service';
@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {
   
  patients:string[];

  headElements = ['Identifiant', 'Nom', 'Prenom']
  constructor(private HttpClientPatientsService: HttpClientPatientsService) { }

  ngOnInit(): void {
    this.HttpClientPatientsService.getPatients().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response)
  {
      this.patients=response;
  }
}

import { BrowserModule } from '@angular/platform-browser';

import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatTableModule} from '@angular/material/table';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{AuthentificationServiceService} from './service/authentification-service.service'
import{HttpClientSoignantService} from './service/http-client-soignant.service'
import{AddPatientService} from './service/add-patient.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
    
  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //MatTableModule
  ],
  providers: [HttpClientSoignantService,
    AuthentificationServiceService,AddPatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

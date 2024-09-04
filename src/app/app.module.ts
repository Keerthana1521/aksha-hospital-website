import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { PrimeNGConfig } from 'primeng/api';
import { Accordion, AccordionModule } from 'primeng/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { DoctorStructureComponent } from './doctor-structure/doctor-structure.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { ServicesComponent } from './services/services.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    AboutComponent,
    AccordionComponent,
    ServicesComponent,
    DoctorComponent,
    DoctorDetailsComponent,
    DoctorStructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

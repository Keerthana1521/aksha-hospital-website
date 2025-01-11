import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { PrimeNGConfig } from 'primeng/api';
// import { Accordion, AccordionModule } from 'primeng/accordion';

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
import { SpecialitiesDesignComponent } from './specialities-design/specialities-design.component';
import { RadiologyComponent } from './radiology/radiology.component';
import { EndocrineSurgeryComponent } from './endocrine-surgery/endocrine-surgery.component';
import { VascularSurgeryComponent } from './vascular-surgery/vascular-surgery.component';
import { OrthopedicComponent } from './orthopedic/orthopedic.component';
import { DermotologyComponent } from './dermotology/dermotology.component';
import { GeneralPhysicianComponent } from './general-physician/general-physician.component';
import { UrologyComponent } from './urology/urology.component';
import { NephrologyComponent } from './nephrology/nephrology.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { AnesthesiaComponent } from './anesthesia/anesthesia.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { ENTComponent } from './ent/ent.component';
import { OncologyComponent } from './oncology/oncology.component';
import { NeurologyComponent } from './neurology/neurology.component';
import { ObstetricsComponent } from './obstetrics/obstetrics.component';
import { SurgeryComponent } from './gastro_surgery/surgery.component';
import { PediatricianComponent } from './pediatrician/pediatrician.component';
import { HomeComponent } from './home/home.component';
import { SpecialityDropDownComponent } from './speciality-drop-down/speciality-drop-down.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { FamilyComponent } from './family/family.component';
import { PsychiatryComponent } from './psychiatry/psychiatry.component';
import { NabhComponent } from './nabh/nabh.component';
import { FaqComponent } from './faq/faq.component';
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
    DoctorStructureComponent,
    SpecialitiesDesignComponent,
    RadiologyComponent,
    EndocrineSurgeryComponent,
    VascularSurgeryComponent,
    OrthopedicComponent,
    DermotologyComponent,
    GeneralPhysicianComponent,
    UrologyComponent,
    NephrologyComponent,
    PhysiotherapyComponent,
    AnesthesiaComponent,
    CardiologyComponent,
    ENTComponent,
    OncologyComponent,
    NeurologyComponent,
    ObstetricsComponent,
    SurgeryComponent,
    PediatricianComponent,
    HomeComponent,
    SpecialityDropDownComponent,
    BlogComponent,
    BlogPostComponent,
    GalleryComponent,
    FamilyComponent,
    PsychiatryComponent,
    NabhComponent,
    FaqComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

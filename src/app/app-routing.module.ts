import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AnesthesiaComponent } from './anesthesia/anesthesia.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { DermotologyComponent } from './dermotology/dermotology.component';
import { EndocrineSurgeryComponent } from './endocrine-surgery/endocrine-surgery.component';
import { ENTComponent } from './ent/ent.component';
import { GeneralPhysicianComponent } from './general-physician/general-physician.component';
import { NephrologyComponent } from './nephrology/nephrology.component';
import { NeurologyComponent } from './neurology/neurology.component';
import { ObstetricsComponent } from './obstetrics/obstetrics.component';
import { OncologyComponent } from './oncology/oncology.component';
import { OrthopedicComponent } from './orthopedic/orthopedic.component';
import { PediatricianComponent } from './pediatrician/pediatrician.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { RadiologyComponent } from './radiology/radiology.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { UrologyComponent } from './urology/urology.component';
import { VascularSurgeryComponent } from './vascular-surgery/vascular-surgery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'about-us', component:AboutComponent},
  {path:'contact-us', component:ContactFormComponent},
  {path:'services', component:ServicesComponent},
  { path:'doctors', component: DoctorComponent },
  { path:'doctor/:name', component: DoctorDetailsComponent },
  {path:'anesthesia',component: AnesthesiaComponent},
  {path:'cardiology',component: CardiologyComponent},
  {path:'dermatology',component: DermotologyComponent},
  {path:'endocrine-surgery',component: EndocrineSurgeryComponent},
  {path:'ent', component:ENTComponent},
  {path:'general-physician', component:GeneralPhysicianComponent},
  {path:'nephrology', component:NephrologyComponent},
  {path:'neurology', component:NeurologyComponent},
  {path:'obsterics-and-gynecology', component:ObstetricsComponent},
  {path:'oncology', component:OncologyComponent},
  {path:'orthopedic',component:OrthopedicComponent},
  {path:'pediatrics',component:PediatricianComponent},
  {path:'physiotherapy', component:PhysiotherapyComponent},
  {path:'radiology', component:RadiologyComponent},
  {path:'surgery', component:SurgeryComponent},
  {path:'urology', component:UrologyComponent},
  {path:'vascular-surgery', component:VascularSurgeryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

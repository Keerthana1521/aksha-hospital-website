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
import { SurgeryComponent } from './gastro_surgery/surgery.component';
import { UrologyComponent } from './urology/urology.component';
import { VascularSurgeryComponent } from './vascular-surgery/vascular-surgery.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PsychiatryComponent } from './psychiatry/psychiatry.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'gallery', component:GalleryComponent},
  {path:'about-us', component:AboutComponent},
  {path:'contact-us', component:ContactFormComponent},
  {path:'services', component:ServicesComponent},
  {path:'doctors', component: DoctorComponent },
  {path:'doctor/:name', component: DoctorDetailsComponent },
  {path:'best-anesthesia-hospital-in-bangalore',component: AnesthesiaComponent},
  {path:'best-cardiology-hospital-in-bangalore',component: CardiologyComponent},
  {path:'best-dermatology-hospital-in-bangalore',component: DermotologyComponent},
  {path:'best-endocrine-surgery-in-baqngalore',component: EndocrineSurgeryComponent},
  {path:'best-ent-hospital-in-bangalore', component:ENTComponent},
  {path:'best-general-physician-in-bangalore', component:GeneralPhysicianComponent},
  {path:'best-nephrology-hospital-in-bangalore', component:NephrologyComponent},
  {path:'best-neurology-hospital-in-bangalore', component:NeurologyComponent},
  {path:'best-obsterics-and-gynecology-hospital-in-bangalore', component:ObstetricsComponent},
  {path:'best-oncology-hospital-in-bangalore', component:OncologyComponent},
  {path:'best-orthopedic-hospital-in-bangalore',component:OrthopedicComponent},
  {path:'best-pediatrics-hospital-in-bangalore',component:PediatricianComponent},
  {path:'best-physiotherapy-hospital-in-bangalore', component:PhysiotherapyComponent},
  {path:'best-radiology-hospital-in-bangalore', component:RadiologyComponent},
  {path:'best-gastroenterology-hospital-in-bangalore', component:SurgeryComponent},
  {path:'best-urology-hospital-in-bangalore', component:UrologyComponent},
  {path:'best-vascular-surgery-hospital-in-bangalore', component:VascularSurgeryComponent},
  {path:'best-psychiatric-hospital-in-bangalore', component: PsychiatryComponent},
  {path:'blog',component: BlogComponent},
  { path: 'blog/:slug', component: BlogPostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

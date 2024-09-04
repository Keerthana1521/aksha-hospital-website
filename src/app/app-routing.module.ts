import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/doctors', pathMatch: 'full' },
  {path:'about-us', component:AboutComponent},
  {path:'contact-us',component:ContactFormComponent},
  // {path:'services',component:Ser},
  { path: 'doctors', component: DoctorComponent },
  { path: 'doctor/:name', component: DoctorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

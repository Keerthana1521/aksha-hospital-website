import { Component } from '@angular/core';

@Component({
  selector: 'app-nephrology',
  templateUrl: './nephrology.component.html',
  styleUrl: './nephrology.component.css'
})
export class NephrologyComponent {
  doctors=[
    {
      name: "Dr. Rajiv E N", 
      slug: 'Dr-Rajiv-E-N', 
      qualification: "MBBS, MD(General Medicine), DM(Nephrology)", 
      department:'Nephrology',
      designation: 'Consultant - Nephrologist', 
      experience: '15', 
      image: '../../assets/doctor-17.png',
      icon:'../../assets/male.svg', 
      about: "Embark on a journey of kidney care guided by the genuine expertise of Dr Rajiv, our Lead Consultant in Nephrology and Kidney Transplantation. Dr Rajiv isn't just a doctor; he is a partner in your...", 
      expertise: [
        'Nephrology',
        'Dialysis',
        'Renal Transplantation'
      ]
    },
  ]

}

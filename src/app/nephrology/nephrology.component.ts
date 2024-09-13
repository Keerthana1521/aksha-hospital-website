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
      experience: '', 
      image: '../../assets/doctor-17.png',
      icon:'../../assets/male.svg', 
      about: '', 
      expertise: [
        'Nephrology',
        'Dialysis',
        'Renal Transplantation'
      ]
    }
  ]

}

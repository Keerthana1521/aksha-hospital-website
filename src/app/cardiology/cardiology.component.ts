import { Component } from '@angular/core';

@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrl: './cardiology.component.css'
})
export class CardiologyComponent {
    doctors = [
      {
        name: "Dr. Anand Palakshachar", 
        slug: 'Dr-Anand-Palakshachar', 
        qualification: "MBBS, MD General Medicine", 
        designation: 'Consultant- Cardiologist', 
        experience: '8', 
        image: '../../assets/doctor-8.png', 
        icon:'../../assets/male.svg',
        about: '', 
        expertise: [
          
        ]
      },
    ]
}

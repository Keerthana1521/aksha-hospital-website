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
        about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...', 
        expertise: [
          
        ]
      },
    ]
}

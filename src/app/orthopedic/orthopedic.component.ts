import { Component } from '@angular/core';

@Component({
  selector: 'app-orthopedic',
  templateUrl: './orthopedic.component.html',
  styleUrl: './orthopedic.component.css'
})

export class OrthopedicComponent {
    doctors = [
      {
        name: "Dr. Sushal ShanthaKumar", 
        slug: 'Dr-Sushal-ShanthaKumar', 
        qualification: "MBBS, MS (ORTHOPAEDICS)", 
        experience: '15', 
        designation: 'Consultant - Arthroscopy & Shoulder Surgeon', 
        image: '../../assets/doctor-7.png', 
        icon:'../../assets/male.svg',
        about: 'Dr. Sushal ShanthaKumar is one of the most eminent & top 5 Orthopedic Surgeons in Bengaluru, specializing in Knee and Shoulder: Sports Injuries using arthroscopic (keyhole) and minimally invasive surgeries with over 14 years of extensive experience. He has a vast...', 
        expertise: [
          'Shoulder & Knee Injures',
          'Knee Arthroscopy',
          'Shoulder Arthroscopy',
          'Frozen Shoulder',
          'Sports Injuries',
          'Shoulder Replacement',
          'Shoulder Trauma',
          'Platelet-rich-plasma injections',
        ]
      },
    ]
}

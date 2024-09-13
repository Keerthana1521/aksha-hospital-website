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
      {
        name: "Dr. Sujayendra D M", 
        slug: 'Dr-Sujayendra-D-M', 
        qualification: "MBBS, MS(Ortho), DNB(Ortho)", 
        designation: 'Consultant - Orthopaedics', 
        experience: '', 
        image: '../../assets/doctor-16.png',
        icon:'../../assets/male.svg', 
        about: 'Dr. Sujayendra D. M did his MBBS and MS Orthopaedics from the prestigious Kasturba Medical College, Manipal. Being one of the few colleges with different units for Orthopaedic sub-specialities, he gained wide exposure to hand surgeries...', 
        expertise: [
          'Fracture care',
          'Joint Replacement and Arthroscopy(keyhole) Surgeries',
          'Hand surgeries'
        ]
      },
    ]
}

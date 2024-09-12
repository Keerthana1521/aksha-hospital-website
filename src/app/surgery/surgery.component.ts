import { Component } from '@angular/core';

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrl: './surgery.component.css'
})
export class SurgeryComponent {
    doctors = [
      {
        name: "Dr. Sumanth Bhoopal ", 
        slug: 'Dr-Sumanth-Bhoopal ', 
        qualification: "MBBS, MS, FSGE", 
        designation: 'Medical Director of Aksha Hospital', 
        experience: '20', 
        image: '../../assets/doctor-3.png', 
        icon:'../../assets/male.svg',
        about: 'Dr. Sumanth Bhoopal is one of the most eminent doctors in the specialty of Surgical Gastroenterology & Interventional Endoscopy with over 17 years of expertise with 5000+ procedures. He holds vast experience in treating major and minor Gastroenterology...'
        , expertise: [
          'Laparoscopic Surgeries ',
          'Laser Surgeries',
          'HPB Surgeries',
          'TColorectal Diseases',
          'Proctological Conditions (piles, fissures, fistulas)',
          'Endoscopic Investigation',
        ]
      },
    ]
}

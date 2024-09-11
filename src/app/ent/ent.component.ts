import { Component } from '@angular/core';

@Component({
  selector: 'app-ent',
  templateUrl: './ent.component.html',
  styleUrl: './ent.component.css'
})
export class ENTComponent {
    doctors = [
      {
        name: "Dr. Sridutt Shekar", 
        slug: 'Dr-Sridutt-Shekar', 
        qualification: "MBBS, MS ENT", 
        designation: 'Consultant - ENT', 
        experience: '9', 
        image: '../../assets/doctor-12.png',
        icon:'../../assets/male.svg', 
        about: 'Dr. Sridutt Shekar is dedicated to providing top-notch care for patients with ear, nose, and throat conditions. His expertise spans a wide range of ENT procedures and treatments, ensuring comprehensive and effective care for his patients.', 
        expertise: [
          'Functional Endoscopic Sinus Surgery',
          'Micro Ear Surgery',
          'Tonsillectomy',
          'Adenoidectomy',
          'Micro Laryngeal Surgery',
          'Management of Allergic Rhinitis',
          'Management of OSA (Obstructive Sleep Apnea)',
        ]
      },
    ]
}

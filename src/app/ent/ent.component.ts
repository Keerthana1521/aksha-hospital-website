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
      {
      name: "Dr. Chetan Pai R",
      slug : "Dr. Chetan Pai R",
      qualification : "MBBS, DNB ENT",
      department : "ENT Specialist",
      designation : "Consultant - ENT Specialist",
      experience : "13+",
      image : "../../assets/doctor-15.png",
      about : "Dr Chetan Pai R is a well-known ENT Surgeon currently associated with SRV Agadi Hospital, Wilson Garden. He has 13 years of experience in ENT Surgery and has worked as an expert in different cities of India. He has...",
      expertise : [

      ]
    },
    ]
}

import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ent',
  templateUrl: './ent.component.html',
  styleUrl: './ent.component.css'
})
export class ENTComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best ENT Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best ENT hospital in Jayanagar, Bangalore, offering expert care for ear, nose and throat disorders with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best ENT hospital in Bangalore, ENT hospital in Jayanagar, Ear, nose, and throat care in Bangalore, ENT specialists near JP Nagar, Sinus treatment in Banashankari, Aksha Hospital ENT services, Advanced ENT care in Jayanagar, Treatment for hearing loss in Bangalore, Voice disorder specialists in Bangalore, ENT doctors in Jayanagar' }
        
      );
    }

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
        experience : "13",
        image : "../../assets/doctor-27.jpeg",
        about : "Dr. Chetan Pai R is a well-known ENT surgeon currently associated with SRV Agadi Hospital, Wilson Garden. He has 13 years of experience in ENT Surgery and has worked as an expert in different cities of India. He has...",
        expertise : [
  
        ]
      },
    ]
}

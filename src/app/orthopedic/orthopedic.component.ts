import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-orthopedic',
  templateUrl: './orthopedic.component.html',
  styleUrl: './orthopedic.component.css'
})

export class OrthopedicComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Orthopedic Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha is a leading orthopedic hospital in Jayanagar Bangalore, offering expert care for bone, joint, and spine conditions with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best orthopedic hospital in Bangalore, Orthopedic care in Jayanagar, Bone and joint specialists in Bangalore, Spine surgery in Jayanagar, Orthopedic surgeons near JP Nagar, Pediatric orthopedic hospital in Bangalore, Joint replacement in Banashankari, Advanced bone care in Bangalore, Aksha Hospital orthopedic services, Sports injury treatment in Bangalore, ' }
        
      );
    }

    doctors = [
      {
        name: "Dr. Sushal ShanthaKumar", 
        slug: 'Dr-Sushal-ShanthaKumar', 
        qualification: "MBBS, MS (ORTHOPAEDICS)", 
        experience: '15', 
        designation: 'Consultant - Arthroscopy & Shoulder Surgeon', 
        image: '../../assets/doctor-7.png', 
        icon:'../../assets/male.svg',
        about: 'Dr. Sushal ShanthaKumar is one of the most eminent & top 5 Orthopedic Surgeons in Bengaluru, specializing in Knee and Shoulder: Sports Injuries using arthroscopic (keyhole) and minimally invasive surgeries with over 15 years of extensive experience. He has a vast...', 
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
        name: "Dr. Sujayendra D. M", 
        slug: 'Dr-Sujayendra-D-M', 
        qualification: "MBBS, MS - Orthopaedics, DNB - Orthopedics/Orthopedic Surgery", 
        designation: 'Consultant - Orthopaedics', 
        experience: '10', 
        image: '../../assets/doctor-16.png',
        icon:'../../assets/male.svg', 
        about: "Dr. Sujayendra D M is a Orthopaedic surgeon with higher training in musculoskeletal trauma and arthroplasty, 10 Years Experience Overall (7 years as specialist) Dr. Sujayendra D M practices at...", 
        expertise: [
          'Fracture care',
          'Joint Replacement and Arthroscopy(keyhole) Surgeries',
          'Hand surgeries'
        ]
      },
      {
        name : " Dr. Kiran Rajappa",
        slug : "Dr-Kiran-Rajappa",
        qualification : "MBBS, MS - Orthopaedics, DNB - Orthopedics/Orthopedic Surgery, FNB - Spine Surgery",
        department : "Orthopaedic",
        designation : "Consultant - Ortho - Spine Surgeon",
        experience : "18",
        image : "../../assets/doctor-101.png",
        about : "",
        expertise : []
      },
    ]
    doctors2 = [
      {
        name : "Dr. Shashi Kumar ",
        slug : "Dr-Shashi-Kumar ",
        qualification : "MBBS, MS - Orthopaedics",
        department : "Orthopaedic",
        designation : "Consultant - Orthopedic Surgeon",
        experience : "15",
        image : "../../assets/doctor-101.png",
        about : "",
        expertise : []
      },
    ]

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-general-physician',
  templateUrl: './general-physician.component.html',
  styleUrl: './general-physician.component.css'
})
export class GeneralPhysicianComponent {
  doctors = [
    {
      name: "Dr. Kapil Wajapey", 
      slug: 'Dr-Kapil-Wajapey', 
      qualification: "MBBS, DNB - General Medicine,MRCP(UK). CCEBDM Certification in Diabetes", 
      designation: 'Consultant- Internal Medicine', 
      experience: '13', 
      image: '../../assets/doctor-6.png', 
      icon:'../../assets/male.svg',
      about: 'Dr. Kapil Wajapey is a Internal Medicine in Jayanagar 7 Block, Bengaluru and has an experience of 13 years in this field. Dr. Kapil Wajapey practices at Aksha Hospital in Jayanagar 7 Block, Bengaluru. He completed MBBS from R G U H S in 2011 and DNB...', 
      expertise: [
        
      ]
    },
    {
      name: "Dr. Deepa Rao", 
      slug: 'Dr-Deepa-Rao', 
      qualification: "MBBS, DNB Family Medicine", 
      designation: 'Consultant – Family Physician', 
      experience: '10', 
      image: '../../assets/doctor-5.png', 
      icon:'../../assets/female.svg',
      about: 'After obtaining her MBBS degree from Government medical College, Bellary(VIMS) she went on to specialise in Family medicine from The Bengaluru Hospital, Bengaluru, and awarded Diplomate in national board, NBE, New Delhi. She has completed a Certificate... ', 
      expertise: [
        'Geriatric Care',
        'Medical Problems in Pregnancy',
        'Chronic Disease Management (Diabetes, Hypertension, Thyroid Disorders)',
        'Old age related problems',
        'Preventive Health & Lifestyle Modification'
      ]
    },
  ]
}

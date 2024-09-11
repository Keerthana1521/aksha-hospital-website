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
      qualification: "MBBS, DNB(Internal Medicine)", 
      designation: 'Consultant- Internal Medicine', 
      experience: '10', 
      image: '../../assets/doctor-6.png', 
      icon:'../../assets/male.svg',
      about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...', 
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
      about: 'After obtaining her MBBS degree from Government medical College, Bellary(VIMS) she went on to specialise in Family medicine from The Bangalore Hospital, Bangalore, and awarded Diplomate in national board,NBE, New Delhi.She has completed a Certificate... ', 
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

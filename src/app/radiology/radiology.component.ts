import { Component } from '@angular/core';

@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrl: './radiology.component.css'
})
export class RadiologyComponent {
  doctors = [
    {
      name: "Dr. Sayalee Gadgil", 
      slug: 'Dr-Sayalee-Gadgil', 
      qualification: "MBBS, DNB, FRCR(UK)", 
      designation: 'Consultant - Radiology', 
      experience: '7', 
      image: '../../assets/doctor-24.jpg',
      icon:'../../assets/female.svg', 
      about: 'Dr. Sayalee Gadgil is dedicated to providing precise and detailed imaging services. Her expertise in fetal medicine and abdominal imaging ensures that patients receive accurate diagnoses and top-quality care.', 
      expertise: [
        'Fetal Medicine',
        'Abdominal Imaging',
      ]
    },
    {
      name: "Dr. Bharath Kumar V. K",
      slug : "Dr. Bharath Kumar V. K",
      qualification : "MBBS, DMRD",
      department : " specialist in Radiology / Sonology / Ultrasound",
      designation : "Consultant - Radiology",
      experience : "",
      image : "../../assets/doctor-15.png",
      about : "During my Radiology career I was exposed to all conventional and modern imaging modalities viz Conventional Radiography, Mammography, Ultrasonography including Colour Doppler and 4D, Helical CT, MRI, Digital Subtraction Angiography, Picture...",
      expertise : [
      ]
    },
  ]
}

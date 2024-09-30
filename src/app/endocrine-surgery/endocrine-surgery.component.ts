import { Component } from '@angular/core';

@Component({
  selector: 'app-endocrine-surgery',
  templateUrl: './endocrine-surgery.component.html',
  styleUrl: './endocrine-surgery.component.css'
})
export class EndocrineSurgeryComponent {
doctors = [
  {
    name: "Dr. Santosh H S ", 
    slug: 'Dr-Santosh-H-S', 
    qualification: "MBBS, FRCP, MRCP", 
    designation: 'Consultant - Endocrinologist', 
    experience: '23', 
    image: '../../assets/doctor-14.png',
    icon:'../../assets/male.svg',
    about: 'Dr. Santosh H S brings extensive training and experience in diabetes and endocrinology. He completed his MBBS from Bengaluru University and earned his MRCP from the Royal College of Physicians in the UK. Dr. Santosh further honed his skills with specialist training and...', 
    expertise: [
      'Diabetes Mellitus Management',
      'Thyroid Disorders',
      'Osteoporosis',
      'Pituitary Diseases',
      'Adrenal Disorders',
      'Parathyroid Disorders',
      'Reproductive Endocrinology',
      'Lipid & Metabolic Disorders (Cholesterol)',
      'Obesity Management',
      'Post-Bariatric Surgery Care',
      'Complex Adult & Adolescent Diabetes Management',
      'Diabetic Emergencies',
      'Insulin Pump Therapy',
      'Antenatal and Gestational Diabetes'
    ]
  },
]
}

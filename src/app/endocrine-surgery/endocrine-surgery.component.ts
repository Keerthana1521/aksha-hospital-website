import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-endocrine-surgery',
  templateUrl: './endocrine-surgery.component.html',
  styleUrl: './endocrine-surgery.component.css'
})
export class EndocrineSurgeryComponent {

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("Best Endocrine Surgery in Jayanagar Bangalore | Aksha Hospital");

    this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is a leading endocrine surgery hospital in Jayanagar Bangalore, providing expert care for thyroid, adrenal and hormonal disorders with experienced specialists.' });

    this.metaService.updateTag({
      name: 'keywords', content: 'Best endocrine surgery in BangaloreEndocrinology hospital in Jayanagar,Thyroid surgery in Bangalore,Hormonal disorder treatment in Bangalore,Adrenal surgery in Jayanagar,Pediatric endocrine care Bangalore,Advanced endocrine treatment in Bangalore,Endocrine specialists near JP Nagar,Hormonal imbalance care in Banashankari,Aksha Hospital endocrine services,' }
        
      );
  }

  doctors = [
    {
      name: "Dr. Santosh H S ",
      slug: 'Dr-Santosh-H-S',
      qualification: "MBBS, FRCP, MRCP",
      designation: 'Consultant - Endocrinologist',
      experience: '23',
      image: '../../assets/doctor-14.png',
      icon: '../../assets/male.svg',
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

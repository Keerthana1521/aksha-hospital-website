import { Component } from '@angular/core';

@Component({
  selector: 'app-pediatrician',
  templateUrl: './pediatrician.component.html',
  styleUrl: './pediatrician.component.css'
})
export class PediatricianComponent {
  doctors =[
      {
        name: "Dr. Prasad N A", 
        slug: 'Dr-Prasad-N-A', 
        qualification: "MBBS, MD(Pediatrics), FIAP(Neonatology)", 
        designation: 'Consultant- Pediatrics & Neonatology', 
        experience: '10', 
        image: '../../assets/doctor-9.png', 
        icon:'../../assets/male.svg',
        about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...', 
        expertise: [
         
        ]
      },
      {
        name: "Dr. Avani Hegde",
         slug: 'Dr-Avani-Hegde', 
         qualification: "MBBS, MD Pediatrics", 
         designation: 'Consultant- Pediatrician',
          experience: '8', 
          image: '../../assets/doctor-10.png', 
          icon:'../../assets/female.svg',
          about: 'Dr. Avani Hegde completed her MD in Paediatrics from the Advanced Paediatric Centre, PGIMER, Chandigarh, where she was awarded the institutional bronze medal for her academic excellence. She pursued her sub-specialty training in paediatric and adolescent endocrinology...', 
          expertise: [
          'Short height',
          'Poor growth',
          'Growth hormone deficiency',
          'Thyroid disorders',
          'Diabetes',
          'Hypoglycemia',
          'Obesity',
          'Pubertal disorders',
          'PCOS',
          'Calcium and Vitamin D disorders',
          'Rickets',
          'Pituitary disorders',
          'Adrenal disorders',
          'Atypical genitalia'
        ]
      },
      {
        name: "Dr. Vivekananda Kustagi", 
        slug: 'Dr-Vivekananda-Kustagi', 
        qualification: "", 
        designation: '', 
        experience: '', 
        image: '../../assets/doctor-11.png', 
        icon:'../../assets/male.svg',
        about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...',
        expertise: [
          
        ]
      },
  ]
}

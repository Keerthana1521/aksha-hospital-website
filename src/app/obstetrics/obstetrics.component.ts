import { Component } from '@angular/core';

@Component({
  selector: 'app-obstetrics',
  templateUrl: './obstetrics.component.html',
  styleUrl: './obstetrics.component.css'
})
export class ObstetricsComponent {


    doctors = [
      {
        name: "Dr. Smitha Bhoopal ",
        slug: 'Dr-Smitha-Bhoopal',
        qualification: "MBBS, DGO",
        designation: 'Sr. Consultant (Obstetrics & Gynaecologist)',
        experience: '13', image: '../../assets/doctor-2.png',
        icon:'../../assets/female.svg',
        about: 'Dr. Smitha Bhoopal is one of the most renowned, highly progressive and experienced Gynaecologist and Obstetrition in Bengaluru, practicing "Healthy Birthing" with a career spanning 35 years and having delivered more than 9000+ babies in her...',
        expertise: [
               
        ]
      },
      {
        name: "Dr. Madhuri Sumanth", 
        slug: 'Dr-Madhuri-Sumanth', 
        qualification: "MBBS, MS (OBG & GYNAEC) & FMAS", 
        designation: 'Sr. Consultant (Obstetrics & Gynaecologist)', 
        experience: '16', 
        image: '../../assets/doctor-4.png', 
        icon:'../../assets/female.svg',
        about: 'Dr. Madhuri Sumanth’s practice is “Respect Motherhood” and delivering the best care for all pregnant ladies. She is an experienced and compassionate renowned obstetrician for Normal deliveries and handling high-risk pregnancies. She is best in her commitment...', 
        expertise: [
          'Vaginal Delivery',
          'High Risk Pregnancy',
          'Medical Disorders in Pregnancy',
          'Recurrent Pregnancy Loss Treatment',
          'Emergency Obstetric Care',
          'Vaginal Surgeries',
          'Management of Menopause Related Issues',
          'Gynaecological Surgeries- MIS',
        ]
      },
    ]


}

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
        designation: 'Obstertrics & Gynaecologist',
        experience: '13', image: '../../assets/doctor-2.png',
        icon:'../../assets/female.svg',
        about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...',
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-anesthesia',
  templateUrl: './anesthesia.component.html',
  styleUrl: './anesthesia.component.css'
})
export class AnesthesiaComponent {
  doctors =[{
    name: "Dr. Vijaya Kumar", 
    slug: 'Dr. Vijaya Kumar', 
    qualification: "MBBS. DA DNB in Anaesthesialogy ", 
    department:'Anaesthesialogy',
    designation: 'Consultant - Anaesthesialogy', 
    experience: '22', 
    image: '../../assets/doctor-18.jpg',
    icon:'../../assets/male.svg', 
    about: 'Given anaesthesia for major and complicated cases experience in pain management experience in ICU speciality ', 
    expertise: [
      'Anaesthesialogy'
    ]
  },]
}

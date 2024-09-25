import { Component } from '@angular/core';

@Component({
  selector: 'app-anesthesia',
  templateUrl: './anesthesia.component.html',
  styleUrl: './anesthesia.component.css'
})
export class AnesthesiaComponent {
  doctors =[{
    name: "Dr. Vijaya Kumar", 
    slug: 'Dr-Vijaya-Kumar', 
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
  },
  {
    name: "Dr Raveendra Reddy N",
    slug : "Dr Raveendra Reddy N",
    qualification : "MBBS, FcARCSI, FCCS,Fellow in Intensive Care(King's College Hospital, London)",
    department : "Anaesthesia and Intensive Care Medicine ",
    designation : "Consultant - Anaesthesia and Intensive Care",
    experience : "19",
    image : "../../assets/doctor-15.png",
    about : "Completed my undergraduate from Kasturba Medical College, Manipal.Then worked as a Resident in  the department of Medicine at Mallya Hospital, Bangalore. Whilst working as resident at Mallya Hospital, passed my PLAB...",
    expertise : [
      "Critical care","Anaesthesia"
    ]
  },
]
}

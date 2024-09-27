import { Component } from '@angular/core';

@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrl: './cardiology.component.css'
})
export class CardiologyComponent {
    doctors = [
      {
        name: "Dr. Anand Palakshachar",
        slug : "Dr. Anand Palakshachar",
        qualification : "MBBS, MD - General Medicine, DM - Cardiology",
        department : "Cardiology",
        designation : "Consultant - Cardiologist",
        experience : "7",
        image : "../../assets/doctor-8.png",
        about : "Dr. Anand P is a Cardiologist in Banashankari, Bangalore and has an experience of 7 years in this field. Dr. Anand P practices at Devagiri Hospital - Powered by Medisync in Banashankari, Bangalore and Nano Hospital in Uttarahalli, Bangalore. He completed MBBS from RGUHS...",
        expertise : [
        ]
      },
    ]
}

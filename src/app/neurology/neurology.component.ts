import { Component } from '@angular/core';

@Component({
  selector: 'app-neurology',
  templateUrl: './neurology.component.html',
  styleUrl: './neurology.component.css'
})
export class NeurologyComponent {
  doctors = [
    {
      name : "Dr. Praveen Kumar S",
      slug : "Dr-Praveen-Kumar-S",
      qualification : "DM - Neurology, MBBS Neurologist",
      department : "Neurology",
      designation : "Consultant - Neurologist",
      experience : "20",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : " Dr. Bharat Kumar S",
      slug : "Dr-Bharat-Kumar-S",
      qualification : "MBBS, DNB - Neurosurgery",
      department : "Neuro Surgery",
      experience : "10",
      designation : "Consultant - Neuro Surgery",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
  ]
}

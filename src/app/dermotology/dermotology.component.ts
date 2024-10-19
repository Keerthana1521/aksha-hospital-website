import { Component } from '@angular/core';

@Component({
  selector: 'app-dermotology',
  templateUrl: './dermotology.component.html',
  styleUrl: './dermotology.component.css'
})
export class DermotologyComponent {
  doctors = [
    {
      name : "Dr. Rashmi Agarwal",
      slug : "Dr-Rashmi-Agarwal",
      qualification : "MBBS, MD(Dermatology, DNB, FRGUHS ( Pediatric Dermatology)",
      department : "Pediatric Dermatology",
      designation : "Consultant - Pediatric Dermatology",
      experience : "12",
      image : "../../assets/doctor-29.jpeg",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Pavithra ",
      slug : "Dr-Pavithra",
      qualification : "MBBS, DDVL",
      department : "Dermatologist, Trichologist",
      designation : "Consultant - Dermatologist and Trichologist",
      experience : "15",
      image : "../../assets/doctor-100.png",
      about : "",
      expertise : []
    },
  ]
}

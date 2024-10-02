import { Component } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrl: './family.component.css'
})
export class FamilyComponent {

  family = [
    {
      image  : "../../assets/doctor-1.png",
      name : "Dr. T S Bhoopal ",
      // slug : "Dr-Bhoopal-T-S",
      // qualification : "MBBS, MD",
      designation : "Managing Director",
      designation2: 'Radio Diagnosis',
    },
    {
      image  : "./../assets/doctor-2.png",
      name : "Dr. Smitha Bhoopal",
      // slug : "Dr-Smitha-Bhoopal",
      // qualification : "MBBS, DGO",
      designation: 'Consultant Obstetrician & Gynaecologist',
    },
    {
      image  : "./../assets/doctor-3.png",
      name : "Dr. Sumanth Bhoopal",
      // slug : "Dr-Sumanth-Bhoopal",
      designation: 'Consultant & Medical Director ', 
      designation2: 'Surgical Gastroenterologist',  
    },
    {
      image  : "./../assets/doctor-4.png",
      name : "Dr. Madhuri Sumanth",
      // slug : "Dr-Madhuri-Sumanth",
      // qualification : "MBBS, MS (OBG & GYNAEC) & FMAS",
      designation: 'Consultant Obstetrician & Gynaecologist',
    },
    {
      image  : "../../assets/ReshmaBhoopal.png",
      name : "Ms. Reshma Bhoopal",
      // slug : "Reshma-Bhoopal",
      qualification : "BE and MBA(HR)",
      designation : "HR Business Partner"
    }
  ]

}

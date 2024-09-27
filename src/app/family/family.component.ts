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
      name : "Dr. Bhoopal T.S",
      slug : "Dr-Bhoopal-T-S",
      designation : "Managing Director"
    },
    {
      image  : "./../assets/doctor-2.png",
      name : "Dr. Smitha Bhoopal",
      slug : "Dr-Smitha-Bhoopal",
      designation : "Obstertrics & Gynaecologist"
    },
    {
      image  : "./../assets/doctor-3.png",
      name : "Dr. Sumanth Bhoopal",
      slug : "Dr-Sumanth-Bhoopal",
      designation : "Medical Director of Aksha Hospital"
    },
    {
      image  : "./../assets/doctor-4.png",
      name : "Dr. Madhuri Sumanth",
      slug : "Dr-Madhuri-Sumanth",
      designation : "Sr. Consultant (Obstetrics & Gynaecologist)"
    },
    {
      image  : "../../assets/ReshmaBhoopal.png",
      name : "Reshma Bhoopal",
      slug : "Reshma-Bhoopal",
      designation : "HR Professional | SHRM-CP Certified"
    }
  ]

}

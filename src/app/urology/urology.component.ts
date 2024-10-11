import { Component } from '@angular/core';

@Component({
  selector: 'app-urology',
  templateUrl: './urology.component.html',
  styleUrl: './urology.component.css'
})
export class UrologyComponent {
  doctors = [
    {
      name: "Dr. Manohar C S",
      slug : "Dr. Manohar C S",
      qualification : "MBBS, MS – Urology",
      department : "Urology/Genito-Urinary Surgery",
      designation : "Consultant - Urology/Genito-Urinary Surgery",
      experience : "17",
      image : "../../assets/doctor-101.png",
      about : "Dr. Manohar C S is a Urologist in Bengaluru and has an experience of 11 years in this field. He has done MBBS from Kempegowda Institute of Medical Sciences (KIMS), Bengaluru in 2003 and MS – Urology from Kempegowda...",
      expertise : [
      ]
    },
    {
      name: "Dr. Pramod. B. R",
      slug : "Dr. Pramod. B. R",
      qualification : "MBBS, MS - General Surgery, MRCS (UK), MCh - U, DNB - Urology/Genito",
      department : "Urology/Genito-Urinary Surgery",
      designation : "Consultant - Urology/Genito-Urinary Surgery",
      experience : "18",
      image : "../../assets/doctor-101.png",
      about : "Dr. Pramod B R is a Senior Consultant Urologist, Andrologist and Urogynecologist in Jayanagar, Bengaluru and has an experience of 18 years in these fields. Dr. Pramod B R practices at Apollo Hospital - Jayanagar....",
      expertise : [
      ]
    },
    {
      name : "Dr. A Nagaraj Rao",
      slug : "Dr-A-Nagaraj-Rao",
      qualification : "MBBS, MS - General Surgery, MCh - Urology/Genito-Urinary Surgery",
      department : "Urology",
      designation : "Consultant - Urologist",
      experience : "26",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
  ]
}

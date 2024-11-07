import { Component } from '@angular/core';

@Component({
  selector: 'app-oncology',
  templateUrl: './oncology.component.html',
  styleUrl: './oncology.component.css'
})
export class OncologyComponent {
  doctors = [
      {
        name : "Dr. Pragnya Coca",
        slug : "Dr-Pragnya-Coca",
        qualification : "DM - Oncology, MBBS",
        department : "Oncology and Onco Surgery",
        designation : "Consultant - Medical Onco",
        experience : "20",
        image : "../../assets/doctor-100.png",
        about : "",
        expertise : []
      },
      {
        name : "Dr. Swaroop",
        slug : "Dr. Swaroop",
        qualification : "MBBS, MD - Radiotherapy, MRCP (UK), DM - Medical Oncology",
        department : "Medical Onco",
        designation : "Consultant - Medical Onco",
        experience : "15",
        image : "../../assets/doctor-101.png",
        about : "",
        expertise : []
      },
      {
        name : " Dr. Rajeev L K",
        slug : "",
        qualification : "MBBS, MD - General Medicine, DM - Medical Oncology",
        department : "Oncology",
        designation : "Consultant - Oncologist",
        experience : "32",
        image : "../../assets/doctor-101.png",
        about : "",
        expertise : []
      },
    ]

      
  doctors2 = [
    {
      name : "Dr. Ravindra G ",
      slug : "Dr-Ravindra-G ",
      qualification : "MBBS, DMRT, DNB, BA",
      department : "Radiation Oncology",
      designation : "Consultant - Radiation Oncology",
      experience : "11",
      image : "../../assets/doctor-34.jpeg",
      about : "",
      expertise : []
    },
]
}

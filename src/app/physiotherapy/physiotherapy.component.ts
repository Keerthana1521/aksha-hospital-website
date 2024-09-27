import { Component } from '@angular/core';

@Component({
  selector: 'app-physiotherapy',
  templateUrl: './physiotherapy.component.html',
  styleUrl: './physiotherapy.component.css'
})
export class PhysiotherapyComponent {
doctors = [
  
  {
    name: "Dr. Palaniappan S",
    slug : "Dr-Palaniappan-S",
    qualification : "BPT, MSc(Y&N), FCR.",
    designation: 'Physiotherapist', 
    department : "Physiotheraphy",
    experience : "20",
    image : "../../assets/doctor-19.jpg",
    about : "Ortho, stroke, cardiac Rehabilitation.",
    expertise : [
      'Cardiac & Neuro Rehabilitation'
    ]   
  },
]
}

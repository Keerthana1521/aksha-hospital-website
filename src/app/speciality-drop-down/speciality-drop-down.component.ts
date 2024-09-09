import { Component } from '@angular/core';

@Component({
  selector: 'app-speciality-drop-down',
  templateUrl: './speciality-drop-down.component.html',
  styleUrl: './speciality-drop-down.component.css'
})
export class SpecialityDropDownComponent {
  selectedSpecialtyImage: string;
  specialties = [
    { name: 'Obstetrics & Gynecologists', image: 'assets/obstetrics.jpg' },
    { name: 'Gastrosurgery', image: 'assets/gastro.jpg' },
    { name: 'Pediatrician', image: 'assets/pediatric.jpg' },
    { name: 'Endocrine Surgeries', image: 'assets/endocrine.jpg' },
    { name: 'Vascular Surgeries', image: 'assets/vascular.jpg' },
    { name: 'Orthopedic', image: 'assets/orthopedic.jpg' },
    { name: 'General Physician', image: 'assets/general_physician.jpg' },
    { name: 'Dermatology', image: 'assets/dermatology.jpg' },
    { name: 'ENT', image: 'assets/ent.jpg' },
    // Add more specialties and images
  ];

  selectedSpecialty = this.specialties[0]; // Default selected specialty

  // Function to change the specialty image on hover
  onHoverSpecialty(specialty:any) {
    this.selectedSpecialty = specialty;
    this.selectedSpecialtyImage = specialty.image;
  }

  constructor() {
    // Initialize the default image
    this.selectedSpecialtyImage = this.specialties[0].image;
  }
}

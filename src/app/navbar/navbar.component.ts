import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isMenuVisible = false;
  isDropdownOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    console.log('toggleMenu',this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuVisible = !this.isMenuVisible;
  }
  closeMenu(){
    this.isMenuOpen = false;
  }
  isMobile = false;

ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', () => {
        this.checkIfMobile();
    });
}

checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
}
hoveredSpecialty: string | null = null;

  specialtyImages: { [key: string]: string } = {
    obstetrics: '../../assets/Obstetrics & Gynecologists.png',
    gastrosurgery: '../../assets/Gastrosurgery.png',
    pediatrician: '../../assets/Pediatrician.png',
    endocrine: '../../assets/Endocrinology.png',
    vascular: '../../assets/Vascular Surgeries.png',
    orthopedic: '../../assets/Orthopedic.png',
    general_physician: '../../assets/General Physician.png',
    dermatology: '../../assets/Dermatology.png',
    urology: '../../assets/Urology.png',
    radiology: '../../assets/Radiology.png',
    nephrology: '../../assets/Nephrology.png',
    physiotherapy: '../../assets/Physiotherapy.png',
    anesthesia: '../../assets/Anesthesia.png',
    cardiology: '../../assets/Cardiology.png',
    ent: '../../assets/ENT.png',
    oncology: '../../assets/Oncology and Onco Surgery.png',
    neurology: '../../assets/Neurology.png'
  };

  onHover(specialty: string) {
    this.hoveredSpecialty = specialty;
  }

  onLeave() {
    this.hoveredSpecialty = null;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  goToSpecialty(specialty: string) {
    this.closeDropdown();
    this.router.navigate([`/${specialty}`]);
    this.isMenuOpen = false;
  }
}

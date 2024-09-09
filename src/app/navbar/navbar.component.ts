import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isMenuVisible = false;

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
}

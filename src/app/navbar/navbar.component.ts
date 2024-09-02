import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    console.log('toggleMenu',this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}

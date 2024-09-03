import { Component, Input,HostListener } from '@angular/core';

@Component({
  selector: 'app-doctor-structure',
  templateUrl: './doctor-structure.component.html',
  styleUrl: './doctor-structure.component.css'
})
export class DoctorStructureComponent {
  @Input() image: any;
  @Input() name:any;
  @Input() desgination:any;
  @Input() qualification:any;
  @Input() about:any;
  showProfileDetails = true;

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.showProfileDetails = true;
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.showProfileDetails = false;
  // }

  // @HostListener('touchstart') onTouchStart() {
  //   this.showProfileDetails = true;
  // }

  // @HostListener('touchend') onTouchEnd() {
  //   this.showProfileDetails = false;
  // }


  openProfileDetails() {
    this.showProfileDetails = true;
  }

  closeProfileDetails() {
    this.showProfileDetails = false;
  }
}

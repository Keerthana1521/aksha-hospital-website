import { Component, Input } from '@angular/core';

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

  closeProfileDetails() {
    this.showProfileDetails = false;
  }
}

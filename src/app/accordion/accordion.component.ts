import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() icon_1: string = '';
  @Input() icon_2: string = '';
  @Input() title: any;
  @Input() description: any;
  isActive: boolean = false;
  icon_change: boolean = false;
  angle_icon: boolean = false;

   

  toggleAccordion() {
    this.isActive = !this.isActive;
    this.icon_change = !this.icon_change;
    this.angle_icon = !this.angle_icon;
  }
}

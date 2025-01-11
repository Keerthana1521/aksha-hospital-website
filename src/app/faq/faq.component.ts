import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  @Input() question: any;
  @Input() answer: any;
  @Input() quesNum: any;
  isActive: boolean = false;
  angle_icon: boolean = false;

   

  toggleAccordion() {
    this.isActive = !this.isActive;
    // this.icon_change = !this.icon_change;
    this.angle_icon = !this.angle_icon;
  }
}

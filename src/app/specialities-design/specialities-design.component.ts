import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialities-design',
  templateUrl: './specialities-design.component.html',
  styleUrl: './specialities-design.component.css'
})
export class SpecialitiesDesignComponent {
    @Input() heading: string = '';
    @Input() para_1: string = '';
    @Input() para_2: string = '';
    @Input() para_3: string = '';
    @Input() para_4: string = '';
    @Input() para_5: string = '';
    @Input() services: string = '';
    @Input() description: string = '';
    @Input()  
    @Input() para_6: string = '';
    @Input() list: any;
    @Input() image: string = '';
    @Input() doc_img: string = '';
    @Input() doc_name: string = '';
    @Input() qualification: string = '';
    @Input() department: string = '';
}

// <app-SpecialitiesDesignComponent [heading] />

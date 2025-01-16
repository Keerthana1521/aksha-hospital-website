import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nephrology',
  templateUrl: './nephrology.component.html',
  styleUrl: './nephrology.component.css'
})
export class NephrologyComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Kidney Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best nephrology hospital in Jayanagar, Bangalore, offering expert care for kidney disorders with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best nephrology hospital in Bangalore, Nephrology hospital in Jayanagar, Kidney specialists in Bangalore, Dialysis center in Jayanagar, Treatment for kidney failure in Bangalore, Nephrologists near JP Nagar, Pediatric nephrology care Bangalore, Advanced kidney care in Banashankari, Aksha Hospital nephrology services, Kidney transplant hospital in Bangalore, ' }
        
      );
    }

  doctors=[
    {
      name: "Dr. Rajiv E N", 
      slug: 'Dr-Rajiv-E-N', 
      qualification: "MBBS, MD(General Medicine), DM(Nephrology)", 
      department:'Nephrology',
      designation: 'Consultant - Nephrologist', 
      experience: '15', 
      image: '../../assets/doctor-17.png',
      icon:'../../assets/male.svg', 
      about: "Embark on a journey of kidney care guided by the genuine expertise of Dr. Rajiv, our Lead Consultant in Nephrology and Kidney Transplantation. Dr. Rajiv isn't just a doctor; he is a partner...", 
      expertise: [
        'Nephrology',
        'Dialysis',
        'Renal Transplantation'
      ]
    },
  ]

}

import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-physiotherapy',
  templateUrl: './physiotherapy.component.html',
  styleUrl: './physiotherapy.component.css'
})
export class PhysiotherapyComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Physiotherapy Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best physiotherapy hospital in Jayanagar, Bangalore, offering expert rehabilitation care with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best physiotherapy hospital in Bangalore, Physiotherapy hospital in Jayanagar, Rehabilitation care in Bangalore, Pain management specialists in Bangalore, Physiotherapists near JP Nagar, Post-surgery rehabilitation in Banashankari, Advanced physiotherapy services in Bangalore, Sports injury physiotherapy in Jayanagar, Aksha Hospital physiotherapy department, Physical therapy specialists in Bangalore, ' }
        
      );
    }

doctors = [
  
  {
    name: "Dr. Palaniappan S",
    slug : "Dr-Palaniappan-S",
    qualification : "BPT, MSc(Y&N), FCR.",
    designation: 'Physiotherapist', 
    department : "Physiotheraphy",
    experience : "20",
    image : "../../assets/doctor-28.jpeg",
    about : "Ortho, stroke, cardiac Rehabilitation.",
    expertise : [
      'Cardiac & Neuro Rehabilitation'
    ]   
  },
]
}

import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("About Aksha Hospital | Leading Healthcare in Jayanagar");  

    this.metaService.updateTag({ name: 'description', content: "Learn about Aksha Hospital's commitment to providing excellent healthcare in Jayanagar with a patient-centric approach." });
  
    this.metaService.updateTag({ name: 'keywords', content: 'Aksha Hospital about us, healthcare excellence Jayanagar, patient care Bangalore, hospital mission' }

    );
  }
}

// export class AboutComponent {
//   constructor(private titleService: Title, private metaService: Meta) {
//       this.titleService.setTitle("");  
  
//       this.metaService.updateTag({ name: 'description', content: '' });
    
//       this.metaService.updateTag({ name: 'keywords', content: '' }
        
//       );
//     }
//   }

import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("About Aksha Hospital - Leading Multispeciality Care in Jayanagar");  

    this.metaService.updateTag({ name: 'description', content: "Discover Aksha Hospital, Jayanagar-  renowned for advanced treatments, expert doctors and compassionate patient care in Bangalore." });
  
    this.metaService.updateTag({ name: 'keywords', content: 'About Aksha Hospital Jayanagar, Best hospital in Jayanagar Bangalore, Aksha Hospital near JP Nagar, Multispeciality care in Bangalore, Top hospitals in Banashankari, Trusted healthcare in Jayanagar, Advanced medical services Bangalore, Patient-centric care in Bangalore, Leading hospital in Jayanagar, Expert doctors in Bangalore, Child healthcare in Banashankari, Pediatric emergency care in Bangalore, Trusted pediatrics hospital in Bangalore' }

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

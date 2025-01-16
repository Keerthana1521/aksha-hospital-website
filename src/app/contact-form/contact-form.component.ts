import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  constructor(private titleService: Title, private metaService: Meta) {
          this.titleService.setTitle("Contact Aksha Hospital | Jayanagar, Bangalore");  
      
          this.metaService.updateTag({ name: 'description', content: 'Get in touch with Aksha Hospital, Jayanagar. Call, email, or visit us for expert care and advanced treatments in Bangalore.' });
        
          this.metaService.updateTag({ name: 'keywords', content: 'Contact Aksha Hospital Jayanagar, Aksha Hospital phone number, Aksha Hospital address Bangalore, Hospital near JP Nagar contact details, Multispeciality hospital in Jayanagar, Aksha Hospital location map, Best hospital in Jayanagar contact, Reach Aksha Hospital Banashankari, Hospital email and phone Bangalore, Advanced care in Jayanagar hospital' }
            
          );
        }
}



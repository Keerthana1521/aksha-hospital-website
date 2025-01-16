import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrl: './cardiology.component.css'
})
export class CardiologyComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Cardiology Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best cardiology hospital in Jayanagar, Bangalore, offering expert care for heart health with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best cardiology hospital in Bangalore, Cardiology hospital in Jayanagar, Heart specialists in Bangalore, Advanced cardiac care in Jayanagar, Cardiologists near JP Nagar, Heart check-up in Banashankari, Aksha Hospital cardiology services, Treatment for heart conditions in Bangalore, Best cardiac care in Jayanagar, Experienced cardiologists in Bangalore, ' }
        
      );
    }

    doctors = [
      {
        name: "Dr. Anand Palakshachar",
        slug : "Dr. Anand Palakshachar",
        qualification : "MBBS, MD - General Medicine, DM - Cardiology",
        department : "Cardiology",
        designation : "Consultant - Cardiologist",
        experience : "7",
        image : "../../assets/doctor-8.png",
        about : "Dr. Anand P is a Cardiologist in Banashankari, Bengaluru and has an experience of 7 years in this field. Dr. Anand P practices at Devagiri Hospital - Powered by Medisync in Banashankari, Bengaluru and Nano Hospital in Uttarahalli, Bengaluru. He completed MBBS from RGUHS...",
        expertise : [
        ]
      },
    ]
}

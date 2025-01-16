import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-neurology',
  templateUrl: './neurology.component.html',
  styleUrl: './neurology.component.css'
})
export class NeurologyComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Neurology Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best neurology hospital in Jayanagar, Bangalore, offering expert care for brain, spine and nerve disorders with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best neurology hospital in Bangalore, , Neurology hospital in Jayanagar, Brain and spine care in Bangalore, Neurologists near JP Nagar, Treatment for nerve disorders in Banashankari, Aksha Hospital neurology services, Advanced neurology care in Jayanagar, Stroke treatment in Bangalore, Neurological disorder specialists in Bangalore, Top neurology services in Bangalore' }
        
      );
    }

  doctors = [
    {
      name : "Dr. Praveen Kumar S",
      slug : "Dr-Praveen-Kumar-S",
      qualification : "DM - Neurology, MBBS Neurologist",
      department : "Neurology",
      designation : "Consultant - Neurologist",
      experience : "20",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : " Dr. Bharat Kumar S",
      slug : "Dr-Bharat-Kumar-S",
      qualification : "MBBS, DNB - Neurosurgery",
      department : "Neuro Surgery",
      experience : "10",
      designation : "Consultant - Neuro Surgery",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
  ]
}

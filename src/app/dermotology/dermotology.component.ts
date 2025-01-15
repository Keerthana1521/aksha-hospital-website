import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dermotology',
  templateUrl: './dermotology.component.html',
  styleUrl: './dermotology.component.css'
})
export class DermotologyComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Skin Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best dermatology hospital in Jayanagar, Bangalore, offering expert care for skin, hair and nail conditions with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best dermatology hospital in Bangalore, Dermatology hospital in Jayanagar, Skin specialists in Bangalore, Hair and scalp treatment in Jayanagar, Dermatologists near JP Nagar, Skin care services in Banashankari, Advanced skin treatment in Bangalore, Aksha Hospital dermatology services, Nail disorder treatment in Jayanagar, Top dermatologists in Bangalore,' }
        
      );
    }

  doctors = [
    {
      name : "Dr. Rashmi Agarwal",
      slug : "Dr-Rashmi-Agarwal",
      qualification : "MBBS, MD(Dermatology, DNB, FRGUHS ( Pediatric Dermatology)",
      department : "Pediatric Dermatology",
      designation : "Consultant - Pediatric Dermatology",
      experience : "12",
      image : "../../assets/doctor-29.jpeg",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Pavithra ",
      slug : "Dr-Pavithra",
      qualification : "MBBS, DDVL",
      department : "Dermatologist, Trichologist",
      designation : "Consultant - Dermatologist and Trichologist",
      experience : "15",
      image : "../../assets/doctor-100.png",
      about : "",
      expertise : []
    },
  ]
}

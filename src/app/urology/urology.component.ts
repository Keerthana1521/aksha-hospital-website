import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-urology',
  templateUrl: './urology.component.html',
  styleUrl: './urology.component.css'
})
export class UrologyComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Urology Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best urology hospital in Jayanagar, Bangalore, offering expert care for kidney, bladder and urinary disorders with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best urology hospital in Bangalore, Urology hospital in Jayanagar, Kidney specialists in Bangalore, Bladder treatment in Jayanagar, Urinary disorder treatment in Bangalore, Urologists near JP Nagar, Pediatric urology care in Bangalore, Advanced urology services in Banashankari, Aksha Hospital urology specialists, Prostate care in Bangalore, ' }
        
      );
    }

  doctors = [
    {
      name: "Dr. Manohar C S",
      slug : "Dr. Manohar C S",
      qualification : "MBBS, MS – Urology",
      department : "Urology/Genito-Urinary Surgery",
      designation : "Consultant - Urology/Genito-Urinary Surgery",
      experience : "17",
      image : "../../assets/doctor-101.png",
      about : "Dr. Manohar C S is a Urologist in Bengaluru and has an experience of 11 years in this field. He has done MBBS from Kempegowda Institute of Medical Sciences (KIMS), Bengaluru in 2003 and MS – Urology from Kempegowda...",
      expertise : [
      ]
    },
    {
      name: "Dr. Pramod. B. R",
      slug : "Dr. Pramod. B. R",
      qualification : "MBBS, MS - General Surgery, MRCS (UK), MCh - U, DNB - Urology/Genito",
      department : "Urology/Genito-Urinary Surgery",
      designation : "Consultant - Urology/Genito-Urinary Surgery",
      experience : "18",
      image : "../../assets/doctor-101.png",
      about : "Dr. Pramod B R is a Senior Consultant Urologist, Andrologist and Urogynecologist in Jayanagar, Bengaluru and has an experience of 18 years in these fields. Dr. Pramod B R practices at Apollo Hospital - Jayanagar....",
      expertise : [
      ]
    },
    {
      name : "Dr. A Nagaraj Rao",
      slug : "Dr-A-Nagaraj-Rao",
      qualification : "MBBS, MS - General Surgery, MCh - Urology/Genito-Urinary Surgery",
      department : "Urology",
      designation : "Consultant - Urologist",
      experience : "26",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
  ]
}

import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-anesthesia',
  templateUrl: './anesthesia.component.html',
  styleUrl: './anesthesia.component.css'
})
export class AnesthesiaComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Anesthesia Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best anesthesia hospital in Jayanagar, Bangalore, offering safe and expert care with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best anesthesia hospital in Bangalore, Anesthesia services in Jayanagar, Safe anesthesia care in Bangalore, Pain management in Jayanagar, Anesthesiologists near JP Nagar, Aksha Hospital anesthesia team, Advanced anesthesia services in Bangalore, Surgery support in Banashankari, Best anesthesiologists in Bangalore, Safe surgical care in Bangalore, ' }
        
      );
    }

  doctors =[
    {
    name: "Dr. Vijaya Kumar", 
    slug: 'Dr-Vijaya-Kumar', 
    qualification: "MBBS, DA, DNB in Anesthesiology ", 
    department:'Anesthesiology',
    designation: 'Consultant - Anesthesiology', 
    experience: '22', 
    image: '../../assets/doctor-18.jpg',
    icon:'../../assets/male.svg', 
    about: 'Given anaesthesia for major and complicated cases experience in pain management experience in ICU speciality.', 
    expertise: [
      'Anesthesiology'
    ]
  },
  {
    name: "Dr. Raveendra Reddy N",
    slug : "Dr Raveendra Reddy N",
    qualification : "MBBS, FcARCSI, FCCS,Fellow in Intensive Care(King's College Hospital, London)",
    department : "Anaesthesia and Intensive Care Medicine ",
    designation : "Consultant - Anaesthesia and Intensive Care",
    experience : "19",
    image : "../../assets/doctor-30.jpeg",
    about : "Completed my undergraduate from Kasturba Medical College, Manipal. Then worked as a Resident in the department of Medicine at Mallya Hospital, Bengaluru. Whilst working as resident at Mallya Hospital, passed my PLAB...",
    expertise : [
      "Critical care","Anaesthesia"
    ]
  },
  {
    name: "Dr. Pratheek R Reddy",
    slug : "Dr-Pratheek-R-Reddy",
    qualification : "MBBS , MD , DNB , IDCCM",
    department : "anaesthesia and critical care medicine",
    designation : "Consultant - Anaesthesia and Critical care medicine",
    experience : "10",
    image : "../../assets/doctor-101.png",
    about : "MD anaesthesia from ramaiah medical College and fellowship in critical care medicine from Fortis hospital. ",
    expertise : [
      "Geriatric Anaesthesia","Haemodynamic Monitoring","Regional Anaesthesia"]
  },
]
}

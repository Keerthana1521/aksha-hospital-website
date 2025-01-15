import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pediatrician',
  templateUrl: './pediatrician.component.html',
  styleUrl: './pediatrician.component.css'
})
export class PediatricianComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("Best Pediatrics Hospital in Jayanagar Bangalore | Aksha Hospital");

    this.metaService.updateTag({ name: 'description', content: 'Aksha is a leading pediatric hospital in Jayanagar Bangalore, offering specialized care for newborns, children and teenagers with experienced pediatricians.' });

    this.metaService.updateTag({
      name: 'keywords', content: 'Top pediatric hospital in Bangalore, Best children’s hospital in Jayanagar, Pediatric care in Bangalore, Child specialists in Jayanagar, Newborn care hospital in Bangalore, Aksha Hospital pediatrics department, Pediatricians near JP Nagar' }
            
          );
  }
  doctors = [
    {
      name: "Dr. Prasad N A",
      slug: 'Dr-Prasad-N-A',
      qualification: "MBBS, MD(Pediatrics), FIAP(Neonatology)",
      designation: 'Consultant- Pediatrics & Neonatology',
      experience: '10',
      image: '../../assets/doctor-9.png',
      icon: '../../assets/male.svg',
      about: '',
      expertise: [

      ]
    },
    {
      name: "Dr. Avani Hegde",
      slug: 'Dr-Avani-Hegde',
      qualification: "MBBS, MD Pediatrics",
      designation: 'Consultant- Paediatrics',
      experience: '8',
      image: '../../assets/doctor-10.png',
      icon: '../../assets/female.svg',
      about: 'Dr. Avani Hegde completed her MD in Paediatrics from the Advanced Paediatric Centre, PGIMER, Chandigarh, where she was awarded the institutional bronze medal for her academic excellence. She pursued her sub-specialty training in paediatric and adolescent endocrinology...',
      expertise: [
        'Short height',
        'Poor growth',
        'Growth hormone deficiency',
        'Thyroid disorders',
        'Diabetes',
        'Hypoglycemia',
        'Obesity',
        'Pubertal disorders',
        'PCOS',
        'Calcium and Vitamin D disorders',
        'Rickets',
        'Pituitary disorders',
        'Adrenal disorders',
        'Atypical genitalia'
      ]
    },
    {
      name: "Dr. Vivekanand Kustagi",
      slug: "Dr-Vivekanand-Kustagi",
      qualification: "MBBS, MD, DNB, FIAA, FIAP, PGPN (Boston), and MBA",
      department: "Paediatrics",
      designation: 'Consultant - Paediatrics',
      experience: "28",
      image: "../../assets/doctor-11.png",
      about: "I am a professor in Paediatrics, having special interest in paediatric Nutrition and paediatric Allergy and Infectious Diseases. Member of many International and National Paediatric Associations.",
      expertise: [
        'Endo-urology',
        'Uro-oncology',
        'Genito-urinary',
        'reconstruction',
        'kidney stones'
      ]
    },
  ]
}

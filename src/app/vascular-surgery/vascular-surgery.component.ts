import { Component } from '@angular/core';
import { SpecialitiesDesignComponent } from '../specialities-design/specialities-design.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-vascular-surgery',
  templateUrl: './vascular-surgery.component.html',
  styleUrl: './vascular-surgery.component.css'
})
export class VascularSurgeryComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle("Best Vascular Surgery Hospital in Jayanagar Bangalore | Aksha Hospital");

    this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best vascular surgery hospital in Jayanagar Bangalore, providing expert care for vein, artery and vascular disorders with experienced specialists.' });

    this.metaService.updateTag({
      name: 'keywords', content: 'Best vascular surgery hospital in BangaloreVascular surgery in Jayanagar,Treatment for vascular disorders Bangalore,Vein and artery specialists in Bangalore,Vascular surgeons in Jayanagar,Pediatric vascular surgery Bangalore,Advanced vascular care in JP Nagar,Blood vessel treatment in Banashankari,Aksha Hospital vascular services,Top vascular specialists in Bangalore,' }
    );
  }
  doctors = [
    {
      name: "Dr. Muralikrishna N",
      slug: "Dr. Muralikrishna N",
      qualification: "MBBS, DNB - Peripheral Vascular Surgery",
      department: "Vascular Surgery",
      designation: "Consultant - Vascular Surgeon",
      experience: "18",
      image: "../../assets/doctor-101.png",
      about: "Dr. Muralikrishna is a renowned Vascular Surgeon and is an Associate Professor at the Jayadeva Institute of Cardiology, Bengaluru. He has trained in India and abroad (Europe) and is passionate about dialysis vascular...",
      expertise: [
      ]
    },
  ]
}

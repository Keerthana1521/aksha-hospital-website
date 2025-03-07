import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-radiology',
  templateUrl: './radiology.component.html',
  styleUrl: './radiology.component.css'
})
export class RadiologyComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Radiology Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best radiology hospital in Jayanagar, Bangalore, offering expert imaging services with advanced technology and experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best radiology hospital in Bangalore, Radiology hospital in Jayanagar, Advanced imaging services in Bangalore, CT scan and MRI in Jayanagar, Diagnostic imaging near JP Nagar, X-ray services in Banashankari, Aksha Hospital radiology department, Ultrasound services in Bangalore, Radiology specialists in Bangalore, Imaging technology hospital in Jayanagar, ' }
        
      );
    }

  doctors = [
    {
      name: "Dr. Sayalee Gadgil", 
      slug: 'Dr-Sayalee-Gadgil', 
      qualification: "MBBS, DNB, FRCR(UK)", 
      designation: 'Consultant - Radiologist', 
      experience: '9', 
      image: '../../assets/doctor-24.jpg',
      icon:'../../assets/female.svg', 
      about: 'Dr Sayalee Gadgil is a practicing radiologist in Bengaluru. She completed her M.B.B.S. training from Rajiv Gandhi Medical College, Thane, Maharashtra and  post-graduate training in Radiology at Saifee hospital, Mumbai in 2019. She worked at various government institutions...', 
      expertise: [
        'Abdominal radiology',
        'obstetrics and gynaecology ultrasound',
        '3D and 4D USG Breast imaging',
        'Areas of interest include abdominal imaging',
        'Fetal diagnostic imaging',
        'gynaecology transvaginal scans',
        'breast sonography and biopsy, 3D and 4D ultrasound',
        'She is also well versed with CT and MRI imaging of acute abdomen',
        'MRI pelvis and performs diagnostic/ therapeutic sonography guided procedures.'
      ]
    },
    {
      name: "Dr. Bharath Kumar V. K",
      slug : "Dr. Bharath Kumar V. K",
      qualification : "MBBS, DMRD",
      department : " specialist in Radiology / Sonology / Ultrasound",
      designation : "Consultant - Radiology",
      experience : "24",
      image : "../../assets/doctor-25.jpeg",
      about : "During my Radiology career I was exposed to all conventional and modern imaging modalities viz Conventional Radiography, Mammography, Ultrasonography including Colour Doppler and 4D, Helical CT, MRI, Digital Subtraction Angiography, Picture...",
      expertise : [
      ]
    },
  ]
}

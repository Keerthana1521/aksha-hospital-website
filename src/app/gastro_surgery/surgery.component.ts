import { Component } from '@angular/core';

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrl: './surgery.component.css'
})
export class SurgeryComponent {
    doctors = [
      {
        name: "Dr. Sumanth Bhoopal ", 
        slug: 'Dr-Sumanth-Bhoopal ', 
        qualification: "MBBS, MS, FSGE", 
        designation: 'Medical Director of Aksha Hospital', 
        designation2: 'Sr. Consultant Gastroenterologist',
        experience: '20', 
        image: '../../assets/doctor-3.png', 
        icon:'../../assets/male.svg',
        about: 'Dr. Sumanth Bhoopal is one of the most eminent doctors in the specialty of Surgical Gastroenterology & Interventional Endoscopy with over 20 years of expertise with 5000+ procedures. He holds vast experience in treating major and minor Gastroenterology...'
        , expertise: [
          'Laparoscopic Surgeries ',
          'Laser Surgeries',
          'HPB Surgeries',
          'Colorectal Diseases',
          'Proctological Conditions (piles, fissures, fistulas)',
          'Endoscopic Investigation',
        ]
      },
      // {
      //   name: "Dr. Bangarswamy V",
      //   slug : "Dr Bangarswamy V",
      //   qualification : "MBBS, MS (General Surgery)",
      //   department : "General Surgery",
      //   designation : "Consultant - General Surgeon",
      //   experience : "66",
      //   image : "../../assets/doctor-23.jpeg",
      //   about : "I worked in government service in the Karnataka State Joint Service during 1958 and retired from government service as a district surgeon in 1996. After retirement, I worked in a PVT hospital as a general consultant...",
      //   expertise : [
      //   ]
      // },
      // {
      //   name: "Dr. Vinay B. N",
      //   slug : "Dr. Vinay B. N",
      //   qualification : "MBBS, MS - General Surgery, Fellowship in Gastroenterology, MCh",
      //   department : "Gastroenterologist,GastroIntestinal Surgeon,Laparoscopic Surgeon",
      //   designation : "Consultant - Gastroenterologist",
      //   experience : "23",
      //   image : "../../assets/doctor-15.png",
      //   about : "Dr. Vinay B N has 10 years of working experience in GI surgery department at various capacities both in large public sector and in private sector hospitals.",
      //   expertise : [
      //   ]
      // },
    ]

    doctor_2 = [
      // {  
      //   name: "Dr. Subhash R C",
      //   slug : "Dr. Subhash R C",
      //   qualification : "MBBS, MS - General Surgery",
      //   department : "General Surgeon, Bariatric Surgeon, Laparoscopic Surgeon",
      //   designation : "Consultant - General Surgeon,Bariatric Surgeon,Laparoscopic Surgeon",
      //   experience : "25",
      //   image : "../../assets/doctor-15.png",
      //   about : "Dr. Subhash has over 20 years of experience conducting surgical procedures in many of the top hospitals in the city. Specialised in minimally invasive surgeries and laser surgeries  and Practology.",
      //   expertise : [
      //   ]
      // },
      // {
      //   name: "Dr. Sachin Digamber Nale",
      //   slug : "Dr. Sachin Digamber Nale",
      //   qualification : "MBBS, MS - General Surgery",
      //   department : "General Surgeon, Laparoscopic Surgeon",
      //   designation : "Consultant - General Surgeon, Laparoscopic Surgeon",
      //   experience : "25",
      //   image : "../../assets/doctor-15.png",
      //   about : "Dr. Sachin Digamber Nale is a Consultant Colorectal Laparoscopic Surgeon currently practicing at Sagar Hospitals, Jayanagar, Bengaluru. BGS Global Richmond Circle, Bengaluru; Rangadore Memorial...",
      //   expertise : [
      //   ]
      // },
      
    ]
}

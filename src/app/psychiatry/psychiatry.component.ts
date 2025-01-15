import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-psychiatry',
  templateUrl: './psychiatry.component.html',
  styleUrl: './psychiatry.component.css'
})
export class PsychiatryComponent {

    constructor(private titleService: Title, private metaService: Meta) {
      this.titleService.setTitle("Best Psychiatric Hospital in Jayanagar Bangalore | Aksha Hospital");  
  
      this.metaService.updateTag({ name: 'description', content: 'Aksha Hospital is the best psychiatric hospital in Jayanagar, Bangalore, offering expert mental health care with experienced specialists.' });
    
      this.metaService.updateTag({ name: 'keywords', content: 'Best psychiatric hospital in Bangalore, , Psychiatric hospital in Jayanagar, Mental health care in Bangalore, Psychiatrists near JP Nagar, Treatment for depression in Banashankari, Aksha Hospital psychiatry services, Counseling and therapy in Jayanagar, Anxiety treatment in Bangalore, Advanced psychiatric care in Bangalore, Top mental health specialists in Bangalore' }
        
      );
    }

  doctors = [
    {
      name: "Dr. Manju Aswath", 
      slug: 'Dr-Manju-Aswath', 
      qualification: "MBBS, MD - Psychiatry", 
      designation: 'Consultant- Psychiatrist', 
      experience: '20', 
      image: '../../assets/doctor-13.png', 
      icon:'../../assets/female.svg',
      about: 'Dr. Manju Ashwath has dedicated over 20 years as a consultant psychiatrist, providing expert care in adult, child, and geriatric psychiatry, as well as in alcohol and substance abuse de-addiction. Her approach is comprehensive, integrating biological, psychological and...', 
      expertise: [
        'Adult psychiatry',
        'Women mental health',
        'De-addiction medicine',
        'Child psychiatry',
        'Geriatric mental health',
      ]
    },
    {
      name: "Ms. Sowmya",
      slug : "Ms-Sowmya",
      qualification : "MSc in Clinical Psychology, BA in Psychology, English and Performing Arts.",
      department : "Clinical Psychology",
      designation : "Clinical Psychologist",
      experience : "3",
      image : "../../assets/doctor-21.jpeg",
      about : "Sowmya is a committed Psychologist specialised in Clinical Psychology with genuine compassion, empathy and dedication.",
      expertise : [
          'Psycho-oncology',
          'Behavioural endocrinology, Psycho-education',
          'Providing Supportive Psychotherapy',
          'Stress management counseling and treating a variety of clinical disorders using an integrative approach'
      ]
    },
  ]
}

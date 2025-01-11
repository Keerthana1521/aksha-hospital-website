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
        designation: 'Consultant & Medical Director ', 
        designation2: 'Surgical Gastroenterologist', 
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
      {
        name: "Dr. Vinay B. N",
        slug : "Dr. Vinay B. N",
        qualification : "MBBS, MS - General Surgery, Fellowship in Gastroenterology, MCh",
        department : "Gastroenterologist,GastroIntestinal Surgeon,Laparoscopic Surgeon",
        designation : "Consultant - Gastroenterologist",
        experience : "23",
        image : "../../assets/doctor-101.png",
        about : "Dr. Vinay B N has 10 years of working experience in GI surgery department at various capacities both in large public sector and in private sector hospitals.",
        expertise : [
        ]
      },
      {  
        name: "Dr. Subhash R C",
        slug : "Dr. Subhash R C",
        qualification : "MBBS, MS - General Surgery",
        department : "General Surgeon, Bariatric Surgeon, Laparoscopic Surgeon",
        designation : "Consultant - General Surgeon,Bariatric Surgeon,Laparoscopic Surgeon",
        experience : "25",
        image : "../../assets/doctor-26.jpeg",
        about : "Dr. Subhash has over 20 years of experience conducting surgical procedures in many of the top hospitals in the city. Specialised in minimally invasive surgeries and laser surgeries  and Practology.",
        expertise : [
        ]
      },
    ]

    doctor_2 = [
      
      // {
      //   name: "Dr. Sachin Digamber Nale",
      //   slug : "Dr. Sachin Digamber Nale",
      //   qualification : "MBBS, MS - General Surgery",
      //   department : "General Surgeon, Laparoscopic Surgeon",
      //   designation : "Consultant - General Surgeon, Laparoscopic Surgeon",
      //   experience : "25",
      //   image : "../../assets/doctor-101.png",
      //   about : "Dr. Sachin Digamber Nale is a Consultant Colorectal Laparoscopic Surgeon currently practicing at Sagar Hospitals, Jayanagar, Bengaluru. BGS Global Richmond Circle, Bengaluru; Rangadore Memorial...",
      //   expertise : [
      //   ]
      // },
      
    ]

    faqs = [
      {
        ques : "What makes Aksha Hospital the Best Gastroenterology Hospital in Jayanagar, Bangalore?",
        ans : "Aksha Hospital is widely recognized as the Best Gastroenterology Hospital in Jayanagar, Bangalore, offering state-of-the-art diagnostic and treatment services for all digestive health issues. With highly experienced specialists like Dr. Sumanth Bhoopal, advanced technology, and personalized care, Aksha Hospital ensures the highest quality of treatment for all patients."
      },
      {
        ques : "Who is the top gastroenterologist in Jayanagar, Bangalore?",
        ans : "Dr. Sumanth Bhoopal, one of the most trusted gastro specialists in Jayanagar Bangalore, provides exceptional care for a wide range of digestive health problems. Patients seeking the Best Gastroenterologist in Jayanagar rely on his expertise and experience for accurate diagnosis and effective treatment."
      },
      {
        ques : "Why should I choose Aksha Hospital for digestive health care?",
        ans : "As the Best Gastroenterology Hospital in Jayanagar, Bangalore, Aksha Hospital provides comprehensive care for conditions affecting the esophagus, stomach, intestines, liver, pancreas, and gallbladder. Our team of gut health specialists and stomach specialists ensures effective and affordable treatment for all digestive health concerns."
      },
      {
        ques : "What services does Aksha Hospital offer for digestive health?",
        ans : "<div>At Aksha Hospital, we provide a wide range of services, including:</div><br><ul><li>Gut disorders treatment</li><li>Treatment for chronic stomach pain</li><li>Advanced endoscopic procedures</li><li>Laparoscopic surgeries for hernia and gallbladder issues</li><li>Expert care for liver and pancreatic conditions</li></ul><br><div>This makes Aksha Hospital the Best Gastroenterology Hospital in Jayanagar, Bangalore, for both medical and surgical gastroenterology.</div>"
      },
      {
        ques : "What is the role of Dr. Sumanth Bhoopal in gastroenterology care at Aksha Hospital?",
        ans : "Dr. Sumanth Bhoopal, a renowned gastroenterologist in Jayanagar Bangalore, specializes in managing complex digestive disorders. His expertise in treating conditions like GERD, gastritis, liver diseases, and pancreatic issues makes him a sought-after stomach specialist in Bangalore."
      },
      {
        ques : "Does Aksha Hospital offer affordable stomach treatments?",
        ans : "Yes, Aksha Hospital is known for providing affordable stomach treatment in Jayanagar Bangalore. Despite being the Best Gastroenterology Hospital in Jayanagar, Bangalore, we ensure cost-effective care without compromising on quality."
      },
      {
        ques : "What laparoscopic surgeries are performed at Aksha Hospital?",
        ans : "<div>Aksha Hospital is the Best Hospital for Laparoscopic Surgery in Jayanagar Bangalore, offering advanced minimally invasive procedures, including:</div><br /><ul><li>Laparoscopic hernia repair</li><li>Gallbladder removal (cholecystectomy)</li><li>Appendectomy</li></ul><br /><div>Our laparoscopic surgeons in Jayanagar Bangalore ensure faster recovery and minimal postoperative discomfort.</div>"
      },
      {
        ques : "What is endoscopic surgery, and how does it help?",
        ans : "Endoscopic surgery is a minimally invasive procedure used to diagnose and treat gastrointestinal issues. At the Best Gastroenterology Hospital in Jayanagar, Bangalore, our specialists perform procedures like gastroscopy, colonoscopy, ERCP, and polypectomies to address digestive health problems effectively."
      },
      {
        ques : "How does Aksha Hospital manage stomach pain and gut disorders?",
        ans : "Aksha Hospital provides comprehensive care for stomach pain and gut disorders. As the Best Gastroenterology Hospital in Jayanagar, Bangalore, we focus on accurate diagnosis and tailored treatments, ensuring patients experience relief and improved digestive health."
      },
      {
        ques : "Can I consult Aksha Hospital for hernia treatment?",
        ans : "Yes, Aksha Hospital is recognized for offering the Best Hernia Treatment in Jayanagar Bangalore. Our expert surgeons use advanced laparoscopic techniques to repair hernias, ensuring minimal scarring and quicker recovery."
      },
      {
        ques : "Why is Aksha Hospital known for being the Best Gastroenterology Hospital in Jayanagar, Bangalore?",
        ans : "Aksha Hospital stands out as the Best Gastroenterology Hospital in Jayanagar, Bangalore, due to our team of skilled gastroenterologists, modern diagnostic tools, and commitment to affordable and effective patient care. From gut health specialists to laparoscopic surgeons, we provide holistic treatment for all digestive health needs."
      },
      {
        ques : "What conditions are treated by gastroenterologists at Aksha Hospital?",
        ans : "<div>Our gastroenterologists in Jayanagar Bangalore treat conditions such as</div><br /><ul><li>Acid reflux and GERD</li><li>Chronic stomach pain</li><li>Irritable bowel syndrome (IBS)</li><li>Liver and pancreatic diseases</li><li>Gallbladder stones</li></ul><br /><div>These comprehensive services make Aksha Hospital the Best Gastroenterology Hospital in Jayanagar, Bangalore.</div>"
      },
      {
        ques : "Who is the best laparoscopic surgeon in Jayanagar?",
        ans : "Our highly skilled laparoscopic surgeons in Jayanagar Bangalore specialize in performing minimally invasive surgeries for hernias, gallbladder issues, and more. Their expertise ensures patients receive world-class care at the Best Hospital for Laparoscopic Surgery in Jayanagar Bangalore."
      },
      {
        ques : "What makes Aksha Hospital a trusted name for gut health?",
        ans : "Aksha Hospital is a trusted name for digestive health care, thanks to our gut health specialists and stomach specialists who provide advanced and compassionate care. Our dedication to improving patient outcomes solidifies our reputation as the Best Gastroenterology Hospital in Jayanagar, Bangalore."
      },
      {
        ques : "What advanced endoscopic procedures are available at Aksha Hospital, the Best Gastroenterology Hospital in Jayanagar, Bangalore?",
        ans : "At Aksha Hospital, recognized as the Best Gastroenterology Hospital in Jayanagar, Bangalore, we offer advanced endoscopic procedures, including gastroscopy, colonoscopy, and ERCP, to diagnose and treat various gastrointestinal conditions with precision and care."
      },
      {
        ques : "How does Aksha Hospital ensure affordable stomach treatment in Jayanagar, Bangalore?",
        ans : "Aksha Hospital is committed to providing affordable stomach treatment in Jayanagar, Bangalore, without compromising on quality. Our transparent pricing and patient-centric approach make us a preferred choice for comprehensive digestive health care."
      },
      {
        ques : "Who is the top-rated stomach doctor at Aksha Hospital in Jayanagar, Bangalore?",
        ans : "Dr. Sumanth Bhoopal, a leading gastroenterologist at Aksha Hospital in Jayanagar, Bangalore, is renowned for his expertise in managing complex gastrointestinal disorders, making him a top-rated stomach doctor in the region."
      },
      {
        ques : "What makes Aksha Hospital the Best Hospital for Laparoscopic Surgery in Jayanagar, Bangalore?",
        ans : "Aksha Hospital is considered the Best Hospital for Laparoscopic Surgery in Jayanagar, Bangalore, due to our state-of-the-art facilities, experienced laparoscopic surgeons, and minimally invasive techniques that ensure faster recovery and minimal discomfort for patients."
      },
      {
        ques : "How can I consult the Best Gastroenterologist in Jayanagar, Bangalore, at Aksha Hospital?",
        ans : "To consult the Best Gastroenterologist in Jayanagar, Bangalore, at Aksha Hospital, you can schedule an appointment through our website or contact our patient care helpline for assistance."
      },
      {
        ques : "What are the common gut disorders treated at Aksha Hospital in Jayanagar, Bangalore?",
        ans : "At Aksha Hospital in Jayanagar, Bangalore, we treat a range of gut disorders, including irritable bowel syndrome (IBS), inflammatory bowel disease (IBD), acid reflux, and other gastrointestinal conditions, providing personalized treatment plans for each patient."
      },
      {
        ques : "Does Aksha Hospital offer Endoscopic Surgery in Jayanagar, Bangalore?",
        ans : "Yes, Aksha Hospital offers advanced endoscopic surgery in Jayanagar, Bangalore, utilizing minimally invasive techniques to diagnose and treat various gastrointestinal issues, ensuring optimal patient outcomes."
      },
      {
        ques : "What services are provided by gastro doctors at Aksha Hospital in Jayanagar, Bangalore?",
        ans : "Gastro doctors at Aksha Hospital in Jayanagar, Bangalore, provide comprehensive services, including diagnostic evaluations, endoscopic procedures, and management of digestive health disorders, ensuring holistic care for patients."
      },
      {
        ques : "How does Aksha Hospital stand out as the Best Hospital for Gastroenterology in Jayanagar, Bangalore?",
        ans : "Aksha Hospital stands out as the Best Hospital for Gastroenterology in Jayanagar, Bangalore, due to our team of experienced specialists, advanced diagnostic tools, and commitment to patient-centered care, ensuring excellence in digestive health services."
      },
      {
        ques : "What laparoscopic surgeries are performed by general surgeons at Aksha Hospital in Jayanagar, Bangalore?",
        ans : "General surgeons at Aksha Hospital in Jayanagar, Bangalore, perform various laparoscopic surgeries, including hernia repair, gallbladder removal, and appendectomies, utilizing minimally invasive techniques for better patient recovery."
      },
    ]
}

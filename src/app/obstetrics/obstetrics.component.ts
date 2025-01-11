import { Component } from '@angular/core';

@Component({
  selector: 'app-obstetrics',
  templateUrl: './obstetrics.component.html',
  styleUrl: './obstetrics.component.css'
})
export class ObstetricsComponent {


    doctors = [
      {
        name: "Dr. Smitha Bhoopal ",
        slug: 'Dr-Smitha-Bhoopal',
        qualification: "MBBS, DGO",
        designation: 'Consultant Obstetrics & Gynaecology',
        experience: '13', image: '../../assets/doctor-2.png',
        icon:'../../assets/female.svg',
        about: 'Dr. Smitha Bhoopal is one of the most renowned, highly progressive and experienced Gynaecologist and Obstetrician in Bengaluru, practicing "Healthy Birthing" with a career spanning 35 years and having delivered more than 9000+ babies in her...',
        expertise: [
               
        ]
      },
      {
        name: "Dr. Madhuri Sumanth", 
        slug: 'Dr-Madhuri-Sumanth', 
        qualification: "MBBS, MS & FMAS", 
        designation: 'Consultant Obstetrics & Gynaecology',
        experience: '16', 
        image: '../../assets/doctor-4.png', 
        icon:'../../assets/female.svg',
        about: 'Dr. Madhuri Sumanth’s practice is “Respect Motherhood” and delivering the best care for all pregnant ladies. She is an experienced and compassionate renowned obstetrician for Normal deliveries and handling high-risk pregnancies. She is best in her commitment...', 
        expertise: [
          'Vaginal Delivery',
          'High Risk Pregnancy',
          'Medical Disorders in Pregnancy',
          'Recurrent Pregnancy Loss Treatment',
          'Emergency Obstetric Care',
          'Vaginal Surgeries',
          'Management of Menopause Related Issues',
          'Gynaecological Surgeries- MIS',
        ]
      },
    ]

    faqs = [
      {
        ques : "Why is Aksha Hospital considered the Best Maternity Hospital in Jayanagar Bangalore?",
        ans : "Aksha Hospital is recognized as the Best Maternity Hospital in Jayanagar Bangalore for its comprehensive care, affordable maternity packages in Jayanagar Bangalore, and advanced facilities. Led by Dr. Madhuri Sumanth, our highly skilled team of gynecologists in Jayanagar Bangalore provides exceptional care during pregnancy, delivery, and postpartum."
      },
      {
        ques : "Who are the best gynecologists at Aksha Hospital in Jayanagar Bangalore?",
        ans : "Our gynecology team is led by Dr. Madhuri Sumanth, a highly experienced and compassionate doctor known as one of the Best Gynecology Doctors in Jayanagar Bangalore. With a focus on women’s wellness, our specialists are equipped to handle everything from routine gynecological checkups to complex high-risk pregnancy support and surgical treatments."
      },
      {
        ques : "What services are offered at Aksha Hospital, the Best Gynecology Hospital in Jayanagar Bangalore?",
        ans : "<div>Aksha Hospital offers a wide range of gynecology and maternity services, including:</div><br /><ul><li>Prenatal care and pregnancy counseling</li><li>Management of high-risk pregnancies</li><li>Female infertility treatment</li><li>Cervical cerclage</li><li>Laparoscopic surgeries for gynecological conditions</li><li>Postpartum care and menopause management</li></ul><br /><div>These services, combined with advanced technology, make Aksha Hospital the Best Gynecology Hospital in Jayanagar Bangalore.</div>"
      },
      {
        ques : "Does Aksha Hospital offer Affordable Maternity Packages in Jayanagar Bangalore?",
        ans : "Yes, Aksha Hospital is known for its affordable maternity packages in Jayanagar Bangalore, offering comprehensive care at every stage of pregnancy. From prenatal checkups to postpartum support, we ensure quality care without compromising affordability, making us the Best Maternity Hospital in Jayanagar Bangalore."
      },
      {
        ques : "How does Aksha Hospital support high-risk pregnancies?",
        ans : "Aksha Hospital specializes in high-risk pregnancy care, providing advanced services like prenatal diagnostics, genetic counseling, and fetal surveillance. Our team of highly qualified pregnancy doctors, including Dr. Madhuri Sumanth, ensures the best outcomes for both mother and baby. This expertise solidifies our reputation as the Best Maternity Hospital in Jayanagar Bangalore."
      },
      {
        ques : "What makes Dr. Madhuri Sumanth one of the Best Gynecologists in Jayanagar Bangalore?",
        ans : "Dr. Madhuri Sumanth, a leading expert in obstetrics and gynecology, is known for her compassionate approach and extensive experience in managing pregnancies, infertility, and gynecological conditions. Her dedication to providing personalized care makes her one of the best gynecologists in Jayanagar Bangalore."
      },
      {
        ques : "Who is the Best Gynecologist in Jayanagar?",
        ans : "Dr. Madhuri Sumanth is one of the best gynecologists in Jayanagar Bangalore, known for her expertise in managing pregnancies, gynecological conditions, and high-risk cases. Her compassionate approach and dedication to women’s wellness make her a trusted choice for comprehensive care."
      },
      {
        ques : "Why is Aksha Hospital the Best Obstetrics and Gynecology Hospital in Bangalore?",
        ans : "Aksha Hospital is recognized as the Best Obstetrics and Gynecology Hospital in Bangalore due to its advanced facilities, expert team of gynecologists, and focus on patient-centric care. With services ranging from maternity care in Bangalore to gynecological surgeries, we are dedicated to enhancing women’s health at every stage of life."
      },
      {
        ques : "Does Aksha Hospital provide Neonatal Specialists in Bangalore?",
        ans : "Yes, Aksha Hospital is equipped with a team of neonatal specialists in Bangalore, ensuring the best care for newborns. Combined with our maternity services, we deliver a seamless experience for mothers and their babies, making us the Best Maternity Hospital in Jayanagar Bangalore."
      },
      {
        ques : "How does Aksha Hospital manage high-risk pregnancies?",
        ans : "Our high-risk pregnancy care includes advanced diagnostic techniques, genetic counseling, and close monitoring by a team of highly qualified pregnancy doctors. With state-of-the-art technology and the expertise of Dr. Madhuri Sumanth, Aksha Hospital ensures safe outcomes for complex pregnancies."
      },
      {
        ques : "Why is Aksha Hospital known for Affordable Pregnancy Packages in Bangalore?",
        ans : "Aksha Hospital offers affordable pregnancy packages in Bangalore, providing quality care from conception to delivery. Our packages include prenatal care, delivery support, and postpartum services, making exceptional maternity care accessible for everyone."
      },
    ]


}

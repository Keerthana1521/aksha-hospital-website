import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css'
})
export class DoctorDetailsComponent {
  doctor: any;
  doctors = [
    {
      name: "Dr. Bhoopal T.S",
      slug: 'Dr-Bhoopal-T-S',
      qualification: " MBBS, MD",
      designation: 'Managing Director',
      experience: '13',
      image: '../../assets/doctor-1.png',
      icon:'../../assets/male.svg',
      about: 'Aksha Hospital is the brainchild of Dr Bhoopal TS.It is the result of his dedication and hard work of his lifetime in the medical field. Dr Bhoopal TS, an eminent doctor, working since its inception in Sri Jayadeva Institute of Cardiology. He has very vast experience and vision in the medical field. He is known for his compassion and empathy towards patients.',
      expertise: [
        
      ]
    },
    {
      name: "Dr. Smitha Bhoopal ",
      slug: 'Dr-Smitha-Bhoopal',
      qualification: "MBBS, DGO",
      designation: 'Obstertrics & Gynaecologist',
      experience: '13', image: '../../assets/doctor-2.png',
      icon:'../../assets/female.svg',
      about: 'Dr Smitha Bhoopal is one of the senior most renowned, highly progressive and experienced Gynaecologist and Obstetrition in Bangalore, practicing "Healthy Birthing" with a career spanning 35 years and has delivered more than 9000+ babies in her three decade career. As a doctor who believed in normal deliveries, she has a high rate of success in natural child birth even in complicated pregnancies. She provides medical and surgical care to women and has particular expertise in pregnancy, childbirth and reproductive disorders, Dr Smitha\'s approach lies in understanding the anxieties that surround fertility, being pregnant, and final delivery. She believes in ethical practice and empowering women to achieve healthier lives.',
      expertise: [
        
      ]
    },
    {
      name: "Dr. Sumanth Bhoopal ", 
      slug: 'Dr-Sumanth-Bhoopal ', 
      qualification: "MBBS, MS, FSGE", 
      designation: 'Medical Director of Aksha Hospital', 
      experience: '20', 
      image: '../../assets/doctor-3.png', 
      icon:'../../assets/male.svg',
      about: 'Dr. Sumanth Bhoopal is one of the most eminent doctors in the specialty of Surgical Gastroenterology & Interventional Endoscopy with over 17 years of expertise with 5000+ procedures. He holds vast experience in treating major and minor Gastroenterology diseases focusing on the entire digestive system which includes the esophagus, stomach, intestines, colon, pancreas, gall bladder, bile ducts, and liver. Also, he has extensive experience in the diagnosis and treatment of Acidity, Inflammatory Bowel Disease, and IBS Treatment. He is compassionate toward his patients and always believes in a patient-first approach.'
      , expertise: [
        'Laparoscopic Surgeries ',
        'Laser Surgeries',
        'HPB Surgeries',
        'TColorectal Diseases',
        'Proctological Conditions (piles, fissures, fistulas)',
        'Endoscopic Investigation',
      ]
    },
    {
      name: "Dr. Madhuri Sumanth", 
      slug: 'Dr-Madhuri-Sumanth', 
      qualification: "MBBS, MS (OBG & GYNAEC) & FMAS", 
      designation: 'Sr. Consultant (Obstetrics & Gynaecologist)', 
      experience: '16', 
      image: '../../assets/doctor-4.png', 
      icon:'../../assets/female.svg',
      about: 'Dr. Madhuri Sumanth’s practice is “Respect Motherhood” and delivering the best care for all pregnant ladies. She is an experienced and compassionate renowned obstetrician for Normal deliveries and handling high-risk pregnancies. She is best in her commitment to patient safety, confidentiality, and a conservative approach while dealing with complex issues. As a full-time Senior Consultant, she holds 13+ years of expertise and more than 3500+ deliveries, handled High-risk cases & managed at the ICU level. Her relentless dedication and commitment to Obstetrics and Gynaecology has helped thousands of women live a better and healthier life.', 
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
    {
      name: "Dr. Deepa Rao", 
      slug: 'Dr-Deepa-Rao', 
      qualification: "MBBS, DNB Family Medicine", 
      designation: 'Consultant – Family Physician', 
      experience: '10', 
      image: '../../assets/doctor-5.png', 
      icon:'../../assets/female.svg',
      about: 'After obtaining her MBBS degree from Government medical College, Bellary(VIMS) she went on to specialise in Family medicine from The Bangalore Hospital, Bangalore, and awarded Diplomate in national board,NBE, New Delhi.She has completed a Certificate Course in Integrated Geriatric Care (CCIGC) and a Certificate Course in Evidence-Based Diabetes Mellitus (CCEBDM), both from PHFI. Additionally, she is a trained diabetic educator and has undergone Echo-Based Training in Dementia Care for general practitioners by NIMHANS.Dr. Deepa Rao is a patient-centric family physician dedicated to serving individuals of all ages. Her mission is to bridge the gap between primary and tertiary care, ensuring holistic and comprehensive healthcare for all her patients.', 
      expertise: [
        'Geriatric Care',
        'Medical Problems in Pregnancy',
        'Chronic Disease Management (Diabetes, Hypertension, Thyroid Disorders)',
        'Old age related problems',
        'Preventive Health & Lifestyle Modification'
      ]
    },
    {
      name: "Dr. Kapil Wajapey", 
      slug: 'Dr-Kapil-Wajapey', 
      qualification: "MBBS, DNB(Internal Medicine)", 
      designation: 'Consultant- Internal Medicine', 
      experience: '10', 
      image: '../../assets/doctor-6.png', 
      icon:'../../assets/male.svg',
      about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...', 
      expertise: [
        
      ]
    },
    {
      name: "Dr. Sushal ShanthaKumar", 
      slug: 'Dr-Sushal-ShanthaKumar', 
      qualification: "MBBS, MS (ORTHOPAEDICS)", 
      experience: '15', 
      designation: 'Consultant - Arthroscopy & Shoulder Surgeon', 
      image: '../../assets/doctor-7.png', 
      icon:'../../assets/male.svg',
      about: 'Dr. Sushal ShanthaKumar is one of the most eminent & top 5 Orthopedic Surgeons in Bengaluru, specializing in Knee and Shoulder: Sports Injuries using arthroscopic (keyhole) and minimally invasive surgeries with over 14 years of extensive experience. He has a vast experience in Orthopedics (Knee & Shoulder), Knee Arthroscopy, Shoulder Arthroscopy, Frozen Shoulder, Sports Injuries, Shoulder Replacement, Shoulder Trauma, and Platelet-rich-plasma injections.', 
      expertise: [
        'Shoulder & Knee Injures',
        'Knee Arthroscopy',
        'Shoulder Arthroscopy',
        'Frozen Shoulder',
        'Sports Injuries',
        'Shoulder Replacement',
        'Shoulder Trauma',
        'Platelet-rich-plasma injections',
      ]
    },
    {
      name: "Dr. Anand Palakshachar", 
      slug: 'Dr-Anand-Palakshachar', 
      qualification: "MBBS, MD General Medicine", 
      designation: 'Consultant- Cardiologist', 
      experience: '8', 
      image: '../../assets/doctor-8.png', 
      icon:'../../assets/male.svg',
      about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...', 
      expertise: [
        
      ]
    },
    {
      name: "Dr. Prasad N A", 
      slug: 'Dr-Prasad-N-A', 
      qualification: "MBBS, MD(Pediatrics), FIAP(Neonatology)", 
      designation: 'Consultant- Pediatrics & Neonatology', 
      experience: '10', 
      image: '../../assets/doctor-9.png', 
      icon:'../../assets/male.svg',
      about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...', 
      expertise: [
       
      ]
    },
    {
      name: "Dr. Avani Hegde",
       slug: 'Dr-Avani-Hegde', 
       qualification: "MBBS, MD Pediatrics", 
       designation: 'Consultant- Pediatrician',
        experience: '8', 
        image: '../../assets/doctor-10.png', 
        icon:'../../assets/female.svg',
        about: 'Dr. Avani Hegde completed her MD in Paediatrics from the Advanced Paediatric Centre, PGIMER, Chandigarh, where she was awarded the institutional bronze medal for her academic excellence. She pursued her sub-specialty training in paediatric and adolescent endocrinology at the Indira Gandhi Institute of Child Health, Bangalore.     Her medical training has provided her with extensive exposure to a wide range of paediatric and adolescent hormonal issues. Dr. Avni Hegde is a faculty member at the Indian Society of Paediatric and Adolescent Endocrinology (ISPAE) and is involved in the IDEAL module for training diabetes educators.     Dr. Avni Hegde has previously served as a faculty member at St. John\'s Medical College. She is an active member of the Indian Academy of Paediatrics and the Indian Society for Paediatric and Adolescent Endocrinology, with numerous national and international publications to her credit. Known for her dedicated and meticulous clinical care, she is loved by both children and parents alike.', 
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
      name: "Dr. Vivekananda Kustagi", 
      slug: 'Dr-Vivekananda-Kustagi', 
      qualification: "", 
      designation: '', 
      experience: '', 
      image: '../../assets/doctor-11.png', 
      icon:'../../assets/male.svg',
      about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...',
      expertise: [
        
      ]
    },
    {
      name: "Dr. Sridutt Shekar", 
      slug: 'Dr-Sridutt-Shekar', 
      qualification: "MBBS, MS ENT", 
      designation: 'Consultant - ENT', 
      experience: '9', 
      image: '../../assets/doctor-12.png',
      icon:'../../assets/male.svg', 
      about: 'Dr. Sridutt Shekar is dedicated to providing top-notch care for patients with ear, nose, and throat conditions. His expertise spans a wide range of ENT procedures and treatments, ensuring comprehensive and effective care for his patients.', 
      expertise: [
        'Functional Endoscopic Sinus Surgery',
        'Micro Ear Surgery',
        'Tonsillectomy',
        'Adenoidectomy',
        'Micro Laryngeal Surgery',
        'Management of Allergic Rhinitis',
        'Management of OSA (Obstructive Sleep Apnea)',
      ]
    },
    {
      name: "Dr. Manju Aswath", 
      slug: 'Dr-Manju-Aswath', 
      qualification: "MBBS, MD - Psychiatry", 
      designation: 'Consultant- Psychiatrist', 
      experience: '20', 
      image: '../../assets/doctor-13.png', 
      icon:'../../assets/female.svg',
      about: 'Dr. Manju Ashwath has dedicated over 20 years as a consultant psychiatrist, providing expert care in adult, child, and geriatric psychiatry, as well as in alcohol and substance abuse de-addiction. Her approach is comprehensive, integrating biological, psychological and social methods to support patients and their families. She has played an active role in the Indian Psychiatric Society - Karnataka Chapter and has contributed to academic discussions and research published in prominent journals. She is also a sought-after speaker, raising awareness about mental health at various educational and corporate institutions', 
      expertise: [
        'Adult psychiatry',
        'Women mental health',
        'De-addiction medicine',
        'Child psychiatry',
        'Geriatric mental health',
      ]
    },
    {
      name: "Dr. Santosh H S ", 
      slug: 'Dr-Santosh-H-S', 
      qualification: "MBBS, FRCP, MRCP", 
      designation: 'Consultant - Endocrinologist', 
      experience: '23', 
      image: '../../assets/doctor-14.png',
      icon:'../../assets/male.svg',
      about: 'Dr. Santosh HS brings over a decade of extensive training and experience in diabetes and endocrinology. He completed his MBBS from Bangalore University and earned his MRCP from the Royal College of Physicians in the UK. Dr. Santosh further honed his skills with specialist training and research in adult growth hormone deficiency and osteoporosis at the University of Liverpool. His professional journey also includes gaining experience in Islet Transplantation from Edmonton, Canada. Dr. Santosh HS is recognized for his comprehensive approach to managing a wide range of endocrine disorders. His interests include complex diabetes management, insulin pump therapy and the care of pregnant women with diabetes. ', 
      expertise: [
        'Diabetes Mellitus Management',
        'Thyroid Disorders',
        'Osteoporosis',
        'Pituitary Diseases',
        'Adrenal Disorders',
        'Parathyroid Disorders',
        'Reproductive Endocrinology',
        'Lipid & Metabolic Disorders (Cholesterol)',
        'Obesity Management',
        'Post-Bariatric Surgery Care',
        'Complex Adult & Adolescent Diabetes Management',
        'Diabetic Emergencies',
        'Insulin Pump Therapy',
        'Antenatal and Gestational Diabetes'
      ]
    },
    {
      name: "Dr. Sayalee Gadgil", 
      slug: 'Dr-Sayalee-Gadgil', 
      qualification: "MBBS, DNB, FRCR(UK)", 
      designation: 'Consultant - Radiology', 
      experience: '7', 
      image: '../../assets/doctor-15.png',
      icon:'../../assets/female.svg', 
      about: 'Dr. Sayalee Gadgil is dedicated to providing precise and detailed imaging services. Her expertise in fetal medicine and abdominal imaging ensures that patients receive accurate diagnoses and top-quality care.', 
      expertise: [
        'Fetal Medicine',
        'Abdominal Imaging',
      ]
    },
    {
      name: "Dr. Sujayendra D M", 
      slug: 'Dr-Sujayendra-D-M', 
      qualification: "MBBS, MS(Ortho), DNB(Ortho)", 
      designation: 'Consultant - Orthopaedics', 
      experience: '', 
      image: '../../assets/doctor-16.png',
      icon:'../../assets/male.svg', 
      about: 'Dr. Sujayendra D. M did his MBBS and MS Orthopaedics from the prestigious Kasturba Medical College, Manipal. Being one of the few colleges with different units for Orthopaedic sub-specialities, he gained wide exposure to hand surgeries, paediatric Orthopaedics, spine surgeries, Arthroscopy, Arthroplasty and complex trauma surgeries. After senior residency at St. John\'s Medical College and KMC, Manipal, he was promoted to Assistant Professor of Orthopaedics at KMC, Manipal. Having completed the basic, advanced and master\'s course from A.O, he has acquired extensive training in Orthopaedics Trauma. He is also a National Faculty (as table instructor) for AO Trauma India. He was awarded a Fellowship in Arthroplasty (joint replacement surgery) by the India Orthopaedic Association.', 
      expertise: [
        'Fracture care',
        'Joint Replacement and Arthroscopy(keyhole) Surgeries',
        'Hand surgeries'
      ]
    },
    {
      name: "Dr. Rajiv E N", 
      slug: 'Dr-Rajiv-E-N', 
      qualification: "MBBS, MD(General Medicine), DM(Nephrology)", 
      department:'Nephrology',
      designation: 'Consultant - Nephrologist', 
      experience: '', 
      image: '../../assets/doctor-17.png',
      icon:'../../assets/male.svg', 
      about: '', 
      expertise: [
        'Nephrology',
        'Dialysis',
        'Renal Transplantation'
      ]
    }
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const doctorSlug = this.route.snapshot.paramMap.get('name');
    this.doctor = this.doctors.find(d => d.slug === doctorSlug);
  }
}

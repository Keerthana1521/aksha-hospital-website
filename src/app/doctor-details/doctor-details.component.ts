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
      about: 'Aksha Hospital is the brainchild of Dr Bhoopal TS.It is the result of his dedication and hard work of his lifetime in the medical field. Dr Bhoopal TS, an eminent doctor, working since its inception in Sri Jayadeva Institute of Cardiology...',
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
      about: 'Dr Smitha Bhoopal is a well-known Gynaecologist in South Bangalore has been working in both government and private healthcare sectors for 40 years. It has always been her dream to start a Super Speciality Hospital, which caters to all the sections of the society...',
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
      about: 'Dr. Sumanth Bhoopal is one of the most eminent doctors in the specialty of Surgical Gastroenterology & Interventional Endoscopy with over 17 years of expertise with 5000+ procedures. He holds vast experience in treating major and minor Gastroenterology...'
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
    {
      name: "Dr. Deepa Rao", 
      slug: 'Dr-Deepa-Rao', 
      qualification: "MBBS, DNB Family Medicine", 
      designation: 'Consultant – Family Physician', 
      experience: '10', 
      image: '../../assets/doctor-5.png', 
      icon:'../../assets/female.svg',
      about: 'After obtaining her MBBS degree from Government medical College, Bellary(VIMS) she went on to specialise in Family medicine from The Bangalore Hospital, Bangalore, and awarded Diplomate in national board,NBE, New Delhi.She has completed a Certificate... ', 
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
      about: 'Dr. Sushal ShanthaKumar is one of the most eminent & top 5 Orthopedic Surgeons in Bengaluru, specializing in Knee and Shoulder: Sports Injuries using arthroscopic (keyhole) and minimally invasive surgeries with over 14 years of extensive experience. He has a vast...', 
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
      name: "Dr. Santosh H S ", 
      slug: 'Dr-Santosh-H-S', 
      qualification: "MBBS, FRCP, MRCP", 
      designation: 'Consultant - Endocrinologist', 
      experience: '23', 
      image: '../../assets/doctor-14.png',
      icon:'../../assets/male.svg',
      about: 'Dr. Santosh HS brings over a decade of extensive training and experience in diabetes and endocrinology. He completed his MBBS from Bangalore University and earned his MRCP from the Royal College of Physicians in the UK. Dr. Santosh further honed his skills with specialist training...', 
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
      designation: 'Consultant - ENT', 
      experience: '7', 
      image: '../../assets/doctor-15.png',
      icon:'../../assets/female.svg', 
      about: 'Dr. Sayalee Gadgil is dedicated to providing precise and detailed imaging services. Her expertise in fetal medicine and abdominal imaging ensures that patients receive accurate diagnoses and top-quality care.', 
      expertise: [
        'Fetal Medicine',
        'Abdominal Imaging',
      ]
    },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const doctorSlug = this.route.snapshot.paramMap.get('name');
    this.doctor = this.doctors.find(d => d.slug === doctorSlug);
  }
}

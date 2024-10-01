import { Component, ElementRef, OnInit, ViewChild,OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('counterSection', { static: true }) counterSection!: ElementRef;
  @ViewChild('carousel') carousel!: ElementRef;  // Reference to the icon carousel

  stopCounters: any[] = [];
  animateOutgoing: boolean = false;
  animateIncoming: boolean = false;
  animateImageOut = false;
  animateImageIn = false;
   // This holds the currently selected department's doctors
   filteredDoctors: any[] = [];
   selectedDepartment: any;
   selectedIconDepartment: any;

  docDepartments = [
    { name: 'Founder', selected: true }, // Pre-select Founder by default
    { name: 'Obstetrics & Gynecologists', selected: false },
    { name: 'Gastrosurgery', selected: false },
    { name: 'Pediatrician', selected: false },
    { name: 'Endocrinology', selected: false },
    { name: 'Vascular Surgeries', selected: false },
    { name: 'Orthopaedic', selected: false },
    { name: 'General Physician', selected: false },
    { name: 'Dermatology', selected: false },
    { name: 'Urology', selected: false },
    { name: 'Radiology', selected: false },
    { name: 'Nephrology', selected: false },
    { name: 'Physiotherapy', selected: false },
    { name: 'Anesthesia', selected: false },
    { name: 'Cardiology', selected: false },
    { name: 'ENT', selected: false },
    { name: 'Oncology and Onco Surgery', selected: false },
    { name: 'Neurology', selected: false },
    { name: 'Psychology', selected: false },
  ];

  // Method to select a department
  // Method to filter doctors by selected department
  filterDoctorsByDepartment(department: any) {
    this.filteredDoctors = this.doctors.filter(doctor => doctor.department === department.name);
  }


  // Method to select a department
  selectDepartment(department: any) {
    // Deselect all departments and select the clicked one
    this.docDepartments.forEach(dep => dep.selected = false);
    department.selected = true;

    // Set the selected department and filter doctors
    // this.selectedDepartment = department;
    this.filterDoctorsByDepartment(department);
  }

  // List of doctors with names, titles, experience, and information
  doctors = [
    {
      name: "Dr. Bhoopal T.S",
      slug: 'Dr-Bhoopal-T-S',
      department: "Founder",
      qualification: " MBBS, MD",
      designation: 'Managing Director',
      experience: '40',
      image: '../../assets/scroll-doctor-1.png',
      icon:'../../assets/male.svg',
      about: 'Aksha Hospital is the brainchild of Dr Bhoopal TS.It is the result of his dedication and hard work of his lifetime in the medical field. Dr Bhoopal TS, an eminent doctor, working since its inception in Sri Jayadeva Institute of Cardiology. He has very vast experience and vision in the medical field. He is known for his compassion and empathy towards patients.',
      expertise: [
        
      ]
    },
    {
      name: "Dr. Smitha Bhoopal ",
      slug: 'Dr-Smitha-Bhoopal',
      department: "Obstetrics & Gynecologists",
      qualification: "MBBS, DGO",
      designation: 'Sr. Consultant (Obstetrics & Gynaecologist)',
      experience: '40', image: '../../assets/scroll-doctor-2.png',
      icon:'../../assets/female.svg',
      about: 'Dr Smitha Bhoopal is one of the senior most renowned, highly progressive and experienced Gynaecologist and Obstetrition in Bengaluru, practicing "Healthy Birthing" with a career spanning 35 years and has delivered more than 9000+ babies in her three decade career. ',
      expertise: [
        
      ]
    },
    {
      name: "Dr. Sumanth Bhoopal ", 
      slug: 'Dr-Sumanth-Bhoopal ', 
      department: "Gastrosurgery",
      qualification: "MBBS, MS, FSGE", 
      designation: 'Medical Director of Aksha Hospital', 
      experience: '20', 
      image: '../../assets/scroll-doctor-3.png', 
      icon:'../../assets/male.svg',
      about: 'Dr. Sumanth Bhoopal is one of the most eminent doctors in the specialty of Surgical Gastroenterology & Interventional Endoscopy with over 17 years of expertise with 5000+ procedures. He holds vast experience in treating major and minor Gastroenterology diseases...'
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
      department: "Obstetrics & Gynecologists",
      qualification: "MBBS, MS (OBG & GYNAEC) & FMAS", 
      designation: 'Sr. Consultant (Obstetrics & Gynaecologist)', 
      experience: '16', 
      image: '../../assets/scroll-doctor-4.png', 
      icon:'../../assets/female.svg',
      about: 'Dr. Madhuri Sumanth’s practice is “Respect Motherhood” and delivering the best care for all pregnant ladies. She is an experienced and compassionate renowned obstetrician for...', 
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
      department: "General Physician",
      qualification: "MBBS, DNB Family Medicine", 
      designation: 'Consultant – Family Physician', 
      experience: '10', 
      image: '../../assets/scroll-doctor-5.png', 
      icon:'../../assets/female.svg',
      about: 'After obtaining her MBBS degree from Government medical College, Bellary(VIMS) she went on to specialise in Family medicine from The Bengaluru Hospital, Bengaluru, and awarded Diplomate in national board,NBE, New Delhi.She has completed a Certificate Course in Integrated Geriatric Care (CCIGC)... ', 
      expertise: [
        'Geriatric Care',
        'Medical Problems in Pregnancy',
        'Chronic Disease Management (Diabetes, Hypertension, Thyroid Disorders)',
        'Old age related problems',
        'Preventive Health & Lifestyle Modification'
      ]
    },
    // {
    //   name: "Dr. Kapil Wajapey", 
    //   slug: 'Dr-Kapil-Wajapey',
    //   department:'General Physician', 
    //   qualification: "MBBS, DNB(Internal Medicine)", 
    //   designation: 'Consultant- Internal Medicine', 
    //   experience: '10', 
    //   image: '../../assets/scroll-doctor-6.png', 
    //   icon:'../../assets/male.svg',
    //   about: '', 
    //   expertise: [
        
    //   ]
    // },
    {
      name: "Dr. Sushal ShanthaKumar", 
      slug: 'Dr-Sushal-ShanthaKumar', 
      qualification: "MBBS, MS (ORTHOPAEDICS)", 
      department:'Orthopaedic',
      experience: '15', 
      designation: 'Consultant - Arthroscopy & Shoulder Surgeon', 
      image: '../../assets/scroll-doctor-7.png', 
      icon:'../../assets/male.svg',
      about: 'Dr. Sushal ShanthaKumar is one of the most eminent & top 5 Orthopedic Surgeons in Bengaluru, specializing in Knee and Shoulder: Sports Injuries using arthroscopic (keyhole) and minimally ', 
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
    // {
    //   name: "Dr. Anand Palakshachar", 
    //   slug: 'Dr-Anand-Palakshachar', 
    //   department:'Cardiology',
    //   qualification: "MBBS, MD General Medicine", 
    //   designation: 'Consultant- Cardiologist', 
    //   experience: '8', 
    //   image: '../../assets/scroll-doctor-8.png', 
    //   icon:'../../assets/male.svg',
    //   about: '', 
    //   expertise: [
        
    //   ]
    // },
    // {
    //   name: "Dr. Prasad N A", 
    //   slug: 'Dr-Prasad-N-A', 
    //   department:'Pediatrician',
    //   qualification: "MBBS, MD(Pediatrics), FIAP(Neonatology)", 
    //   designation: 'Consultant- Pediatrics & Neonatology', 
    //   experience: '10', 
    //   image: '../../assets/scroll-doctor-9.png', 
    //   icon:'../../assets/male.svg',
    //   about: '', 
    //   expertise: [
       
    //   ]
    // },
    {
      name: "Dr. Avani Hegde",
       slug: 'Dr-Avani-Hegde', 
       qualification: "MBBS, MD Pediatrics", 
       department:'Pediatrician',
       designation: 'Consultant- Paediatrics',
        experience: '8', 
        image: '../../assets/scroll-doctor-10.png', 
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
      name: "Dr. Sridutt Shekar", 
      slug: 'Dr-Sridutt-Shekar', 
      qualification: "MBBS, MS ENT", 
      department:'ENT',
      designation: 'Consultant - ENT', 
      experience: '9', 
      image: '../../assets/scroll-doctor-12.png',
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
      department:'Psychology',
      experience: '20', 
      image: '../../assets/scroll-doctor-13.png', 
      icon:'../../assets/female.svg',
      about: 'Dr. Manju Ashwath has dedicated over 20 years as a consultant psychiatrist, providing expert care in adult, child, and geriatric psychiatry, as well as in alcohol and substance abuse de-addiction. ', 
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
      department:'Endocrinology',
      qualification: "MBBS, FRCP, MRCP", 
      designation: 'Consultant - Endocrinologist', 
      experience: '23', 
      image: '../../assets/scroll-doctor-14.png',
      icon:'../../assets/male.svg',
      about: 'Dr. Santosh HS brings over a decade of extensive training and experience in diabetes and endocrinology. He completed his MBBS from Bengaluru University and earned his MRCP from the Royal College of Physicians in the UK. ', 
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
      department:'Radiology',
      qualification: "MBBS, DNB, FRCR(UK)", 
      designation: 'Consultant - Radiologist', 
      experience: '7', 
      image: '../../assets/doctor-24.jpg',
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
      department:'Orthopaedic',
      designation: 'Consultant - Orthopaedics', 
      experience: '10', 
      image: '../../assets/scroll-doctor-16.png',
      icon:'../../assets/male.svg', 
      about: 'Dr. Sujayendra D. M did his MBBS and MS Orthopaedics from the prestigious Kasturba Medical College, Manipal. Being one of the few colleges with different units for Orthopaedic sub-specialities,', 
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
      experience: '15', 
      image: '../../assets/scroll-doctor-17.png',
      icon:'../../assets/male.svg', 
      about: 'Embark on a journey of kidney care guided by the genuine expertise of Dr. Rajiv, our Lead Consultant in Nephrology and Kidney Transplantation. Dr. Rajiv isn\'t just a doctor; he is a partner...', 
      expertise: [
        'Nephrology',
        'Dialysis',
        'Renal Transplantation'
      ]
    },
    {
      name: "Dr. Vijaya Kumar", 
      slug: 'Dr-Vijaya-Kumar', 
      qualification: "MBBS. DA DNB in Anesthesiology ", 
      department:'Anesthesia',
      designation: 'Consultant - Anesthesiology', 
      experience: '22', 
      image: '../../assets/doctor-18.jpg',
      icon:'../../assets/male.svg', 
      about: 'Given anaesthesia for major and complicated cases experience in pain management experience in ICU speciality ', 
      expertise: [
        'Anesthesiology'
      ]
    },
    {
      name: "Dr. Palaniappan S",
      slug : "Dr-Palaniappan-S",
      qualification : "BPT, MSc(Y&N), FCR.",
      department : "Physiotherapy",
      experience : "20",
      image : "../../assets/doctor-19.jpg",
      about : "Ortho, stroke, cardiac Rehabilitation",
      expertise : [
        'Cardiac & Neuro Rehabilitation'
      ]   
    },

    {
      name: "Dr. Sowmya S",
      slug : "Dr-Sowmya-S",
      qualification : "MSc in Clinical Psychology, BA in Psychology, English, and Performing Arts.",
      department : "Psychology",
      designation : "Consultant - Clinical Psychology",
      experience : "3",
      image : "../../assets/doctor-21.jpg",
      about : "Sowmya is a committed Psychologist specialised in Clinical Psychology with genuine compassion, empathy and dedication. ",
      expertise : [
          'Psycho-oncology',
          'Behavioural endocrinology, Psycho-education',
          'Providing Supportive Psychotherapy',
          'Stress management counseling and treating a variety of clinical disorders using an integrative approach'
      ]
    },
    {
      name: "Dr. Vivekanand Kustagi",
      slug : "Dr-Vivekanand-Kustagi",
      qualification : "MBBS, MD, DNB, FIAA, FIAP, PGPN (Boston), and MBA",
      department : "Pediatrician",
      designation: 'Consultant - Paediatrics', 
      experience : "28",
      image : "../../assets/scroll-doctor-11.png",
      about : "I am a professor in Paediatrics , having special interest in paediatric Nutrition and paediatric Allergy and Infectious Diseases .Member of many international and National paediatric associations ",
      expertise : [
        'Endo-urology',
        'Uro-oncology',
        'Genito-urinary',
        'reconstruction',
        'kidney stones'
      ]
    },
  ]

  // The currently selected doctor (initialized with the first doctor)
  selectedDoctor = this.doctors[0];

  // Method to select a doctor when clicked
  selectDoctor(doctor: any) {
    this.selectedDoctor = doctor;
  }
  numbers = [
    { number: 0, target: 20, statement: 'Expertise Doctors', showPlus: true },
    { number: 0, target: 50, statement: 'Qualified Staff', showPlus: true },
    { number: 0, target: 400, statement: 'High-Risk Pregnancy Treatment', showPlus: true },
    { number: 0, target: 7000, statement: 'Happy Patients', showPlus: true },
    { number: 0, target: 500, statement: 'Laparoscopic Surgeries', showPlus: true },
    { number: 0, target: 50, statement: 'Medical Beds', showPlus: true }
  ];
  carouselItems = [
    {
      heading: 'Aksha Hospital',
      text: 'Aksha Hospital is committed towards delivering an exceptional healthcare experience focused on compassionate, patient-centered care. Our facility is equipped with the latest medical technology and staffed by highly skilled professionals. We provide a comprehensive range of services, ensuring quality treatment and a supportive environment for all our patients.',
      image: '../../assets/caro-1.png', // Replace with actual image path
      bgImage: '../../assets/caro-bg-1.png', // Replace with background image path
      nextImage:'../../assets/caro-sm-2.png',
      buttonColor:'#9B9F9B',
      route: '/about-us' // Add a route property for each item
    },
    {
      heading: 'NICU',
      text: 'Our Neonatal Intensive Care Unit (NICU) at Aksha Hospital provides specialized care for premature and critically ill newborns. Equipped with cutting-edge technology and a dedicated team of experts, we focus on the delicate needs of newborns to ensure the best possible outcomes. Compassionate care and advanced treatment are at the heart of our NICU services.',
      image: '../../assets/caro-2.png',
      bgImage: '../../assets/caro-bg-2.png',
      nextImage:'../../assets/caro-sm-3.png',
      buttonColor:'#7E729F',
      route: '/services' // Navigate to services page
    },
    {
      heading: 'ICU',
      text: 'Our Intensive Care Unit (ICU) at Aksha Hospital offers critical care with advanced monitoring and life-support systems. Our expert team provides round-the-clock care for patients with severe and life-threatening conditions. We are dedicated to delivering personalized, high-quality care to support recovery and improve patient outcomes.',
      image: '../../assets/caro-3.png',
      bgImage: '../../assets/caro-bg-3.png',
      nextImage:'../../assets/caro-sm-4.png',
      buttonColor:'#4E6C73',
      route: '/services' // Navigate to services page
   
    },
    {
      heading: 'LAB',
      text: 'At Aksha Hospital, our state-of-the-art lab services offer accurate and timely diagnostic results. We utilize advanced technology and follow rigorous quality standards to ensure reliable outcomes. Our skilled team is dedicated to providing comprehensive tests and prompt reports. Trust us for precise diagnostics that support effective treatment plans.',
      image: '../../assets/caro-4.png',
      bgImage: '../../assets/caro-bg-4.png',
      nextImage:'../../assets/caro-sm-1.png',
      buttonColor:'#557181',
      route: '/services' // Navigate to services page
    }
  ];
  cards = [
    {
      icon: '../../assets/emergency.svg',
      title: '24 hours ',
      title_1:'Emergency',
      image:'../../assets/ambulance.png'
    },
    {
      icon: '../../assets/icu.svg',
      title: '24x7 Fully ',
      title_1:'Equipped ICU',
      image:'../../assets/icu.png'
    },
    {
      icon: '../../assets/lab.svg',
      title: '24x7 ',
      title_1:'Laboratory',
      image:'../../assets/lab.png'
    },
    {
      icon: '../../assets/pharmacy.svg',
      title: '24x7 ',
      title_1:'Pharmacy',
      image:'../../assets/pharmacy.png'
    },
    {
      icon:'../../assets/nicu.svg',
      title:'NICU',
      image:'../../assets/nicu.png'
    }
  ];
  departments = [
    {
      name: 'Obstetrics & Gynecologists',
      description:
        'Maternal Care/Checkup is a comprehensive program for healthcare professionals, mainly gynecologists and obstetricians, covering all the common and important problems that occur during pregnancy, labor, delivery, and the postpartum period. While motherhood is often a positive and fulfilling experience, for many women, it is associated with suffering, ill health, and even death. The risks or conditions that were pre-existing or that had developed during the pregnancy highly influence the health of a mother.',
      image: 'assets/OG.png',
      icon: 'assets/dept-icon-1.png',
      route:'obsterics-and-gynecology'
    },
    {
      name: 'High-Risk Pregnancy Care',
      description:
        'High-risk pregnancies are pregnancies that have the chance of developing complications for both mother and child. People who are underweight or overweight, younger than 18 or older than 35, anemic, into their 5th pregnancy or more; have had previous preterm births, had given births to a large or small baby, had a previous pregnancy loss, history of genetic disease, substance abuse, previous cases of twins or triplets, taken infertility medications, or have medical conditions like high BP, heart disease, etc.',
      image: 'assets/dept-1.jpg',
      icon: 'assets/dept-icon-2.png',
      route:'obsterics-and-gynecology'
    },
    {
      name: 'Female Infertility Treatment',
      description:
        'Infertility treatment helps couples who are unable to conceive with conception. There are various types of treatment methods based on the cause of infertility. In the case of women, infertility is treated by medications or fertility drugs in cases of hormonal imbalance or problems related to ovulation. Surgery in case the fallopian tubes are blocked or similar such situations Use of assistive reproductive technology (ART) to solve infertility problems.',
      image: 'assets/dept-2.png',
      icon: 'assets/dept-icon-3.png',
      route:'obsterics-and-gynecology'
    },
    {
      name: 'Surgery + Gastrosurgery',
      description:
        'Gastroenterology is a specialty of medicine that focuses on the diseases affecting the digestive system. This includes the esophagus, stomach, small intestine, colon and rectum, pancreas, gallbladder, bile ducts, and liver. Though many types of digestive problems can be treated with lifestyle changes and medicines, some of them might require a surgical intervention. Surgical gastroenterology is a part of gastroenterology that is related to treating gastric disorders that might require surgical intervention.',
      image: 'assets/dept-3.png',
      icon: 'assets/dept-icon-4.png',
      route:'surgery'
    },
    {
      name: 'Vascular Surgeries',
      description:'Vascular surgery is a surgical subspeciality in which diseases of the vascular system, or arteries, veins, and lymphatic circulation, are managed by medical therapy, minimally invasive catheter procedures, and surgical reconstruction. Some of the vascular surgeries that our team performs include varicose vein Trendelenburg operation, diabetic foot care, and laser procedures',
      image: 'assets/dept-4.png',
      icon: 'assets/dept-icon-5.png',
      route:'vascular-surgery'
    },
    {
      name: 'Endoscopic Procedures',
      description:
        'Endoscopic surgery is performed using a scope, a flexible tube with a camera, and light at the tip. This allows your surgeon to see inside the organ and perform procedures without making major incisions, allowing for easier recovery time and less pain and discomfort. Some procedures performed include: diagnostic procedures in gastroscopy and colonoscopy Therapeutic procedures like banding, sclerotherapy, balloon esophagus dilatation, stent placements, PEG tube insertions, and polypectomies. ERCP procedures are also done here.',
      image: 'assets/dept-5.png',
      icon: 'assets/dept-icon-6.png',
      route:''
    },
    {
      name: 'Cardiology',
      description:'Cardiology is a medical specialty and a branch of internal medicine concerned with disorders of the heart. It deals with the diagnosis and treatment of such conditions as congenital heart defects, coronary artery disease, electrophysiology, heart failure, and valvular heart disease. Subspecialties of the cardiology field include cardiac electrophysiology, echocardiography, interventional cardiology, and nuclear cardiology.',
      image: 'assets/dept-6.png',
      icon: 'assets/dept-icon-7.png',
      route:'cardiology'
    },
    {
      name: 'Paediatric & NICU',
      description:
        'Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18. NICU refers to the Neonatal Intensive Care Unit. The birth of a baby is a wonderful and very complex process. Many physical and emotional changes occur for both mother and baby. A baby must make many physical adjustments to life outside the mother’s body. Leaving the uterus means that a baby can no longer depend on the mother’s blood supply and placenta for important body functions. We can manage preborn babies from 32 weeks.',
      image: 'assets/dept-7.png',
      icon: 'assets/dept-icon-8.png',
      route:"pediatrics"
    },
    {
      name: 'General Physician',
      description:
        'With healthcare now becoming a priority to most, even the smallest signs of sickness receive care. From an itchy throat to a mild cough or a spike in temperature, many rush to clinics to seek care from general physicians. Our general physicians are highly trained specialists who provide non-surgical health care to patients. They evaluate the medical condition of the patients by suggesting a few lab tests to finalize the diagnosis. They also perform health check-ups on a regular basis to evaluate the status of a disease or medical condition.',
      image: 'assets/dept-8.png',
      icon: 'assets/dept-icon-9.png',
      route:''
    },

    // Add more departments as needed
  ];
  viewMore(department: any) {
    this.router.navigate([department.route]);
  }

  currentDepartmentIndex = 0; // Track the current index for automatic change
  autoChangeInterval: any; // To store the interval reference
  currentIndex = 0;
  autoCarouselChangeInterval: any;

   // For detecting mobile
   isMobile = false;

   @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 768;
  }
  // When hovering over an icon, update the selected department
  onHover(index: number) {
    // If hovering over an icon, set the selected department
    // if (index >= 0) {
    //   this.selectedDepartment = this.departments[index];
    //   this.currentDepartmentIndex = index; // Update the index for the automatic cycle
    // }
    this.changeDepartment(index, false);
  }
  constructor(private router: Router) {}
  navigateToPage() {
    const currentRoute = this.carouselItems[this.currentIndex].route;
    this.router.navigate([currentRoute]); // Navigate based on the route of the current item
  }
  about(){
    this.router.navigate(['/about-us']);
  }
  navigateToDoctor(slug: string) {
    this.router.navigate(['/doctor', slug]);
  }
ngOnInit() {
  this.selectDepartment(this.docDepartments[0]); 
  this.selectedDepartment= this.departments[0];// Select the first department by default
  console.log('Selected department:', this.selectedDepartment);
  this.autoChangeInterval = setInterval(() => {
    // this.currentDepartmentIndex = (this.currentDepartmentIndex + 1) % this.departments.length;
    // this.selectedDepartment = this.departments[this.currentDepartmentIndex];
    this.changeDepartment((this.currentDepartmentIndex + 1) % this.departments.length, true);
  }, 9000); // 20 seconds interval
  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the section is visible
  };
   // Start the automatic carousel change every 2 seconds


  const observer = new IntersectionObserver(this.startCounter.bind(this), options);
  observer.observe(this.counterSection.nativeElement);

  console.log('Observer initialized');


  this.isMobile = window.innerWidth <= 768;
}
nextSlide() {
  // Trigger the outgoing animation
  this.animateOutgoing = true;
  this.animateIncoming = false;
  this.animateImageOut = true;
  this.animateImageIn = false;

  // Allow the outgoing animation to complete, then change slide
  setTimeout(() => {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;

    // Reset outgoing animation and trigger incoming animation
    this.animateOutgoing = false;
    this.animateIncoming = true;
    this.animateImageOut = false;
    this.animateImageIn = true;
    
  }, 500); // Timing should match the animation duration (0.5s here)
}
goToSlide(index: number) {
  if (index !== this.currentIndex) {
    this.currentIndex = index;
    // Handle any animation logic if needed
  }
}
// Function to go to the previous slide
prevSlide() {
  this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
}

// Function to scroll left when clicking the left arrow
scrollLeft() {
  const carouselElement = this.carousel.nativeElement;
  carouselElement.scrollBy({
    left: -150, // Adjust scroll distance based on icon size
    behavior: 'smooth',
  });
}
// Function to scroll right

  scrollRight() {
    const carousel = document.querySelector('.icon-carousel');
    if (carousel) {
      carousel.scrollBy({
        left: 150, // Adjust scroll distance based on icon size
        behavior: 'smooth',
      });
    }
  }

   // Change department and scroll icon into view
   changeDepartment(index: number,autoScroll: boolean = false) {
    this.currentDepartmentIndex = index;
    this.selectedDepartment = this.departments[index];
    if (autoScroll) {
      this.scrollToIcon(index);
    }
  }

  // Scroll the corresponding icon into view
  scrollToIcon(index: number) {
    const carouselElement = this.carousel.nativeElement;
    const iconWidth = carouselElement.querySelector('.icon-item').offsetWidth; // Get the width of one icon
    const scrollPosition = iconWidth * index; // Calculate the scroll position

    // Scroll the carousel horizontally to the correct position
    carouselElement.scroll({
      left: scrollPosition,
      behavior: 'smooth',
    });
    console.log('Scrolling to icon');
  }
startCounter(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Section is intersecting, starting counter');

      // Start incrementing the counters
      this.numbers.forEach((_, index) => {
        this.incrementCounter(index);
      });

      observer.unobserve(entry.target); // Stop observing once counter starts
    }
  });
}
incrementCounter(index: number) {
  const target = this.numbers[index].target;
  const duration = 2000; // Duration in milliseconds
  const intervalTime = 10; // Interval time in milliseconds
  const totalSteps = duration / intervalTime;
  const incrementStep = Math.ceil(target / totalSteps);

  this.stopCounters[index] = setInterval(() => {
    if (this.numbers[index].number < target) {
      this.numbers[index].number = Math.min(this.numbers[index].number + incrementStep, target);
    } else {
      clearInterval(this.stopCounters[index]);
    }
  }, intervalTime);
}
ngOnDestroy() {
  // Clear the interval when the component is destroyed
  if (this.autoChangeInterval) {
    clearInterval(this.autoChangeInterval);
  }
  if (this.autoCarouselChangeInterval) {
    clearInterval(this.autoCarouselChangeInterval);
  }
}
}
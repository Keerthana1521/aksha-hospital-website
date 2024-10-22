import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  doctors = [
    {
      name: "Dr. T S Bhoopal",
      slug: 'Dr-Bhoopal-T-S',
      qualification: " MBBS, MD",
      designation: 'Managing Director',
      designation2 : "Radio Diagnosis",
      experience: '40',
      image: '../../assets/doctor-1.png',
      icon:'../../assets/male.svg',
      about: 'Aksha Hospital is the brainchild of Dr. T S Bhoopal. It is the result of his dedication and hard work of his lifetime in the medical field. Dr. T S Bhoopal, an eminent doctor, working since its inception in Sri Jayadeva Institute of Cardiology...',
      expertise: [
        
      ]
    },
    {
      name: "Dr. Smitha Bhoopal ",
      slug: 'Dr-Smitha-Bhoopal',
      qualification: "MBBS, DGO",
      designation: 'Consultant Obstetrics & Gynaecology',
      experience: '40', image: '../../assets/doctor-2.png',
      icon:'../../assets/female.svg',
      about: 'Dr. Smitha Bhoopal is one of the most renowned, highly progressive and experienced Gynaecologist and Obstetrician in Bengaluru, practicing "Healthy Birthing" with a career spanning 35 years and having delivered more than 9000+ babies in her...',
      expertise: [
        
      ]
    },
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
    {
      name: "Dr. Deepa Rao", 
      slug: 'Dr-Deepa-Rao', 
      qualification: "MBBS, DNB Family Medicine", 
      designation: 'Consultant – Family Physician', 
      experience: '10', 
      image: '../../assets/doctor-5.png', 
      icon:'../../assets/female.svg',
      about: 'After obtaining her MBBS degree from Government medical College, Bellary(VIMS) she went on to specialise in Family medicine from The Bengaluru Hospital, Bengaluru, and awarded Diplomate in national board, NBE, New Delhi. She has completed a Certificate... ', 
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
      qualification: "MBBS, DNB - General Medicine,MRCP(UK). CCEBDM Certification in Diabetes", 
      designation: 'Consultant- Internal Medicine', 
      experience: '13', 
      image: '../../assets/doctor-6.png', 
      icon:'../../assets/male.svg',
      about: 'Dr. Kapil Wajapey is a Internal Medicine in Jayanagar 7 Block, Bengaluru and has an experience of 13 years in this field. Dr. Kapil Wajapey practices at Aksha Hospital in Jayanagar 7 Block, Bengaluru. He completed MBBS from R G U H S in 2011 and DNB...', 
      expertise: [
        
      ]
    },  
    {
      name: "Dr. Sushal Shantha Kumar", 
      slug: 'Dr-Sushal-Shantha-Kumar', 
      qualification: "MBBS, MS (ORTHOPAEDICS)", 
      experience: '15', 
      designation: 'Consultant - Arthroscopy & Shoulder Surgeon', 
      image: '../../assets/doctor-7.png', 
      icon:'../../assets/male.svg',
      about: 'Dr. Sushal ShanthaKumar is one of the most eminent & top 5 Orthopedic Surgeons in Bengaluru, specializing in Knee and Shoulder: Sports Injuries using arthroscopic (keyhole) and minimally invasive surgeries with over 15 years of extensive experience. He has a vast...', 
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
      slug : "Dr. Anand Palakshachar",
      qualification : "MBBS, MD - General Medicine, DM - Cardiology",
      department : "Cardiology",
      designation : "Consultant - Cardiologist",
      experience : "7",
      image : "../../assets/doctor-8.png",
      about : "Dr. Anand P is a Cardiologist in Banashankari, Bengaluru and has an experience of 7 years in this field. Dr. Anand P practices at Devagiri Hospital - Powered by Medisync in Banashankari, Bengaluru and Nano Hospital in Uttarahalli, Bengaluru. He completed MBBS from RGUHS...",
      expertise : [
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
      name: "Dr. Vivekanand Kustagi",
      slug : "Dr-Vivekanand-Kustagi",
      qualification : "MBBS, MD, DNB, FIAA, FIAP, PGPN (Boston), and MBA",
      department : "Paediatrics",
      designation: 'Consultant - Paediatrics', 
      experience : "28",
      image : "../../assets/doctor-11.png",
      about : "I am a professor in Paediatrics, having special interest in paediatric Nutrition and paediatric Allergy and Infectious Diseases. Member of many International and National Paediatric Associations.",
      expertise : [
        'Endo-urology',
        'Uro-oncology',
        'Genito-urinary',
        'reconstruction',
        'kidney stones'
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
      name: "Dr. Santhosh H S ", 
      slug: 'Dr-Santosh-H-S', 
      qualification: "MBBS, FRCP, MRCP", 
      designation: 'Consultant - Endocrinologist', 
      experience: '23', 
      image: '../../assets/doctor-14.png',
      icon:'../../assets/male.svg',
      about: 'Dr. Santosh H S brings extensive training and experience in diabetes and endocrinology. He completed his MBBS from Bengaluru University and earned his MRCP from the Royal College of Physicians in the UK. Dr. Santosh further honed his skills with specialist training and...', 
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
      name: "Dr. Sujayendra D. M", 
      slug: 'Dr-Sujayendra-D-M', 
      qualification: "MBBS, MS - Orthopaedics, DNB - Orthopedics/Orthopedic Surgery", 
      designation: 'Consultant - Orthopaedics', 
      experience: '10', 
      image: '../../assets/doctor-16.png',
      icon:'../../assets/male.svg', 
      about: "Dr. Sujayendra D M is a Orthopaedic surgeon with higher training in musculoskeletal trauma and arthroplasty, 10 Years Experience Overall (7 years as specialist) Dr. Sujayendra D M practices at...", 
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
      image: '../../assets/doctor-17.png',
      icon:'../../assets/male.svg', 
      about: "Embark on a journey of kidney care guided by the genuine expertise of Dr. Rajiv, our Lead Consultant in Nephrology and Kidney Transplantation. Dr. Rajiv isn't just a doctor; he is a partner...", 
      expertise: [
        'Nephrology',
        'Dialysis',
        'Renal Transplantation'
      ]
    },
    {
      name: "Dr. Vijaya Kumar", 
      slug: 'Dr-Vijaya-Kumar', 
      qualification: "MBBS, DA, DNB in Anesthesiology ", 
      department:'Anesthesiology',
      designation: 'Consultant - Anesthesiology', 
      experience: '22', 
      image: '../../assets/doctor-18.jpg',
      icon:'../../assets/male.svg', 
      about: 'Given anaesthesia for major and complicated cases experience in pain management experience in ICU speciality.', 
      expertise: [
        'Anesthesiology'
      ]
    },
    {
      name: "Dr. Palaniappan S",
      slug : "Dr-Palaniappan-S",
      qualification : "BPT, MSc(Y&N), FCR.",
      designation: 'Physiotherapist', 
      department : "Physiotheraphy",
      experience : "20",
      image : "../../assets/doctor-28.jpeg",
      about : "Ortho, stroke, cardiac Rehabilitation.",
      expertise : [
        'Cardiac & Neuro Rehabilitation'
      ]   
    },
    {
      name: "Ms. Sowmya",
      slug : "Ms-Sowmya",
      qualification : "MSc in Clinical Psychology, BA in Psychology, English and Performing Arts.",
      department : "Clinical Psychology",
      designation : "Clinical Psychologist",
      experience : "3",
      image : "../../assets/doctor-21.jpg",
      about : "Sowmya is a committed Psychologist specialised in Clinical Psychology with genuine compassion, empathy and dedication.",
      expertise : [
          'Psycho-oncology',
          'Behavioural endocrinology, Psycho-education',
          'Providing Supportive Psychotherapy',
          'Stress management counseling and treating a variety of clinical disorders using an integrative approach'
      ]
    },
    {
      name: "Dr. Vinay B N",
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
      name: "Dr. Pradeep Kumar N",
      slug : "Dr. Pradeep Kumar N",
      qualification : "MBBS, DNB - Plastic Surgery",
      department : "Plastic Surgeon",
      designation : "Consultant - Plastic Surgeon",
      experience : "12",
      image : "../../assets/doctor-22.jpeg",
      about : "Dr. Pradeep Kumar N is a Plastic Surgeon in NYPUNYA PLASTIC SURGERY TEAM, Bengaluru and has an experience of 12 years in this field. Dr. Pradeep Kumar N practices at Rangadore Memorial Hospital,  Sri Shankara...",
      expertise : [
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
      about : "During my Radiology career I was exposed to all conventional and modern imaging modalities viz Conventional Radiography, Mammography, Ultrasonography including Colour Doppler and 4D, Helical CT, MRI, Digital...",
      expertise : [
      ]
    },
    {
      name: "Dr. Pramod. B. R",
      slug : "Dr. Pramod. B. R",
      qualification : "MBBS, MS - General Surgery, MRCS (UK), MCh - U, DNB - Urology/Genito",
      department : "Urology/Genito-Urinary Surgery",
      designation : "Consultant - Urology/Genito-Urinary Surgery",
      experience : "18",
      image : "../../assets/doctor-101.png",
      about : "Dr. Pramod B R is a Senior Consultant Urologist, Andrologist and Urogynecologist in Jayanagar, Bengaluru and has an experience of 18 years in these fields. Dr. Pramod B R practices at Apollo Hospital - Jayanagar....",
      expertise : [
      ]
    },
    {
      name: "Dr. Manohar C S",
      slug : "Dr. Manohar C S",
      qualification : "MBBS, MS – Urology",
      department : "Urology/Genito-Urinary Surgery",
      designation : "Consultant - Urology/Genito-Urinary Surgery",
      experience : "17",
      image : "../../assets/doctor-101.png",
      about : "Dr. Manohar C S is a Urologist in Bengaluru and has an experience of 11 years in this field. He has done MBBS from Kempegowda Institute of Medical Sciences (KIMS), Bengaluru in 2003 and MS – Urology from Kempegowda...",
      expertise : [
      ]
    },
    {
      name: "Dr. Chethan Pai R",
      slug : "Dr. Chetan Pai R",
      qualification : "MBBS, DNB ENT",
      department : "ENT Specialist",
      designation : "Consultant - ENT Specialist",
      experience : "13",
      image : "../../assets/doctor-27.jpeg",
      about : "Dr. Chetan Pai R is a well-known ENT surgeon currently associated with SRV Agadi Hospital, Wilson Garden. He has 13 years of experience in ENT Surgery and has worked as an expert in different cities of India. He has...",
      expertise : [
        'laryngology'
      ]
    },
    {
      name: "Dr. Bangarswamy V",
      slug : "Dr Bangarswamy V",
      qualification : "MBBS, MS (General Surgery)",
      department : "General Surgery",
      designation : "Consultant - General Surgeon",
      experience : "66",
      image : "../../assets/doctor-23.jpeg",
      about : "I worked in government service in the Karnataka State Joint Service during 1958 and retired from government service as a district surgeon in 1996. After retirement, I worked in a PVT hospital as a general consultant...",
      expertise : [
      ]
    },
    {  
      name: "Dr. Subhash R C",
      slug : "Dr. Subhash R C",
      qualification : "MBBS, MS - General Surgery",
      department : "General Surgeon, Bariatric Surgeon, Laparoscopic Surgeon",
      designation : "Consultant - General Surgeon, Bariatric Surgeon, Laparoscopic Surgeon",
      experience : "25",
      image : "../../assets/doctor-26.jpeg",
      about : "Dr. Subhash has over 20 years of experience conducting surgical procedures in many of the top hospitals in the city. Specialised in minimally invasive surgeries and laser surgeries  and Practology.",
      expertise : [
      ]
    },
    {
      name: "Dr. Sachin Digamber Nale",
      slug : "Dr. Sachin Digamber Nale",
      qualification : "MBBS, MS - General Surgery",
      department : "General Surgeon, Laparoscopic Surgeon",
      designation : "Consultant - General Surgeon, Laparoscopic Surgeon",
      experience : "25",
      image : "../../assets/doctor-101.png",
      about : "Dr. Sachin Digamber Nale is a Consultant Colorectal Laparoscopic Surgeon currently practicing at Sagar Hospitals, Jayanagar, Bengaluru. BGS Global Richmond Circle, Bengaluru; Rangadore Memorial...",
      expertise : [
      ]
    },

    {
      name: "Dr. Muralikrishna N",
      slug : "Dr. Muralikrishna N",
      qualification : "MBBS, DNB - Peripheral Vascular Surgery",
      department : "Vascular Surgery",
      designation : "Consultant - Vascular Surgeon",
      experience : "18",
      image : "../../assets/doctor-101.png",
      about : "Dr. Muralikrishna is a renowned Vascular Surgeon and is an Associate Professor at the Jayadeva Institute of Cardiology, Bengaluru. He has trained in India and abroad (Europe) and is passionate about dialysis vascular...",
      expertise : [
      ]
    },
    {
      name: "Dr. Raveendra Reddy N",
      slug : "Dr Raveendra Reddy N",
      qualification : "MBBS, FcARCSI, FCCS, Fellow in Intensive Care(King's College Hospital, London)",
      department : "Anaesthesia and Intensive Care Medicine ",
      designation : "Consultant - Anaesthesia and Intensive Care",
      experience : "19",
      image : "../../assets/doctor-30.jpeg",
      about : "Completed my undergraduate from Kasturba Medical College, Manipal. Then worked as a Resident in the department of Medicine at Mallya Hospital, Bengaluru. Whilst working as resident at Mallya Hospital, passed my PLAB...",
      expertise : [
        "Critical care","Anaesthesia"
      ]
    },
    {
      name: "Dt. Asha Krishna",
      slug : "Dt Asha Krishna",
      qualification : "MSc, MPhil, DDHN, Diabetic Educator",
      department : "Dietitian",
      designation : "Consultant - Dietitian",
      experience : "12",
      image : "../../assets/doctor-100.png",
      about : "",
      expertise : [
        "Weight loss / Weight gain diet"," Diet for PCOD","Thyroid","Diabetes","Hypertension","Cancer","Arthritis","Digestive Disorder","Coronary Artery Disorder","Pediatric nutrition"]
    },
    {
      name: "Dr. Pratheek R Reddy",
      slug : "Dr-Pratheek-R-Reddy",
      qualification : "MBBS , MD , DNB , IDCCM",
      department : "anaesthesia and critical care medicine",
      designation : "Consultant - anaesthesia and critical care medicine",
      experience : "10",
      image : "../../assets/doctor-101.png",
      about : "MD anaesthesia from ramaiah medical College and fellowship in critical care medicine from Fortis hospital. ",
      expertise : [
        "geriatric anaesthesia","haemodynamic monitoring","regional anaesthesia"]
    },
    {
      name : "Dr. Darsana Ganapathy",
      slug : " Dr-Darsana-Ganapathy",
      qualification : "MBBS, DNB - RESPIRATORY MEDICINE ",
      department : "Pulmonologist ",
      designation : "Consultant - Pulmonologist",
      experience : "3",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Pragnya Coca",
      slug : "Dr-Pragnya-Coca",
      qualification : "DM - Oncology, MBBS",
      department : "Medical Onco",
      designation : "Consultant - Medical Onco",
      experience : "20",
      image : "../../assets/doctor-100.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Swaroop",
      slug : "Dr. Swaroop",
      qualification : "MBBS, MD - Radiotherapy, MRCP (UK), DM - Medical Oncology",
      department : "Medical Onco",
      designation : "Consultant - Medical Onco",
      experience : "15",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : " Dr. Bharat Kumar S",
      slug : "Dr-Bharat-Kumar-S",
      qualification : "MBBS, DNB - Neurosurgery",
      department : "Neuro Surgery",
      experience : "10",
      designation : "Consultant - Neuro Surgery",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Praveen Kumar S",
      slug : "Dr-Praveen-Kumar-S",
      qualification : "DM - Neurology, MBBS Neurologist",
      department : "Neurology",
      designation : "Consultant - Neurologist",
      experience : "20",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Shanthala Raj",
      slug : "Dr-Shanthala-Raj",
      qualification : "MBBA, DNB -OBG ",
      department : "O B G",
      designation : "Consultant - O B G",
      experience : "26",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : " Dr. Rajeev L K",
      slug : "",
      qualification : "MBBS, MD - General Medicine, DM - Medical Oncology",
      department : "Oncology",
      designation : "Consultant - Oncologist",
      experience : "32",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : " Dr. Kiran Rajappa",
      slug : "Dr-Kiran-Rajappa",
      qualification : "MBBS, MS - Orthopaedics, DNB - Orthopedics/Orthopedic Surgery, FNB - Spine Surgery",
      department : "Ortho - Spine Surgeon",
      designation : "Consultant - Ortho - Spine Surgeon",
      experience : "18",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Shashi Kumar ",
      slug : "Dr-Shashi-Kumar ",
      qualification : "MBBS, MS - Orthopaedics",
      department : "Orthopedic Surgeon ",
      designation : "Consultant - Orthopedic Surgeon",
      experience : "15",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : " Dr. Keshava Murthy M ",
      slug : "../../assets/doctor-101.png",
      qualification : "MBBS, MS, MRCS, M.Ch (Paediatric Surgery)",
      department : "Paediatric Surgeon",
      designation : "Consultant - Paediatric Surgeon",
      experience : "22",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Prashantha Kesari N K",
      slug : "Dr-Prashantha-Kesari-N-K",
      qualification : "MBBS, MS - General Surgery, MRCS (UK), DNB - General Surgery, MCh - Plastic Surgery",
      department : "Hair Transplant Surgeon, Plastic Surgeon",
      designation : "Consultant - Hair Transplant Surgeon and Plastic Surgeon",
      experience : "22",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Ravindra G ",
      slug : "Dr-Ravindra-G ",
      qualification : "MBBS, DMRT, DNB, BA",
      department : "Radiation Oncology",
      designation : "Consultant - Radiation Oncology",
      experience : "11",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. A Nagaraj Rao",
      slug : "Dr-A-Nagaraj-Rao",
      qualification : "MBBS, MS - General Surgery, MCh - Urology/Genito-Urinary Surgery",
      department : "Urology",
      designation : "Consultant - Urologist",
      experience : "26",
      image : "../../assets/doctor-101.png",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Rashmi Agarwal",
      slug : "Dr-Rashmi-Agarwal",
      qualification : "MBBS, MD(Dermatology, DNB, FRGUHS ( Pediatric Dermatology)",
      department : "Pediatric Dermatology",
      designation : "Consultant - Pediatric Dermatology",
      experience : "12",
      image : "../../assets/doctor-29.jpeg",
      about : "",
      expertise : []
    },
    {
      name : "Dr. Pavithra ",
      slug : "Dr-Pavithra",
      qualification : "MBBS, DDVL",
      department : "Dermatologist, Trichologist",
      designation : "Consultant - Dermatologist and Trichologist",
      experience : "15",
      image : "../../assets/doctor-100.png",
      about : "",
      expertise : []
    },
  ]
}
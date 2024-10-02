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
      name: "Dr. T S Bhoopal ",
      slug: 'Dr-Bhoopal-T-S',
      qualification: "MBBS, MD",
      designation: 'Managing Director',
      designation2 : "Radio Diagnosis",
      experience: '40',
      image: '../../assets/doctor-1.png',
      icon:'../../assets/male.svg',
      about: 'Aksha Hospital is the brainchild of Dr. T S Bhoopal. It is the result of his dedication and hard work of his lifetime in the medical field. Dr. T S Bhoopal, an eminent doctor, working since its inception in Sri Jayadeva Institute of Cardiology. He has very vast experience and vision in the medical field. He is known for his compassion and empathy towards patients.',
      expertise: [
        
      ]
    },
    {
      name: "Dr. Smitha Bhoopal ",
      slug: 'Dr-Smitha-Bhoopal',
      qualification: "MBBS, DGO",
      designation: 'Consultant Obstetrician & Gynaecologist',
      experience: '35', 
      image: '../../assets/doctor-2.png',
      icon:'../../assets/female.svg',
      about: 'Dr. Smitha Bhoopal is one of the most renowned, highly progressive and experienced Gynaecologist and Obstetrician in Bengaluru, practicing "Healthy Birthing" with a career spanning 35 years and having delivered more than 9000+ babies in her three- decade career. As a doctor who believed in normal deliveries, she has a high rate of success in natural childbirth, even in complicated pregnancies. She provides medical and surgical care to women and has particular expertise in pregnancy, childbirth and reproductive disorders. Her approach lies in understanding the anxieties that surround fertility, being pregnant and final delivery. She believes in ethical practices and empowers women to live healthier lives.',
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
      about: 'Dr. Sumanth Bhoopal is one of the most eminent doctors in the specialty of Surgical Gastroenterology & Interventional Endoscopy with over 20 years of expertise with 5000+ procedures. He holds vast experience in treating major and minor Gastroenterology diseases focusing on the entire digestive system which includes the esophagus, stomach, intestines, colon, pancreas, gall bladder, bile ducts, and liver. Also, he has extensive experience in the diagnosis and treatment of Acidity, Inflammatory Bowel Disease and IBS Treatment. He is compassionate toward his patients and always believes in a patient-first approach.'
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
      qualification: "MBBS, MS (OBG & GYNAEC) & FMAS", 
      designation: 'Consultant Obstetrician & Gynaecologist', 
      experience: '16', 
      image: '../../assets/doctor-4.png', 
      icon:'../../assets/female.svg',
      about: 'Dr. Madhuri Sumanth’s practice is “Respect Motherhood” and delivering the best care for all pregnant ladies. She is an experienced and compassionate renowned obstetrician for Normal deliveries and handling high-risk pregnancies. She is best in her commitment to patient safety, confidentiality, and a conservative approach while dealing with complex issues. As a full-time Senior Consultant, she holds 16+ years of expertise and more than 3500+ deliveries, handled High-risk cases & managed at the ICU level. Her relentless dedication and commitment to Obstetrics and Gynaecology has helped thousands of women live a better and healthier life.', 
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
      about: 'After obtaining her MBBS degree from Government Medical College, Bellary (VIMS), she went on to specialize in family medicine from The Bengaluru Hospital, Bengaluru and was awarded Diplomate in National Board, NBE, New Delhi. She has completed a Certificate Course in Integrated Geriatric Care (CCIGC) and a Certificate Course in Evidence-Based Diabetes Mellitus (CCEBDM), both from PHFI. Additionally, she is a trained diabetic educator and has undergone echo-based training in dementia care for general practitioners by NIMHANS. Dr. Deepa Rao is a patient-centric family physician dedicated to serving individuals of all ages. Her mission is to bridge the gap between primary and tertiary care, ensuring holistic and comprehensive healthcare for all her patients.', 
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
      name: "Dr. Sushal ShanthaKumar", 
      slug: 'Dr-Sushal-ShanthaKumar', 
      qualification: "MBBS, MS (ORTHOPAEDICS)", 
      experience: '15', 
      designation: 'Consultant - Arthroscopy & Shoulder Surgeon', 
      image: '../../assets/doctor-7.png', 
      icon:'../../assets/male.svg',
      about: 'Dr. Sushal ShanthaKumar is one of the most eminent & top 5 Orthopedic Surgeons in Bengaluru, specializing in Knee and Shoulder: Sports Injuries using arthroscopic (keyhole) and minimally invasive surgeries with over 15 years of extensive experience. He has a vast experience in Orthopedics (Knee & Shoulder), Knee Arthroscopy, Shoulder Arthroscopy, Frozen Shoulder, Sports Injuries, Shoulder Replacement, Shoulder Trauma, and Platelet-rich-plasma injections.', 
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
      about : "Dr. Anand P is a Cardiologist in Banashankari, Bengaluru and has an experience of 7 years in this field. Dr. Anand P practices at Devagiri Hospital - Powered by Medisync in Banashankari, Bengaluru and Nano Hospital in Uttarahalli, Bengaluru. He completed MBBS from RGUHS in 2009, MD - General Medicine from University College of Medical Sciences, Delhi University in 2013 and DM - Cardiology from All India Institute of Medical Sciences, New Delhi in 2017. Visiting Consultant in Cardiology  at Apollo Speciality  Hospital Jayanagar",
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
        about: 'Dr. Avani Hegde completed her MD in Paediatrics from the Advanced Paediatric Centre, PGIMER, Chandigarh, where she was awarded the institutional bronze medal for her academic excellence. She pursued her sub-specialty training in paediatric and adolescent endocrinology at the Indira Gandhi Institute of Child Health, Bengaluru.     Her medical training has provided her with extensive exposure to a wide range of paediatric and adolescent hormonal issues. Dr. Avani Hegde is a faculty member at the Indian Society of Paediatric and Adolescent Endocrinology (ISPAE) and is involved in the IDEAL module for training diabetes educators.     Dr. Avani Hegde has previously served as a faculty member at St. John\'s Medical College. She is an active member of the Indian Academy of Paediatrics and the Indian Society for Paediatric and Adolescent Endocrinology, with numerous national and international publications to her credit. Known for her dedicated and meticulous clinical care, she is loved by both children and parents alike.', 
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
      about : "I am a Professor in Paediatrics, having special interest in Paediatric Nutrition and Paediatric Allergy and Infectious Diseases. Member of many International and National Paediatric Associations.",
      expertise : [
        'Paediatric Nutrition',
        'Paediatric Allergy',
        'Paediatric Infection Disease',
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
      about: 'Dr. Manju Ashwath has dedicated over 20 years as a consultant psychiatrist, providing expert care in adult, child, and geriatric psychiatry, as well as in alcohol and substance abuse de-addiction. Her approach is comprehensive, integrating biological, psychological and social methods to support patients and their families. She has played an active role in the Indian Psychiatric Society - Karnataka Chapter and has contributed to academic discussions and research published in prominent journals. She is also a sought-after speaker, raising awareness about mental health at various educational and corporate institutions.', 
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
      about: 'Dr. Santosh H S brings extensive training and experience in diabetes and endocrinology. He completed his MBBS from Bengaluru University and earned his MRCP from the Royal College of Physicians in the UK. Dr. Santosh further honed his skills with specialist training and research in adult growth hormone deficiency and osteoporosis at the University of Liverpool. His professional journey also includes gaining experience in Islet Transplantation from Edmonton, Canada. He is recognized for his comprehensive approach to managing a wide range of endocrine disorders. His interests include complex diabetes management, insulin pump therapy and the care of pregnant women with diabetes.', 
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
      about: 'Dr Sayalee Gadgil is a practicing radiologist in Bengaluru. She completed her M.B.B.S. training from Rajiv Gandhi Medical College, Thane, Maharashtra and  post-graduate training in Radiology at Saifee hospital, Mumbai in 2019. She worked at various government institutions like King Edward Memorial (KEM) hospital and HBT Trauma hospital, Mumbai. Dr. Sayalee did an academic observership specializing in abdominal radiology at Stanford hospital in California, USA. She is a certified Fellow of the Royal College of Radiology, (F.R.C.R) UK.', 
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
      about: "Dr. Sujayendra D M is a Orthopaedic surgeon with higher training in musculoskeletal trauma and arthroplasty, 10 Years Experience Overall (7 years as specialist) Dr. Sujayendra D M practices at St. Philomena's Hospital, Bengaluru. His qualification is MBBS, MS - Orthopaedics, DNB - Orthopedics/Orthopedic Surgery", 
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
      about: "Embark on a journey of kidney care guided by the genuine expertise of Dr. Rajiv, our Lead Consultant in Nephrology and Kidney Transplantation. Dr. Rajiv isn't just a doctor; he is a partner in your quest for kidney health, offering a distinctive blend of knowledge and a sincere commitment to your well-being. In his role as the Lead Consultant, Dr. Rajiv sets the tone for our mission to redefine nephrological care. It's not just a position; it signifies a lifetime dedication to ensuring every patient experiences the highest standard of care in Nephrology and Kidney Transplantation. In the intricate landscape of renal health, Dr. Rajiv stands as a symbol of approachability, seamlessly blending traditional wisdom with cutting-edge solutions. Choosing Dr. Rajiv is choosing a knowledgeable ally in your journey to kidney well-being. His consultations go beyond routine medical discussions; they are personalized conversations where your concerns are met with understanding and a commitment to nephrological excellence. He invites you into a space where every diagnostic approach and transplant procedure is approached with a lead consultant's touch- precise, caring and dedicated to your health. Make the thoughtful decision to choose Dr. Rajiv, the lead consultant whose distinctive approach to Nephrology and Kidney Transplantation ensures that your confidence in his care is the first step toward a future of enduring renal health. Your nephrological journey is entrusted to the hands of a knowledgeable and approachable leader, committed to ensuring every aspect of your kidney care is a testament to medical excellence.", 
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
      image : "../../assets/doctor-19.jpg",
      about : "Ortho, stroke, cardiac Rehabilitation.",
      expertise : [
        'Cardiac & Neuro Rehabilitation'
      ]   
    },

    {
      name: "Dr. Sowmya S",
      slug : "Dr-Sowmya-S",
      qualification : "MSc in Clinical Psychology, BA in Psychology, English, and Performing Arts.",
      department : "Clinical Psychology",
      designation : "Clinical Psychology",
      experience : "3",
      image : "../../assets/doctor-21.jpg",
      about : "Sowmya is a committed Psychologist specialised in Clinical Psychology with genuine compassion, empathy and dedication. Her exceptional communication skills and profound grasp of psychological theories and therapies enable her to offer insightful and effective support to her patients. ",
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
      qualification : "MBBS, MS - General Surgery, Fellowship in Gastroenterology, MCh - Surgical Gastroenterology/G.I. Surgery",
      department : "Gastroenterologist,GastroIntestinal Surgeon,Laparoscopic Surgeon",
      designation : "Consultant - Gastroenterologist",
      experience : "23",
      image : "../../assets/doctor-15.png",
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
      about : "Dr. Pradeep Kumar N is a Plastic Surgeon in NYPUNYA PLASTIC SURGERY TEAM, Bengaluru and has an experience of 12 years in this field. Dr. Pradeep Kumar N practices at Rangadore Memorial Hospital,  Sri Shankara cancer foundation, Q-Medical Centre in Sivanchetti Gardens, Bengaluru, Kanva sri sai Hospital in Nandini Layout, Bengaluru and DHEE Hospitals in Kanakpura Road, Bengaluru. He completed MBBS from BMCRI in 2012 and DNB - Plastic Surgery from National Board of Examination, India in 2018.",
      expertise : [

      ]
    },
    {
      name: "Dr. Bharath Kumar V. K",
      slug : "Dr. Bharath Kumar V. K",
      qualification : "MBBS, DMRD",
      department : " specialist in Radiology / Sonology / Ultrasound",
      designation : "Consultant - Radiology",
      experience : "",
      image : "../../assets/doctor-15.png",
      about : "During my Radiology career I was exposed to all conventional and modern imaging modalities viz Conventional Radiography, Mammography, Ultrasonography including Colour Doppler and 4D, Helical CT, MRI, Digital Subtraction Angiography, Picture Archieving and Communication System (PACS) and Teleradiology.",
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
      image : "../../assets/doctor-15.png",
      about : "Dr. Pramod B R is a Senior Consultant Urologist, Andrologist and Urogynecologist in Jayanagar, Bengaluru and has an experience of 18 years in these fields. Dr. Pramod B R practices at Apollo Hospital - Jayanagar in Jayanagar, Bengaluru, Apollo Hospital in Bannerghatta Road, Bengaluru. He completed MBBS from Mysore Medical College in 2000, MS - General Surgery from Stanley Medical College & Hospital, Chennai in 2005 and MRCS (UK) from The Royal College of Surgeons (RCS), the UK in 2006. He Completed MCh - Urology/Genito-Urinary Surgery from Rajiv Gandhi University of Health Sciences RGUHS 2010 & DNB - Urology/Genito - Urinary Surgery from New Delhi.",
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
      image : "../../assets/doctor-15.png",
      about : "Dr. Manohar C S is a Urologist in Bengaluru and has an experience of 11 years in this field. He has done MBBS from Kempegowda Institute of Medical Sciences (KIMS), Bengaluru in 2003 and MS – Urology from Kempegowda Institute of Medical Sciences (KIMS), Bengaluru in 2006.He is a member of Urological Society of India (USI) and American Urological Association (AUA). Some of the services provided by the doctor are: Laparoscopy, Andrology, Urinary Incontinence (Ui) Treatment, Pediatric Urology and Reconstructive Urology etc.",
      expertise : [
      ]
    },
    {
      name: "Dr. Chetan Pai R",
      slug : "Dr. Chetan Pai R",
      qualification : "MBBS, DNB ENT",
      department : "ENT Specialist",
      designation : "Consultant - ENT Specialist",
      experience : "13",
      image : "../../assets/doctor-15.png",
      about : "Dr. Chetan Pai R is a well-known ENT surgeon currently associated with SRV Agadi Hospital, Wilson Garden. He has 13 years of experience in ENT Surgery and has worked as an expert in different cities of India. He has worked in many reputed hospitals. Doctor Chetan has contributed to handling many complex medical cases in several hospitals. He is known for his attention to accurate diagnosis and for treating patients with empathy. The speciality interests of Dr. Chetan are rhinological, laryngological procedures and skull base surgeries. He is an active member of various associations and organizations. Dr. Pai did his MBBS from Sri Devaraj Urs Medical College, Kolar and his DNB in ENT from St. Johns Medical College, Bengaluru, in 2011. He has also participated in research work and various workshops under the ENT department and published many papers. Doctor Pai has also received many awards in his field.",
      expertise : [

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
      about : "I worked in government service in the Karnataka State Joint Service during 1958 and retired from government service as a district surgeon in 1996. After retirement, I worked in a PVT hospital as a general consultant. At present, I am working at Aksha Hospital, Jayanagar, 7th block. 1st Appiontment during 1958 at district hospital Ballary, worked as medical office in numerous health centers and district hospitals after obtaining MS qualification.",
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
      image : "../../assets/doctor-15.png",
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
      image : "../../assets/doctor-15.png",
      about : "Dr. Sachin Digamber Nale is a Consultant Colorectal Laparoscopic Surgeon currently practicing at Sagar Hospitals, Jayanagar, Bengaluru. BGS Global Richmond Circle, Bengaluru; Rangadore Memorial Hospital, Bengaluru. He is an expert in performing general minimal access gastrointestinal colorectal surgeries including laparoscopic cholecystectomy, laparoscopic appendicectomy, laparoscopic hernioplasty, as well as upper GI endoscopy and sigmoidoscopy.",
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
      image : "../../assets/doctor-15.png",
      about : "Dr. Muralikrishna is a renowned Vascular Surgeon and is an Associate Professor at the Jayadeva Institute of Cardiology, Bengaluru. He has trained in India and abroad (Europe) and is passionate about dialysis vascular access which is the 'Achilles heel' of dialysis.",
      expertise : [
      ]
    },
    {
      name: "Dr. Raveendra Reddy N",
      slug : "Dr Raveendra Reddy N",
      qualification : "MBBS, FcARCSI, FCCS, Fellow in Intensive Care(King's College Hospital, London)",
      department : "Anaesthesia and Intensive Care Medicine ",
      designation : "Consultant - Anaesthesia and Intensive Care Medicine ",
      experience : "19",
      image : "../../assets/doctor-15.png",
      about : "Completed my undergraduate from Kasturba Medical College, Manipal. Then worked as a Resident in the department of Medicine at Mallya Hospital, Bengaluru. Whilst working as resident at Mallya Hospital, passed my PLAB exam to pursue a career in the UK. Even in the UK, worked as a senior resident in the department of Medicine to gain and consolidate medicine knowledge. Then I started my career in Anaesthesia, cleared my Fellowship exams and worked in different hospitals in the UK. Before relocating to India, I completed one-year fellowship program in Intensive Care Medicine at King's College Hospital, London, where I gained immense experience in Critical Care Medicine.",
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
      image : "../../assets/doctor-15.png",
      about : "",
      expertise : [
        "Weight loss / Weight gain diet"," Diet for PCOD","Thyroid","Diabetes","Hypertension","Cancer","Arthritis","Digestive Disorder","Coronary Artery Disorder","Pediatric nutrition"]
    },
    {
      name: "Dr. Pratheek R Reddy",
      slug : "Dr-Pratheek-R-Reddy",
      qualification : "MBBS , MD , DNB , IDCCM",
      department : "anaesthesia and critical care medicine",
      designation : "Consultant - Anaesthesia and Critical care medicine",
      experience : "10",
      image : "../../assets/doctor-15.png",
      about : "MD anaesthesia from ramaiah medical College and fellowship in critical care medicine from Fortis hospital. ",
      expertise : [
        "Geriatric Anaesthesia","Haemodynamic Monitoring","Regional Anaesthesia"]
    },
    // {
    //   name : "Reshma Bhoopal",
    //   slug : "Reshma-Bhoopal",
    //   qualification : "MBA in Human Resources – Indiana University of Pennsylvania, B.E. in Computer Science – PES University, Bengaluru, SHRM-CP Certification – Certified, May 2024",
    //   experience : "6",
    //   designation : "HR Professional | SHRM-CP Certified",
    //   image : "../../assets/ReshmaBhoopal.png",
    //   about : "Reshma Bhoopal is an experienced HR professional with over 6 years of expertise in talent acquisition, employee engagement, and HR compliance. Holding an MBA in Human Resources and a Bachelor's in Computer Science, she blends her global HR knowledge with hands-on experience in HR technology, including PeopleSoft HRMS. She has worked with prominent organizations, including Aksha Hospital and Nous Infosystems, driving employee relations, compliance training, and recruitment strategies. Reshma’s entrepreneurial spirit also shines through her role as the owner of Arts from Glass, where she manages business operations and creative workshops.",
    //   expertise : [
    //     "Talent Acquisition & Employee Relations","HR Compliance & Training", "Business Operations & Financial Management", "HRMS & PeopleSoft HRMS Specialist"
    //   ]

    // },

  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const doctorSlug = this.route.snapshot.paramMap.get('name');
    this.doctor = this.doctors.find(d => d.slug === doctorSlug);
  }
}

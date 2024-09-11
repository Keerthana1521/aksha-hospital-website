import { Component } from '@angular/core';
// import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  //  tabs= [
  //   { icon_1 : "", icon_2 : "", title: '', content: '',isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '', content: '', isOpen: false,},
  //   { icon_1 : "", icon_2 : "", title: '', content: '', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '', content: '', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '', content: '', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '', content: '', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '', content: '', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '', content: 'Pediatrics / Pediatric Surgery / NICU: Dedicated care for children, including specialized pediatric surgeries and neonatal intensive care for newborns.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Joint Replacement', content: 'Joint Replacement: Advanced joint replacement surgeries, restoring mobility and improving the quality of life for patients with joint issues.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'ENT / Audiometry / Ophthalmology', content: 'ENT / Audiometry / Ophthalmology: Comprehensive services for ear, nose, throat, and eye care, including diagnostic and surgical treatments.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Medical and Surgical Oncology', content: 'Medical and Surgical Oncology: Integrated cancer care offering both medical and surgical oncology treatments for various types of cancer.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Medical and Surgical Oncology', content: 'Medical and Surgical Oncology: Integrated cancer care offering both medical and surgical oncology treatments for various types of cancer.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Dermatology / Cosmetic Surgery', content: 'Medical and Surgical Oncology: Integrated cancer care offering both medical and surgical oncology treatments for various types of cancer.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Medical and Surgical Oncology', content: 'Medical and Surgical Oncology: Integrated cancer care offering both medical and surgical oncology treatments for various types of cancer.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Dermatology / Cosmetic Surgery', content: 'Dermatology / Cosmetic Surgery: Specialized dermatology services and cosmetic surgeries for skin health and aesthetic enhancement.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Facio Maxillary Surgery', content: 'Facio Maxillary Surgery: Surgical care for facial trauma and jaw-related conditions, ensuring both functional and aesthetic outcomes.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Neurology / EEG / Doppler', content: 'Neurology / EEG / Doppler: Expert care for neurological disorders with advanced diagnostics like EEG and Doppler studies.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Neuro Surgery', content: 'Neuro Surgery: Specialized surgical treatments for brain and spinal conditions using the latest neurosurgical techniques.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Plastic & Vascular Surgery', content: 'Plastic & Vascular Surgery: Offers reconstructive plastic surgeries and treatments for vascular conditions to restore form and function.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", titltabse: 'Urology / Lithotripsy / laser Surgery', content: 'Urology / Lithotripsy / Laser Surgery: Comprehensive urology services, including non-invasive lithotripsy and advanced laser surgeries for urinary issues.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Pulmonology / PFT / Spirometry / Bronchoscopy', content: 'Pulmonology / PFT / Spirometry / Bronchoscopy: Specialized care for respiratory conditions with advanced diagnostic tools like PFT and bronchoscopy.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Nephrology / Haemo Dialysis', content: 'Nephrology / Haemo Dialysis: Provides expert care for kidney-related conditions, including regular hemodialysis for patients with renal failure.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Gastroenterology / Endoscopy / Colonoscopy', content: 'Gastroenterology / Endoscopy / Colonoscopy: Comprehensive digestive health services, including diagnostic procedures like endoscopy and colonoscopy.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Psychiatry', content: 'Psychiatry: Offers mental health services including diagnosis, treatment, and counseling for a variety of psychiatric conditions.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Physiotherapy', content: 'Psychiatry: Offers mental health services including diagnosis, treatment, and counseling for a variety of psychiatric conditions.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'X-Ray / Ultrasound Scan / 2D Echo', content: 'X-Ray / Ultrasound Scan / 2D Echo: Advanced imaging services including X-ray, ultrasound, and 2D Echo for accurate diagnosis and treatment planning.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: 'Day Care', content: 'Day Care: Convenient day care services for minor surgeries and treatments, allowing patients to return home the same day.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '24 Hrs. Laboratory', content: '24 Hrs. Laboratory: Provides 24/7 laboratory services for timely and accurate diagnostic testing, supporting all medical departments.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '24 Hrs. Pharmacy', content: '24 Hrs. Pharmacy: On-site pharmacy available 24/7, ensuring patients have access to necessary medications at all times.', isOpen: false },
  //   { icon_1 : "", icon_2 : "", title: '24 Hrs. Ambulance Service', content: '24 Hrs. Ambulance Service: Emergency ambulance services available 24/7, providing quick and efficient transportation to and from the hospital.', isOpen: false },
  // ];

  tabs = [
    { icon_1 : "../../assets/services/icon_1.png", icon_2 : "../../assets/services/icon_1_c.png", title: '24 Hrs. Emergency & Trauma Care', content: '24 Hrs. Emergency & Trauma Care: Provides immediate medical attention for critical and trauma cases, available 24/7 for all emergencies.',isOpen: false },
    { icon_1 : "../../assets/services/icon_2.png", icon_2 : "../../assets/services/icon_2_c.png", title: 'Modular O.T.', content: 'Modular O.T.: Equipped with advanced technology for a wide range of surgeries, ensuring a sterile and safe environment.',isOpen: false },
    { icon_1 : "../../assets/services/icon_3.png", icon_2 : "../../assets/services/icon_3_c.png", title: 'General Medicine/Intensive Care Unit', content: 'General Medicine / Intensive Care Unit: Offers comprehensive care for general medical conditions and intensive monitoring for critically ill patients.',isOpen: false },
    { icon_1 : "../../assets/services/icon_4.png", icon_2 : "../../assets/services/icon_4_c.png", title: 'Cardiology', content: 'Cardiology Cardiology: Specialized heart care services including diagnostics, treatment, and management of cardiovascular diseases.',isOpen: false },
    { icon_1 : "../../assets/services/icon_5.png", icon_2 : "../../assets/services/icon_5_c.png", title: 'General Surgery / Laparoscopic Surgery', content: 'General Surgery / Laparoscopic Surgery General Surgery / Laparoscopic Surgery: Provides advanced surgical options, including minimally invasive laparoscopic procedures for quicker recovery.',isOpen: false },
    { icon_1 : "../../assets/services/icon_6.png", icon_2 : "../../assets/services/icon_6_c.png", title: 'Obstetrics & Gynaecology', content: 'Obstetrics & Gynaecology Obstetrics & Gynaecology: Comprehensive care for women’s health, from prenatal and postnatal care to gynecological surgeries.',isOpen: false },
    { icon_1 : "../../assets/services/icon_7.png", icon_2 : "../../assets/services/icon_7_c.png", title: 'Orthopedic & Trauma / Arthroscopic Surgeries', content: 'Orthopedic & Trauma / Arthroscopic Surgeries Orthopedic & Trauma / Arthroscopic Surgeries: Expert care for bone and joint conditions, including trauma and minimally invasive arthroscopic surgeries.',isOpen: false },
    { icon_1 : "../../assets/services/icon_8.png", icon_2 : "../../assets/services/icon_8_c.png", title: 'Pediatrics / Pediatric Surgery / NICU', content: 'Pediatrics / Pediatric Surgery / NICU Pediatrics / Pediatric Surgery / NICU: Dedicated care for children, including specialized pediatric surgeries and neonatal intensive care for newborns.',isOpen: false },
    { icon_1 : "../../assets/services/icon_9.png", icon_2 : "../../assets/services/icon_9_c.png", title: 'Joint Replacement', content: 'Joint Replacement Joint Replacement: Advanced joint replacement surgeries, restoring mobility and improving the quality of life for patients with joint issues.',isOpen: false },
    { icon_1 : "../../assets/services/icon_10.png", icon_2 : "../../assets/services/icon_10_c.png", title: 'ENT / Audiometry / Ophthalmology', content: 'ENT / Audiometry / Ophthalmology: Comprehensive services for ear, nose, throat, and eye care, including diagnostic and surgical treatments.',isOpen: false },
    { icon_1 : "../../assets/services/icon_11.png", icon_2 : "../../assets/services/icon_11_c.png", title: 'Medical and Surgical Oncology', content: 'Medical and Surgical Oncology: Integrated cancer care offering both medical and surgical oncology treatments for various types of cancer.',isOpen: false },
    { icon_1 : "../../assets/services/icon_12.png", icon_2 : "../../assets/services/icon_12_c.png", title: 'Dermatology / Cosmetic Surgery', content: 'Dermatology / Cosmetic Surgery: Specialized dermatology services and cosmetic surgeries for skin health and aesthetic enhancement.',isOpen: false },
    { icon_1 : "../../assets/services/icon_13.png", icon_2 : "../../assets/services/icon_13_c.png", title: 'Facio Maxillary Surgery', content: 'Facio Maxillary Surgery: Surgical care for facial trauma and jaw-related conditions, ensuring both functional and aesthetic outcomes.',isOpen: false },
    { icon_1 : "../../assets/services/icon_14.png", icon_2 : "../../assets/services/icon_14_c.png", title: 'Neurology / EEG / Doppler', content: 'Neurology / EEG / Doppler: Expert care for neurological disorders with advanced diagnostics like EEG and Doppler studies.',isOpen: false },
    { icon_1 : "../../assets/services/icon_26.png", icon_2 : "../../assets/services/icon_26_c.png", title: 'Plastic & Vascular Surgery', content: 'Plastic & Vascular Surgery: Offers reconstructive plastic surgeries and treatments for vascular conditions to restore form and function.',isOpen: false },
    { icon_1 : "../../assets/services/icon_15.png", icon_2 : "../../assets/services/icon_15_c.png", title: 'Neuro Surgery', content: 'Neuro Surgery: Specialized surgical treatments for brain and spinal conditions using the latest neurosurgical techniques.',isOpen: false },
    { icon_1 : "../../assets/services/icon_17.png", icon_2 : "../../assets/services/icon_17_c.png", title: 'Pulmonology / PFT / Spirometry / Bronchoscopy', content: 'Neuro Surgery: Specialized surgical treatments for brain and spinal conditions using the latest neurosurgical techniques.',isOpen: false },
    { icon_1 : "../../assets/services/icon_16.png", icon_2 : "../../assets/services/icon_16_c.png", title: 'Urology / Lithotripsy / laser Surgery', content: 'Urology / Lithotripsy / Laser Surgery: Comprehensive urology services, including non-invasive lithotripsy and advanced laser surgeries for urinary issues.',isOpen: false },
    { icon_1 : "../../assets/services/icon_19.png", icon_2 : "../../assets/services/icon_19_c.png", title: 'Gastroenterology / Endoscopy / Colonoscopy', content: 'Gastroenterology / Endoscopy / Colonoscopy: Comprehensive digestive health services, including diagnostic procedures like endoscopy and colonoscopy.',isOpen: false },
    { icon_1 : "../../assets/services/icon_18.png", icon_2 : "../../assets/services/icon_18_c.png", title: 'Nephrology / Haemo Dialysis', content: 'Nephrology / Haemo Dialysis: Provides expert care for kidney-related conditions, including regular hemodialysis for patients with renal failure.',isOpen: false },
    { icon_1 : "../../assets/services/icon_21.png", icon_2 : "../../assets/services/icon_21_c.png", title: 'Physiotherapy', content: 'Physiotherapy: Provides rehabilitation and therapy services to aid recovery and improve physical function after injury or surgery.',isOpen: false },
    { icon_1 : "../../assets/services/icon_20.png", icon_2 : "../../assets/services/icon_20_c.png", title: 'Psychiatry', content: 'Psychiatry: Offers mental health services including diagnosis, treatment, and counseling for a variety of psychiatric conditions.',isOpen: false },
    { icon_1 : "../../assets/services/icon_23.png", icon_2 : "../../assets/services/icon_23_c.png", title: 'Day Care', content: 'Day Care: Convenient day care services for minor surgeries and treatments, allowing patients to return home the same day.',isOpen: false },
    { icon_1 : "../../assets/services/icon_22.png", icon_2 : "../../assets/services/icon_22_c.png", title: 'X-Ray / Ultrasound Scan / 2D Echo', content: 'X-Ray / Ultrasound Scan / 2D Echo: Advanced imaging services including X-ray, ultrasound, and 2D Echo for accurate diagnosis and treatment planning.',isOpen: false },
    { icon_1 : "../../assets/services/icon_27.png", icon_2 : "../../assets/services/icon_27_c.png", title: '24 Hrs. Pharmacy', content: '24 Hrs. Pharmacy: On-site pharmacy available 24/7, ensuring patients have access to necessary medications at all times.',isOpen: false },
    { icon_1 : "../../assets/services/icon_24.png", icon_2 : "../../assets/services/icon_24_c.png", title: '24 Hrs. Laboratory', content: '24 Hrs. Laboratory: Provides 24/7 laboratory services for timely and accurate diagnostic testing, supporting all medical departments.',isOpen: false },
    { icon_1 : "../../assets/services/icon_25.png", icon_2 : "../../assets/services/icon_25_c.png", title: '24 Hrs. Ambulance Service', content: '24 Hrs. Ambulance Service: Emergency ambulance services available 24/7, providing quick and efficient transportation to and from the hospital.',isOpen: false },
  ]

}

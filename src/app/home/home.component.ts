import { Component, ElementRef, OnInit, ViewChild,OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('counterSection', { static: true }) counterSection!: ElementRef;
  @ViewChild('carousel') carousel!: ElementRef;  // Reference to the icon carousel

  stopCounters: any[] = [];
  numbers = [
    { number: 0, target: 20, statement: 'Expertise Doctors', showPlus: true },
    { number: 0, target: 50, statement: 'Qualified Staff', showPlus: true },
    { number: 0, target: 400, statement: 'High-Risk Pregnancy Treatment', showPlus: true },
    { number: 0, target: 7000, statement: 'Happy Patients', showPlus: true },
    { number: 0, target: 500, statement: 'Laparoscopic Surgeries', showPlus: true },
    { number: 0, target: 200, statement: 'IVF Treatment', showPlus: true }
  ];
  carouselItems = [
    {
      heading: 'Hospital',
      text: 'Aksha Hospital is committed to delivering exceptional healthcare with a focus on compassionate, patient-centered care.',
      image: '../../assets/caro-1.png', // Replace with actual image path
      bgImage: '../../assets/caro-1.png', // Replace with background image path
    },
    {
      heading: 'Modern Facilities',
      text: 'Our facility is equipped with the latest medical technology and staffed by highly skilled professionals.',
      image: '../../assets/caro-2.png',
      bgImage: '../../assets/caro-2.png',
    },
    {
      heading: 'Compassionate Care',
      text: 'We provide a comprehensive range of services, ensuring quality treatment and a supportive environment for all our patients.',
      image: '../../assets/caro-3.png',
      bgImage: '../../assets/caro-3.png',
    },
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
    },
    {
      name: 'High-Risk Pregnancy Care',
      description:
        'High-risk pregnancies are pregnancies that have the chance of developing complications for both mother and child. People who are underweight or overweight, younger than 18 or older than 35, anemic, into their 5th pregnancy or more; have had previous preterm births, had given births to a large or small baby, had a previous pregnancy loss, history of genetic disease, substance abuse, previous cases of twins or triplets, taken infertility medications, or have medical conditions like high BP, heart disease, etc.',
      image: 'assets/dept-1.png',
      icon: 'assets/dept-icon-2.png',
    },
    {
      name: 'Female Infertility Treatment',
      description:
        'Infertility treatment helps couples who are unable to conceive with conception. There are various types of treatment methods based on the cause of infertility. In the case of women, infertility is treated by medications or fertility drugs in cases of hormonal imbalance or problems related to ovulation. Surgery in case the fallopian tubes are blocked or similar such situations Use of assistive reproductive technology (ART) to solve infertility problems.',
      image: 'assets/dept-2.png',
      icon: 'assets/dept-icon-3.png',
    },
    {
      name: 'Surgery + Gastrosurgery',
      description:
        'Gastroenterology is a specialty of medicine that focuses on the diseases affecting the digestive system. This includes the esophagus, stomach, small intestine, colon and rectum, pancreas, gallbladder, bile ducts, and liver. Though many types of digestive problems can be treated with lifestyle changes and medicines, some of them might require a surgical intervention. Surgical gastroenterology is a part of gastroenterology that is related to treating gastric disorders that might require surgical intervention.',
      image: 'assets/dept-3.png',
      icon: 'assets/dept-icon-4.png',
    },
    {
      name: 'Vascular Surgeries',
      description:'Vascular surgery is a surgical subspeciality in which diseases of the vascular system, or arteries, veins, and lymphatic circulation, are managed by medical therapy, minimally invasive catheter procedures, and surgical reconstruction. Some of the vascular surgeries that our team performs include varicose vein Trendelenburg operation, diabetic foot care, and laser procedures',
      image: 'assets/dept-4.png',
      icon: 'assets/dept-icon-5.png',
    },
    {
      name: 'Endoscopic Procedures',
      description:
        'Endoscopic surgery is performed using a scope, a flexible tube with a camera, and light at the tip. This allows your surgeon to see inside the organ and perform procedures without making major incisions, allowing for easier recovery time and less pain and discomfort. Some procedures performed include: diagnostic procedures in gastroscopy and colonoscopy Therapeutic procedures like banding, sclerotherapy, balloon esophagus dilatation, stent placements, PEG tube insertions, and polypectomies. ERCP procedures are also done here.',
      image: 'assets/dept-5.png',
      icon: 'assets/dept-icon-6.png',
    },
    {
      name: 'Cardiology',
      description:'Cardiology is a medical specialty and a branch of internal medicine concerned with disorders of the heart. It deals with the diagnosis and treatment of such conditions as congenital heart defects, coronary artery disease, electrophysiology, heart failure, and valvular heart disease. Subspecialties of the cardiology field include cardiac electrophysiology, echocardiography, interventional cardiology, and nuclear cardiology.',
      image: 'assets/dept-6.png',
      icon: 'assets/dept-icon-7.png',
    },
    {
      name: 'Paediatric & NICU',
      description:
        'Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18. NICU refers to the Neonatal Intensive Care Unit. The birth of a baby is a wonderful and very complex process. Many physical and emotional changes occur for both mother and baby. A baby must make many physical adjustments to life outside the mother’s body. Leaving the uterus means that a baby can no longer depend on the mother’s blood supply and placenta for important body functions. We can manage preborn babies from 32 weeks.',
      image: 'assets/dept-7.png',
      icon: 'assets/dept-icon-8.png',
    },
    {
      name: 'General Physician',
      description:
        'With healthcare now becoming a priority to most, even the smallest signs of sickness receive care. From an itchy throat to a mild cough or a spike in temperature, many rush to clinics to seek care from general physicians. Our general physicians are highly trained specialists who provide non-surgical health care to patients. They evaluate the medical condition of the patients by suggesting a few lab tests to finalize the diagnosis. They also perform health check-ups on a regular basis to evaluate the status of a disease or medical condition.',
      image: 'assets/dept-8.png',
      icon: 'assets/dept-icon-9.png',
    },

    // Add more departments as needed
  ];

  // This holds the currently selected department
  selectedDepartment = this.departments[0];
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
  constructor() {}
ngOnInit() {
  this.autoChangeInterval = setInterval(() => {
    // this.currentDepartmentIndex = (this.currentDepartmentIndex + 1) % this.departments.length;
    // this.selectedDepartment = this.departments[this.currentDepartmentIndex];
    this.changeDepartment((this.currentDepartmentIndex + 1) % this.departments.length, true);
  }, 2000); // 20 seconds interval
  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the section is visible
  };
   // Start the automatic carousel change every 2 seconds
   this.autoCarouselChangeInterval = setInterval(() => {
    this.nextSlide();
  }, 2000); // 2 seconds

  const observer = new IntersectionObserver(this.startCounter.bind(this), options);
  observer.observe(this.counterSection.nativeElement);

  console.log('Observer initialized');


  this.isMobile = window.innerWidth <= 768;
}
nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
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

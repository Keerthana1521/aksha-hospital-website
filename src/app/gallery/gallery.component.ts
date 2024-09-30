import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    '../../assets/Photo/ANESTHESIA WORKROOM.jpg',
    '../../assets/Photo/AUTOMATIC SENSOR DOOR.jpg',
    '../../assets/Photo/CANTEEN.jpg',
    '../../assets/Photo/CSSD.jpg',
    '../../assets/Photo/DD.jpg',
    '../../assets/Photo/DELUXE BOARD.png',
    '../../assets/Photo/DF.png',
    '../../assets/Photo/EMERGENCY.jpg',
    '../../assets/Photo/GYNOCOLOGY OPD.jpg',
    '../../assets/Photo/ICU DIALYSIS.jpg',
    '../../assets/Photo/INCUBATOR.jpg',
    '../../assets/Photo/IP BILLING.jpg',
    '../../assets/Photo/LABORATORY.jpg',
    '../../assets/Photo/NEONATAL ICU.jpg',
    '../../assets/Photo/NURSING COUNTER.jpg',
    '../../assets/Photo/OT.png',
    '../../assets/Photo/OT ENTRANCE.jpg',
    '../../assets/Photo/LAPAROSCOPY.jpg',
    '../../assets/Photo/PHARMACY.png',
    '../../assets/Photo/PHOTO THERAPY.jpg',
    '../../assets/Photo/RECEPTION LOBBY.png',
    '../../assets/Photo/SCRUB AREA.jpg',
    '../../assets/Photo/SEMI BROUCHER.jpg',
    '../../assets/Photo/SPECIAL WARD.jpg',
    '../../assets/Photo/ULTRASOUND.png',
    '../../assets/Photo/X-RAY.jpg',
    '../../assets/Photo/CHANGING ROOM.jpg',
    // Add more images as needed
  ];

  getCaption(imageSrc: string): string {
    return imageSrc.split('/').pop()?.split('.')[0] || '';
  }
}

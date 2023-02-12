import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-zdjecia',
  templateUrl: './zdjecia.component.html',
  styleUrls: ['./zdjecia.component.css']
})
export class ZdjeciaComponent implements OnInit {
  images = [
    { 'src': 'assets/img/galeria/a4.jpg', 'caption': 'Zdjęcie 1', 'thumb':
    'assets/img/galeria/a4.jpg' },
    { 'src': 'assets/img/galeria/a5.JPG', 'caption': 'Zdjęcie 2', 'thumb':
    'assets/img/galeria/a5.JPG' },
    { 'src': 'assets/img/galeria/a3.jpg', 'caption': 'Zdjęcie 3', 'thumb':
    'assets/img/galeria/a3.jpg' },
    { 'src': 'assets/img/galeria/a6.JPG', 'caption': 'Zdjęcie 4', 'thumb':
    'assets/img/galeria/a6.JPG' },
    { 'src': 'assets/img/galeria/a2.jpg', 'caption': 'Zdjęcie 5', 'thumb':
    'assets/img/galeria/a2.jpg' },
    { 'src': 'assets/img/galeria/a7.jpg', 'caption': 'Zdjęcie 6', 'thumb':
    'assets/img/galeria/a7.jpg' },
    { 'src': 'assets/img/galeria/a8.jpg', 'caption': 'Zdjęcie 7', 'thumb':
    'assets/img/galeria/a8.jpg' },
    { 'src': 'assets/img/galeria/a1.jpg', 'caption': 'Zdjęcie 8', 'thumb':
    'assets/img/galeria/a1.jpg' },
  ];
  constructor(private lightbox: Lightbox) {

  }

  ngOnInit() {
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.images, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}

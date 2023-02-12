import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  album:any = [];

  constructor(private lightbox: Lightbox) {
    this.album.push({'src':'assets/img/projekty/strona.PNG','caption':'Strona','thumb':'assets/img/projekty/strona.PNG'});

    this.album.push({'src':'assets/img/projekty/flutter.png','caption':'Aplikacja','thumb':'assets/img/projekty/flutter.png'});

  }

  ngOnInit() {
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.album, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent {
  //images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ['assets/img/HomeWedding1.jpg', 'assets/img/saril_cover2.jpg', 'assets/img/coverpic.jpg', 'assets/img/lenze.jpg'];
  constructor() {
  }
}
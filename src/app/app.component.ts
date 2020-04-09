import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SMambaliPhotography';
  public imagesUrl;

  constructor() {

  }

  ngOnInit() {
    this.imagesUrl = ['assets/img/Saril_cover.jpg', 'assets/img/saril_cover2.jpg', 'assets/img/coverpic.jpg'];
  }
}

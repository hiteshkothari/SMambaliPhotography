import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  flag = false;
  // @Output() urlposition: EventEmitter<>;
  constructor() { }

  ngOnInit(): void {
  }
  // changeURLPOSITION() {
  //   this.
  // }
  // callFunction() {
  //   console.log("in function");
  //   this.flag = true;

  // }
}

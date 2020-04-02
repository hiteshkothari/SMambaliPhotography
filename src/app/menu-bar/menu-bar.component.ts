import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  flag = false;

  constructor() { }

  ngOnInit(): void {
  }

  callFunction() {
    console.log("in function");
    this.flag = true;
    
  }
}

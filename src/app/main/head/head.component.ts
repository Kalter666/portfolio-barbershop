import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  isMenuOpened = false;

  constructor() {
  }

  ngOnInit() {
  }

  onMenuToggle() {
    this.isMenuOpened = !this.isMenuOpened;
  }

}

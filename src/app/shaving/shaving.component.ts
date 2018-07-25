import { Component, OnInit } from '@angular/core';
import { Item } from '../list.interface';
import { shavingList } from './shaving-list';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shaving',
  templateUrl: './shaving.component.html',
  styleUrls: ['./shaving.component.scss']
})
export class ShavingComponent implements OnInit {
  list: Item[];

  constructor(private titleService: Title) {
    this.list = shavingList;
  }

  ngOnInit() {
    this.titleService.setTitle('Барбершоп | Бритьё');
  }

}

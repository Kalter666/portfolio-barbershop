import { Component, OnInit } from '@angular/core';
import { Item } from '../list.interface';
import { shavingList } from './shaving-list';

@Component({
  selector: 'app-shaving',
  templateUrl: './shaving.component.html',
  styleUrls: ['./shaving.component.scss']
})
export class ShavingComponent implements OnInit {
  list: Item[];

  constructor() {
    this.list = shavingList;
  }

  ngOnInit() {
  }

}
